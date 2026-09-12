> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttoken/paymentmethod](https://developer.apple.com/documentation/passkit/pkpaymenttoken/paymentmethod)

# paymentMethod (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Information about the card used in the transaction.

## Declaration

```swift
var paymentMethod: PKPaymentMethod { get }
```

## See Also

### Working with payment tokens

- [paymentData](paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](transactionidentifier.md): A unique identifier for this payment.

# paymentMethod (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Information about the card used in the transaction.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) PKPaymentMethod * paymentMethod;
```

## See Also

### Working with payment tokens

- [paymentData](paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](transactionidentifier.md): A unique identifier for this payment.
