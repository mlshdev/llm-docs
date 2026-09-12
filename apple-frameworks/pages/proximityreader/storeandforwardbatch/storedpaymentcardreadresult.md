> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult](https://developer.apple.com/documentation/proximityreader/storeandforwardbatch/storedpaymentcardreadresult)

# StoreAndForwardBatch.StoredPaymentCardReadResult

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

A result structure that represents each payment the framework read using a Store and Forward session.

## Declaration

```swift
struct StoredPaymentCardReadResult
```

## Topics

### Instance Properties

- [generalCardData](storedpaymentcardreadresult/generalcarddata.md): A Base64-encoded string that contains general cardholder and terminal data in tag-length-value (TLV) format.
- [id](storedpaymentcardreadresult/id.md): The unique identifier for the payment.
- [paymentCardData](storedpaymentcardreadresult/paymentcarddata.md): A Base64-encoded string that contains the encrypted payment information to send to your payment provider.
- [signature](storedpaymentcardreadresult/signature.md): The signature, as a Base64-encoded string, that guarantees the integrity of the payment

## Relationships

### Conforms To

- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
