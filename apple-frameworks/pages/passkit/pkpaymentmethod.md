> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod](https://developer.apple.com/documentation/passkit/pkpaymentmethod)

# PKPaymentMethod (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains information about payment methods.

## Declaration

```swift
class PKPaymentMethod
```

## Topics

### Getting the pass

- [secureElementPass](pkpaymentmethod/secureelementpass.md): The accompanying Secure Element pass.
- [paymentPass](pkpaymentmethod/paymentpass.md): Deprecated. The accompanying payment pass.

### Getting the payment method’s attributes

- [type](pkpaymentmethod/type.md): A value that represents the card’s type.
- [PKPaymentMethodType](pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](pkpaymentmethod/displayname.md): A string, suitable for display, that describes the card.
- [network](pkpaymentmethod/network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](pkpaymentmethod/billingaddress.md): The user’s billing address.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with payment tokens

- [paymentData](pkpaymenttoken/paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](pkpaymenttoken/paymentmethod.md): Information about the card used in the transaction.
- [transactionIdentifier](pkpaymenttoken/transactionidentifier.md): A unique identifier for this payment.

# PKPaymentMethod (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that contains information about payment methods.

## Declaration

```objectivec
@interface PKPaymentMethod : NSObject
```

## Topics

### Getting the pass

- [secureElementPass](pkpaymentmethod/secureelementpass.md): The accompanying Secure Element pass.
- [paymentPass](pkpaymentmethod/paymentpass.md): Deprecated. The accompanying payment pass.

### Getting the payment method’s attributes

- [type](pkpaymentmethod/type.md): A value that represents the card’s type.
- [PKPaymentMethodType](pkpaymentmethodtype.md): The type of cards available in Apple Pay.
- [displayName](pkpaymentmethod/displayname.md): A string, suitable for display, that describes the card.
- [network](pkpaymentmethod/network.md): A string, suitable for display, that describes the payment network for the card.
- [billingAddress](pkpaymentmethod/billingaddress.md): The user’s billing address.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Working with payment tokens

- [paymentData](pkpaymenttoken/paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](pkpaymenttoken/paymentmethod.md): Information about the card used in the transaction.
- [transactionIdentifier](pkpaymenttoken/transactionidentifier.md): A unique identifier for this payment.
