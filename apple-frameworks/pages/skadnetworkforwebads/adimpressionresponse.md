> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/skadnetworkforwebads/adimpressionresponse](https://developer.apple.com/documentation/skadnetworkforwebads/adimpressionresponse)

# AdImpressionResponse

**Interface language:** Data

**Framework:** SKAdNetwork for Web Ads  
**Kind:** Object  
**Availability:** SKAdNetwork for Web Ads 1.0+

The response you provide that contains a signed payload for a clicked web ad.

## Declaration

```
object AdImpressionResponse
```

## Properties

- `ad_network_id` — `string` (required): The ad network ID.

  You receive an ad network ID when you register to use SKAdNetwork. For more information, see [Registering an ad network](../storekit/registering-an-ad-network.md).
- `itunes_item_id` — `integer` (required): The App Store app ID that the ad impression advertises. This is the same value the ad network provides in the attributable ad link. For more information, see [Creating an attributable ad link](creating-an-attributable-ad-link.md).
- `nonce` — `string` (required): This value needs to match the value of `source_nonce` in the [AdImpressionRequest](adimpressionrequest.md). The value needs to be in the `UUID` string format.

  Provide the dash-separated representation of the `source_nonce`.
- `signature` — `signature` (required): The cryptographic signature the ad network generates to sign the web ad. For more information, see [Generating a signature for attributable web ads](generating-a-signature-for-attributable-web-ads.md).
- `source_domain` — `string` (required): The effective top-level domain and one more preceding path component (eTLD+1) representation of the ad network serving the ad. This value needs to match the `source_domain` value you receive in the [AdImpressionRequest](adimpressionrequest.md).
- `source_identifier` — `integer` (required): A four-digit value you use to measure the aspects of an advertising effort or campaign.
- `timestamp` — `integer` (required): An integer that represents the UNIX time, in milliseconds, that you create this [AdImpressionResponse](adimpressionresponse.md).
- `version` — `string` (required): The SKAdNetwork version. Use version `"4.0"` or later. For version information, see [SKAdNetwork release notes](../storekit/skadnetwork-release-notes.md).

## Mentioned In

- [Creating an attributable ad link](creating-an-attributable-ad-link.md)
- [Generating a signature for attributable web ads](generating-a-signature-for-attributable-web-ads.md)

<a id="Discussion"></a>

## Discussion

This is a response that you provide to the [Get a Signed Web Ad Impression Payload](get-a-signed-skadnetwork-ad-payload-for-a-web-ad_.md) endpoint. When you create an [AdImpressionResponse](adimpressionresponse.md), use the dash-separated string representation of the UUID, which you decode from the `source_nonce` in the [AdImpressionRequest](adimpressionrequest.md) that you receive.

> **Important**

>  The `attributionSourceNonce` in a web ad link, the `source_nonce` in an [AdImpressionRequest](adimpressionrequest.md), and the `nonce` in this response all represent the same UUID, but the encoding varies.

## See Also

### Providing the web ad signature and response

- [Generating a signature for attributable web ads](generating-a-signature-for-attributable-web-ads.md): Initiate install-validation by providing the signed parameters for an attributable web ad.
- [signature](signature.md): The key-value pairs that ad networks use to cryptographically sign a web ad.
