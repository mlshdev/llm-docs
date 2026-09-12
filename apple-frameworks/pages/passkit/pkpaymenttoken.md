> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttoken](https://developer.apple.com/documentation/passkit/pkpaymenttoken)

# PKPaymentToken (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Contains the user’s payment credentials.

## Declaration

```swift
class PKPaymentToken
```

<a id="overview"></a>

## Overview

You access the payment token for an authorized payment request using the [token](pkpayment/token.md) property of [PKPayment](pkpayment.md).

## Topics

### Working with payment tokens

- [paymentData](pkpaymenttoken/paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](pkpaymenttoken/paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](pkpaymenttoken/transactionidentifier.md): A unique identifier for this payment.

### Deprecated

- [paymentNetwork](pkpaymenttoken/paymentnetwork.md): Deprecated. The payment network for the card that funds this transaction.
- [paymentInstrumentName](pkpaymenttoken/paymentinstrumentname.md): Deprecated. A description of the payment card that the user selected to fund the transaction.

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

### Working with the payment token

- [token](pkpayment/token.md): The encrypted payment information.

# PKPaymentToken (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Contains the user’s payment credentials.

## Declaration

```objectivec
@interface PKPaymentToken : NSObject
```

<a id="overview"></a>

## Overview

You access the payment token for an authorized payment request using the [token](pkpayment/token.md) property of [PKPayment](pkpayment.md).

## Topics

### Working with payment tokens

- [paymentData](pkpaymenttoken/paymentdata.md): The payment data as a UTF-8 encoded serialization of a JSON dictionary.
- [paymentMethod](pkpaymenttoken/paymentmethod.md): Information about the card used in the transaction.
- [PKPaymentMethod](pkpaymentmethod.md): An object that contains information about payment methods.
- [transactionIdentifier](pkpaymenttoken/transactionidentifier.md): A unique identifier for this payment.

### Deprecated

- [paymentNetwork](pkpaymenttoken/paymentnetwork.md): Deprecated. The payment network for the card that funds this transaction.
- [paymentInstrumentName](pkpaymenttoken/paymentinstrumentname.md): Deprecated. A description of the payment card that the user selected to fund the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Working with the payment token

- [token](pkpayment/token.md): The encrypted payment information.
