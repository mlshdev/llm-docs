> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpayment](https://developer.apple.com/documentation/passkit/pkpayment)

# PKPayment (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

## Declaration

```swift
class PKPayment
```

## Topics

### Working with the payment token

- [token](pkpayment/token.md): The encrypted payment information.
- [PKPaymentToken](pkpaymenttoken.md): Contains the user’s payment credentials.

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.

### Deprecated

- [billingAddress](pkpayment/billingaddress.md): Deprecated. The user-selected billing address for this transaction.
- [shippingAddress](pkpayment/shippingaddress.md): Deprecated. The user-selected shipping address for this transaction.

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

### Payment sheet interactions and authorization

- [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md): An object that reports the status code and errors for a payment authorization request.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.

# PKPayment (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

## Declaration

```objectivec
@interface PKPayment : NSObject
```

## Topics

### Working with the payment token

- [token](pkpayment/token.md): The encrypted payment information.
- [PKPaymentToken](pkpaymenttoken.md): Contains the user’s payment credentials.

### Working with billing and shipping information

- [billingContact](pkpayment/billingcontact.md): The user-selected billing address for this transaction.
- [shippingContact](pkpayment/shippingcontact.md): The user-selected shipping address for this transaction.
- [shippingMethod](pkpayment/shippingmethod.md): The user-selected shipping method for this transaction.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.

### Deprecated

- [billingAddress](pkpayment/billingaddress.md): Deprecated. The user-selected billing address for this transaction.
- [shippingAddress](pkpayment/shippingaddress.md): Deprecated. The user-selected shipping address for this transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment sheet interactions and authorization

- [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md): An object that reports the status code and errors for a payment authorization request.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
