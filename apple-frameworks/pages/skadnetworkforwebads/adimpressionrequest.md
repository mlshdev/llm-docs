> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/skadnetworkforwebads/adimpressionrequest](https://developer.apple.com/documentation/skadnetworkforwebads/adimpressionrequest)

# AdImpressionRequest

**Interface language:** Data

**Framework:** SKAdNetwork for Web Ads  
**Kind:** Object  
**Availability:** SKAdNetwork for Web Ads 1.0+

The request body that devices send to fetch the web ad impression from the ad network’s server.

## Declaration

```
object AdImpressionRequest
```

## Properties

- `source_domain` — `string` (required): The effective top-level domain and one more preceding path component (eTLD+1) representation of the ad network that seeks ad attribution.
- `source_engagement_type` — `string` (required): A key that describes the type of user action that leads to the ad impression. The value is `"click_to_App_Store"`.
- `source_nonce` — `string` (required): A Base64URL-encoded string representation of a UUID. This value is the same value the ad network provides as the `attributionSourceNonce` in the attributable ad link.
- `version` — `string` (required): The SKAdNetwork version of `"4.0"` or later. See [SKAdNetwork release notes](../storekit/skadnetwork-release-notes.md) for version information.

## Mentioned In

- [Creating an attributable ad link](creating-an-attributable-ad-link.md)

<a id="Discussion"></a>

## Discussion

The device generates the [AdImpressionRequest](adimpressionrequest.md) and sends it in the body of a [Get a Signed Web Ad Impression Payload](get-a-signed-skadnetwork-ad-payload-for-a-web-ad_.md) request. The device uses the value from the `attributionSourceNonce` in a web ad link for the `source_nonce` value in this request. The ad network looks up the fully signed web ad impression using the `source_nonce` value, which it creates when it serves the attributable ad link.

> **Important**

>  The `attributionSourceNonce` in a web ad, the `source_nonce` in this request, and the `nonce` in a corresponding [AdImpressionResponse](adimpressionresponse.md) all represent the same UUID, but the encoding varies.

## See Also

### Receiving a request for a web ad  payload

- [Get a Signed Web Ad Impression Payload](get-a-signed-skadnetwork-ad-payload-for-a-web-ad_.md): An endpoint you provide to receive requests from devices to serve signed ad interactions.
