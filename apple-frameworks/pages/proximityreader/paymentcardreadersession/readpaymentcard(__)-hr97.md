> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:)-hr97](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/readpaymentcard(_:)-hr97)

# readPaymentCard(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

Presents a sheet to verify a contactless payment card, and returns the card data.

## Declaration

```swift
func readPaymentCard(_ request: PaymentCardVerificationRequest) async throws -> PaymentCardReadResult
```

## Parameters

- `request`: The object that contains the reason for the verification request. For example, you might verify the card supports a specific currency.

<a id="return-value"></a>

## Return Value

A [PaymentCardReadResult](../paymentcardreadresult.md) if the read operation was successful.

<a id="discussion"></a>

## Discussion

Call this method when you want to verify someone’s card with your payment provider. When you call this method, the system displays UI with instructions on what the person needs to do. This UI remains onscreen until the system reads the person’s card, you cancel the operation, or an error occurs.

> **Throws**

> This method throws a [PaymentCardReaderSession.ReadError](readerror.md) if a person dismisses the sheet or the sheet fails to appear.

## See Also

### Reading a payment card

- [readPaymentCard(\_:)](readpaymentcard%28__%29-8jol5.md): Presents a sheet to read a contactless payment card for a purchase or a refund, and returns the encrypted card data.
