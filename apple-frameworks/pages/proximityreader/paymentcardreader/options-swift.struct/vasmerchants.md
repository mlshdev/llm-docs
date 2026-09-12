> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/options-swift.struct/vasmerchants](https://developer.apple.com/documentation/proximityreader/paymentcardreader/options-swift.struct/vasmerchants)

# vasMerchants

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ (deprecated in 18.0) · iPadOS 15.4+ (deprecated in 18.0) · Mac Catalyst 17.0+ (deprecated in 18.0)

A global list of merchants to use when reading loyalty cards.

> Use VASRequest to specify VAS merchants

## Declaration

```swift
var vasMerchants: [VASRequest.Merchant]
```

<a id="discussion"></a>

## Discussion

When you try to read a loyalty card from your [PaymentCardReaderSession](../../paymentcardreadersession.md) object, specify a custom [VASRequest](../../vasrequest.md) object to override this list.
