> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttoken/paymentdata](https://developer.apple.com/documentation/passkit/pkpaymenttoken/paymentdata)

# paymentData (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The payment data as a UTF-8 encoded serialization of a JSON dictionary.

## Declaration

```swift
var paymentData: Data { get }
```

<a id="Discussion"></a>

## Discussion

Send this data to your e-commerce back-end system, where it can be decrypted and submitted to your payment processor.

For the format of the payment data, see [Payment Token Format Reference](https://developer.apple.com/library/archive/documentation/PassKit/Reference/PaymentTokenJSON/PaymentTokenJSON.html#//apple_ref/doc/uid/TP40014929).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Working with payment tokens

- [paymentMethod](paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](transactionidentifier.md): A unique identifier for this payment.

# paymentData (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

The payment data as a UTF-8 encoded serialization of a JSON dictionary.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * paymentData;
```

<a id="Discussion"></a>

## Discussion

Send this data to your e-commerce back-end system, where it can be decrypted and submitted to your payment processor.

For the format of the payment data, see [Payment Token Format Reference](https://developer.apple.com/library/archive/documentation/PassKit/Reference/PaymentTokenJSON/PaymentTokenJSON.html#//apple_ref/doc/uid/TP40014929).

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Working with payment tokens

- [paymentMethod](paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](transactionidentifier.md): A unique identifier for this payment.
