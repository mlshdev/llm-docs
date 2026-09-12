> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/skadnetworkforwebads](https://developer.apple.com/documentation/skadnetworkforwebads)

# SKAdNetwork for Web Ads

**Interface language:** Data

**Framework:** SKAdNetwork for Web Ads  
**Kind:** Web Service  
**Availability:** SKAdNetwork for Web Ads 1.0+

Attribute app-install campaigns that originate on the web.

## Mentioned In

- [Creating an attributable ad link](skadnetworkforwebads/creating-an-attributable-ad-link.md)

<a id="overview"></a>

## Overview

The [SKAdNetwork for Web Ads](skadnetworkforwebads.md) API enables advertisers to measure the success of ad campaigns that initiate on the web, while maintaining user privacy. In iOS 16.1 and later, ad networks can use this API to get [SKAdNetwork](storekit/skadnetwork.md) attributions for web ad clicks in Safari that lead to app installations from the App Store.

To use the API, follow these steps:

1. Register your ad network; see [Registering an ad network](storekit/registering-an-ad-network.md).
2. Configure and display your web ad link; see [Creating an attributable ad link](skadnetworkforwebads/creating-an-attributable-ad-link.md).
3. Implement an endpoint to provide a signed web ad payload that the advertised app uses to attribute app installations to your ad campaign; see [Generating a signature for attributable web ads](skadnetworkforwebads/generating-a-signature-for-attributable-web-ads.md).
4. Validate any attributions you receive; see [Verifying an install-validation postback](storekit/verifying-an-install-validation-postback.md).

For more information about the ad network API, see [SKAdNetwork](storekit/skadnetwork.md).

> **Note**

>  Ad networks can only use this API to get attributions for web ad clicks in Safari; the API doesn’t get attributions for web ad clicks in [SFSafariViewController](safariservices/sfsafariviewcontroller.md) or [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview).

## Topics

### Essentials

- [Creating an attributable ad link](skadnetworkforwebads/creating-an-attributable-ad-link.md): Create click-through web ads that attribute App Store app installations to your ad network.

### Receiving a request for a web ad  payload

- [Get a Signed Web Ad Impression Payload](skadnetworkforwebads/get-a-signed-skadnetwork-ad-payload-for-a-web-ad_.md): An endpoint you provide to receive requests from devices to serve signed ad interactions.
- [AdImpressionRequest](skadnetworkforwebads/adimpressionrequest.md): The request body that devices send to fetch the web ad impression from the ad network’s server.

### Providing the web ad signature and response

- [Generating a signature for attributable web ads](skadnetworkforwebads/generating-a-signature-for-attributable-web-ads.md): Initiate install-validation by providing the signed parameters for an attributable web ad.
- [AdImpressionResponse](skadnetworkforwebads/adimpressionresponse.md): The response you provide that contains a signed payload for a clicked web ad.
- [signature](skadnetworkforwebads/signature.md): The key-value pairs that ad networks use to cryptographically sign a web ad.
