> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/paymentcarddata](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/paymentcarddata)

# paymentCardData

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A Base64-encoded string that contains the encrypted payment information to send to your payment provider.

## Declaration

```swift
let paymentCardData: String?
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](../adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="discussion"></a>

## Discussion

This information is present any time the system reads a card, including for purchases, refunds, and card verification.

## See Also

### Getting the result data

- [generalCardData](generalcarddata.md): A Base64-encoded string that contains general cardholder and terminal data in tag-length-value (TLV) format.
