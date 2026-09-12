> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/fetchpaymentcardreaderstore()](https://developer.apple.com/documentation/proximityreader/paymentcardreader/fetchpaymentcardreaderstore())

# fetchPaymentCardReaderStore()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Returns a store containing the read results the framework obtained using a Store and Forward session.

## Declaration

```swift
func fetchPaymentCardReaderStore() throws -> PaymentCardReaderStore
```

<a id="return-value"></a>

## Return Value

[PaymentCardReaderStore](../paymentcardreaderstore.md) when successful.

<a id="discussion"></a>

## Discussion

> **Throws**

> [PaymentCardReaderError](../paymentcardreadererror.md) if the method fails to retrieve the store.
