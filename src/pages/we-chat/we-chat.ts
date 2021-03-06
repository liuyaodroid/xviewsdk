import { Component } from "@angular/core";
import { XviewSdk } from "@xiaheng/xviewsdk";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the WeChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-we-chat",
  templateUrl: "we-chat.html"
})
export class WeChatPage {
  xviewResult = {
    code: 2,
    message: "回调数据"
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WeChatPage");
  }

  login() {
    let wechatData = {
      appId: "wx6a0405651932e971",
      appKey: "60985508718ec3209a612b01fe2eff04"
    };

    XviewSdk.getInstance()
      .ComponentWeChat.Login(wechatData)
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result.data));
        },
        _error => {
          this.xviewResult = _error;
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }

  pay() {
    let wechatData = {
      appId: "wxf873788d8c78a9de",
      appKey: "c9c112191cb89e6d32b3bba3cc62f35d",
      packageValue: "Sign=WXPay",
      sign: "A759DFE0ACBD1758859A737AA15A6ED3",
      partnerId: "1507897421",
      prepayId: "wx0215284981125597dd2bf24d3459405671",
      nonceStr: "cF9FvPE0whvujcs5FGU5gFGooJ3SKdLQ",
      timeStamp: "1546414129"
    };
    XviewSdk.getInstance()
      .ComponentWeChat.Pay(wechatData)
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result));
        },
        _error => {
          this.xviewResult = _error;
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }

  goToMiniApp() {
    let miniData = {
      appId: "wx2fc7d53acbb98919",
      userName: "gh_f5981082ca4c",
      path: " ",
      miniType: "0" //0 正式 ， 1 测试 2 预览版
    };

    XviewSdk.getInstance()
      .ComponentWeChat.Program(miniData)
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

  /**
   *
   * @param platform
   * WEIXIN_CIRCLE
   * WEIXIN
   * @param _type
   */
  shareType(_type: any) {
    let config = {
      appId: "wx6a0405651932e971",
      appKey: "60985508718ec3209a612b01fe2eff04",
      platform: "WEIXIN"
    };

    let shareData = this.createShareMedia(_type, config);

    XviewSdk.getInstance()
      .ComponentWeChat.Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
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
          description: "测试 视频分享 "
        };
        break;
      case "minApp":
        _shareData = {
            minAppUrl : "123",
            thumb : "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
            title : "123",
            description:"123123",
            path:"",
            userName:"123",
            miniType:"0" //0 正式 ， 1 测试 2 预览版
        }
        break;
    }
    _shareData["shareType"] = _type;
    let shareMedia = {
      shareData: _shareData
    };
    return Object.assign(shareMedia, _shareMedia);
  }
}
