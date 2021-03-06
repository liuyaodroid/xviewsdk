import { Component } from "@angular/core";
import { XviewSdk } from "@xiaheng/xviewsdk";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the QqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-qq",
  templateUrl: "qq.html"
})
export class QqPage {
  xviewResult = {
    code: 2,
    message: "回调数据"
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QqPage");
  }

  login() {
    let qqData = {
      appId: "101509511",
      appKey: "e71fa5f4eb281ec28dc440d61ec8c17f"
    };

    XviewSdk.getInstance()
      .ComponentQQ.Login(qqData)
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result.data));
        },
        _error => {
          this.xviewResult = _error;
          alert("_error:" + JSON.stringify(_error));
          console.error(_error);
        }
      );
  }

  shareType(_type: any) {
    let qqConfig = {
      appId: "101540451",
      appKey: "e71fa5f4eb281ec28dc440d61ec8c17f",
      platform:"QQ"
    };


    let shareData = this.createShareMedia(_type, qqConfig);

    XviewSdk.getInstance()
      .ComponentQQ.Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result));
        },
        _error => {
          this.xviewResult = _error;
          alert("_error:" + JSON.stringify(_error));
          console.error(_error);
        }
      );
  }

  createShareMedia(_type: string, _shareMedia: any) {
    let _shareData;

    switch (_type) {
      case "text":
        _shareData = {
          text: "xview 组件化 测试 shareText"
        };
        break;
      case "image":
        _shareData = {
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "xview 组件化 分享 图片",
          description: "网络图片测试"
        };
        break;
      case "webPage":
        _shareData = {
          webUrl: "http://www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "身轻如燕",
          description: "自动打包 组件化"
        };
        break;
      case "music":
        _shareData = {
          musicUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "音乐",
          description: "音乐分享",
          targetUrl: "http://music.taihe.com/song/565263868"
        };
        break;
      case "video":
        _shareData = {
          videoUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "视频",
          description: "测试 视频分享"
        };
        break;
    }
    _shareData["shareType"] = _type;
    let shareMedia = {
      platform: "", //QQ 、 QZONE
      shareData: _shareData
    };
    return Object.assign(shareMedia, _shareMedia);
  }
}
