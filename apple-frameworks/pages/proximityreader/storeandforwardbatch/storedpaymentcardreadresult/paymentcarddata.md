> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult/paymentcarddata](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult/paymentcarddata)

# paymentCardData

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A Base64-encoded string that contains the encrypted payment information to send to your payment provider.

## Declaration

```swift
let paymentCardData: String
```

<a id="discussion"></a>

## Discussion

This information is present any time the system reads a card, including for purchases, refunds, and card verification.
