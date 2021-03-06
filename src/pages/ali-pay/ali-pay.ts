import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { XviewSdk } from "@xiaheng/xviewsdk";

/**
 * Generated class for the AliPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ali-pay",
  templateUrl: "ali-pay.html"
})

/**
 * sdk 地址：https://docs.open.alipay.com/54/104509/
 */
export class AliPayPage {
  xviewResult = {
    code: 2,
    message: "回调错误信息"
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AliPayPage");
  }

  login() {
    let aliLogin = {
      aliLogin:
        "apiname=com.alipay.account.auth&app_id=2019010962863907&app_name=zd&auth_type=AUTHACCOUNT&biz_type=openservice&method=alipay.open.auth.sdk.code.get&pid=2088131949238581&product_id=APP_FAST_LOGIN&scope=kuaijie&sign_type=RSA2&target_id=201902271527&sign=U6hrWeSkVIFdb3bOfzy4mQNvohvehS89HL3RxThMohciHd%2bvGHa0hrGqJmeKtaS%2fGstPQu9qxchPu50JeYAs%2fhdn%2bXKnyj%2bVajsnuKmQUmUD%2buUVOIHSkekPycyzFCnEuFzM55kzJbQ5lk3333KwM2lX2bAsn9bgrCcfrkR%2bbg4%3d"
    };

    XviewSdk.getInstance()
      .ComponentAliPay.Login(aliLogin)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        }
      );
  }

  pay() {
    let payData = {
      aliPay:
        'partner="2088131569212930"&seller_id="3208624566@qq.com"&out_trade_no="DRE4220445262809088"&subject="DRE4220445262809088"&body="DRE4220445262809088"&total_fee="0.05"&notify_url="http://api.jl-upay.com:80/api/notify/alipay"&service="mobile.securitypay.pay"&payment_type="1"&_input_charset="utf-8"&it_b_pay="30m"&sign="cVa1voDqPQxbPSxRwcHtLaKu8%2FISqBqSpUksXb7C0qAtbyUNLwiBqnQH%2FsjBES%2FphS3Muxz62RMh%2BDP2oCkNUW%2FEdViYDWtZnycYYJT234lAwOEr2nJfGX9sFqfvOM0Fx5vxHfDkjQPVDkaXSBZqQVaJfKLP736%2FICFJmr2KtO4%3D"&sign_type="RSA"'
    };

    XviewSdk.getInstance()
      .ComponentAliPay.Pay(payData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        }
      );

  }
}
