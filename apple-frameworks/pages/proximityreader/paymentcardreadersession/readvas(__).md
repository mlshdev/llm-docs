> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/readvas(_:)](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/readvas(_:))

# readVAS(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

Presents a sheet to read a loyalty card for Value Added Services (VAS), and returns the loyalty card data.

## Declaration

```swift
func readVAS(_ request: VASRequest) async throws -> VASReadResult
```

## Parameters

- `request`: The object that you use to specify the request details, such as the list of supported merchants.

<a id="return-value"></a>

## Return Value

A [VASReadResult](../vasreadresult.md) if the read operation was successful.

## Mentioned In

- [Accepting loyalty passes from Wallet](../accepting-loyalty-passes-from-wallet.md)

<a id="discussion"></a>

## Discussion

Call this method to read the data from a loyalty card. When you call this method, the system displays UI with instructions on what the person needs to do. This UI remains onscreen until the system reads the person’s card, you cancel the operation, or an error occurs.

> **Throws**

> This method throws a [PaymentCardReaderSession.ReadError](readerror.md) if a person dismisses the sheet or the sheet fails to appear.

## See Also

### Reading a loyalty card

- [readPaymentCard(\_:vasRequest:stopOnVASResult:)](readpaymentcard%28__vasrequest_stoponvasresult_%29.md): Presents a sheet to read both contactless payments and loyalty cards for a purchase or refund, and returns the relevant card data.
