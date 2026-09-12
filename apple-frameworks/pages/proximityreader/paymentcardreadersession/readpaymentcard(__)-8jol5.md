> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:)-8jol5](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:)-8jol5)

# readPaymentCard(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.

## Declaration

```swift
func readPaymentCard(_ request: PaymentCardTransactionRequest) async throws -> PaymentCardReadResult
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

### Reading a payment card

- [readPaymentCard(\_:)](readpaymentcard%28__%29-hr97.md): Presents a sheet to verify a contactless payment card, and returns the card data.
