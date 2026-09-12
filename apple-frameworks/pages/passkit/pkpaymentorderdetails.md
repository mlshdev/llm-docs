> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentorderdetails](https://developer.apple.com/documentation/passkit/pkpaymentorderdetails)

# PKPaymentOrderDetails (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Optional metadata with payment order details for the placed order.

## Declaration

```swift
class PKPaymentOrderDetails
```

<a id="overview"></a>

## Overview

The device only retreives metadata if the status is `PKPaymentAuthorizationStatusSuccess`.

## Topics

### Creating payment order details

- [init(orderTypeIdentifier:orderIdentifier:webServiceURL:authenticationToken:)](pkpaymentorderdetails/init%28ordertypeidentifier_orderidentifier_webserviceurl_authenticationtoken_%29.md): Initializes a payment order details object with the identifier, web service URL, and authentication token you provide.

### Identifying and authenticating the order

- [authenticationToken](pkpaymentorderdetails/authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](pkpaymentorderdetails/orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](pkpaymentorderdetails/ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](pkpaymentorderdetails/webserviceurl.md): The URL for your web service.

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
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

# PKPaymentOrderDetails (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Optional metadata with payment order details for the placed order.

## Declaration

```objectivec
@interface PKPaymentOrderDetails : NSObject
```

<a id="overview"></a>

## Overview

The device only retreives metadata if the status is `PKPaymentAuthorizationStatusSuccess`.

## Topics

### Creating payment order details

- [initWithOrderTypeIdentifier:orderIdentifier:webServiceURL:authenticationToken:](pkpaymentorderdetails/init%28ordertypeidentifier_orderidentifier_webserviceurl_authenticationtoken_%29.md): Initializes a payment order details object with the identifier, web service URL, and authentication token you provide.

### Identifying and authenticating the order

- [authenticationToken](pkpaymentorderdetails/authenticationtoken.md): The authentification token supplied to your web service.
- [orderIdentifier](pkpaymentorderdetails/orderidentifier.md): A unique order identifier scoped to your order type identifier.
- [orderTypeIdentifier](pkpaymentorderdetails/ordertypeidentifier.md): An identifier for the order type associated with the order.
- [webServiceURL](pkpaymentorderdetails/webserviceurl.md): The URL for your web service.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment sheet interactions and authorization

- [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md): An object that reports the status code and errors for a payment authorization request.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.
