> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreaderstore/fetchstoredpaymentcardreadresultcount()](https://developer.apple.com/documentation/proximityreader/paymentcardreaderstore/fetchstoredpaymentcardreadresultcount())

# fetchStoredPaymentCardReadResultCount()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Returns the number of reads the framework performed using a Store and Forward session.

## Declaration

```swift
func fetchStoredPaymentCardReadResultCount() async throws -> Int
```

<a id="discussion"></a>

## Discussion

> **Throws**

> This method throws a [PaymentCardReaderStore.StoreError](storeerror.md) if the count cannot be fetched.
