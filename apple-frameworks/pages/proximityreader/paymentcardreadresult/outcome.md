> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/outcome](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/outcome)

# outcome

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The outcome of the transaction.

## Declaration

```swift
let outcome: PaymentCardReadResult.ReadOutcome
```

<a id="discussion"></a>

## Discussion

This field is meaningful only if you enable [includeErrorInReadResult](../paymentcardreader/options-swift.struct/includeerrorinreadresult.md) before you call [prepare(using:)](../paymentcardreader/prepare%28using_%29.md). If an error occurs while the [PaymentCardReaderSession](../paymentcardreadersession.md) is open and the framework can retrieve [paymentCardData](paymentcarddata.md), [PaymentCardReadResult](../paymentcardreadresult.md) includes both the [PaymentCardReadResult.ReadOutcome](readoutcome.md) and the other read data, otherwise the framework throws a [PaymentCardReaderSession.ReadError](../paymentcardreadersession/readerror.md).

## See Also

### Checking the read outcome

- [PaymentCardReadResult.ReadOutcome](readoutcome.md): Values that describe the outcome of a read request.
