> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttoken/transactionidentifier](https://developer.apple.com/documentation/passkit/pkpaymenttoken/transactionidentifier)

# transactionIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for this payment.

## Declaration

```swift
var transactionIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

This identifier is suitable for use in a receipt.

## See Also

### Working with payment tokens

- [paymentData](paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.

# transactionIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

A unique identifier for this payment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * transactionIdentifier;
```

<a id="Discussion"></a>

## Discussion

This identifier is suitable for use in a receipt.

## See Also

### Working with payment tokens

- [paymentData](paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](../pkpaymentmethod.md): An object that contains information about payment methods.
