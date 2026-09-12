> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:eventhandler:)-2zgwn](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:eventhandler:)-2zgwn)

# readPaymentCard(\_:eventHandler:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ (deprecated in 16.0) · iPadOS 15.4+ (deprecated in 16.0) · Mac Catalyst 17.0+ (deprecated in 17.0)

Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.

> Use PaymentCardReader events instead of eventHandler

## Declaration

```swift
func readPaymentCard(_ request: PaymentCardTransactionRequest, eventHandler: ((PaymentCardReaderSession.Event) -> Void)? = nil) async throws -> PaymentCardReadResult
```

## Parameters

- `request`: The transaction object you provide with the payment amount and currency details.

<a id="return-value"></a>

## Return Value

A [PaymentCardReadResult](../paymentcardreadresult.md) if the read operation was successful.

<a id="discussion"></a>

## Discussion

Call this method as the first step in a financial transaction involving Tap to Pay with iPhone. This method displays a system-provided sheet with instructions on what the person needs to do. This UI remains onscreen until the system reads the person’s card, you cancel the operation, or an error occurs. After the read operation concludes successfully, deliver the returned card information to your payment service provider.

> **Throws**

> This method throws a [PaymentCardReaderSession.ReadError](readerror.md) if a person dismisses the sheet or the sheet fails to appear.

## See Also

### Deprecated

- [readPaymentCard(\_:eventHandler:)](readpaymentcard%28__eventhandler_%29-20e1w.md): Deprecated. Presents a sheet to verify a contactless payment card, and returns the card data.
- [readPaymentCard(\_:vasRequest:stopOnVASResult:eventHandler:)](readpaymentcard%28__vasrequest_stoponvasresult_eventhandler_%29.md): Deprecated. Presents a sheet to read both contactless payments and loyalty cards for a purchase or refund, and returns the relevant card data.
- [readVAS(\_:eventHandler:)](readvas%28__eventhandler_%29.md): Deprecated. Presents a sheet to read a loyalty card for Value Added Services (VAS), and returns the loyalty card data.
- [id](id.md): Deprecated. A unique identifier for this object.
- [PaymentCardReaderSession.Event](event.md): Deprecated. Optional events you can observe during the card-reading process.
