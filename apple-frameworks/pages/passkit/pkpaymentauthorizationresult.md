> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationresult](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationresult)

# PKPaymentAuthorizationResult (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that reports the status code and errors for a payment authorization request.

## Declaration

```swift
class PKPaymentAuthorizationResult
```

<a id="overview"></a>

## Overview

If the Apple Pay sheet contains errors, you provide a [PKPaymentAuthorizationStatus.failure](pkpaymentauthorizationstatus/failure.md) status to [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md), and include the errors in the errors array. If there are no errors, you provide a [PKPaymentAuthorizationStatus.success](pkpaymentauthorizationstatus/success.md) status and leave the error array empty.

The following code example shows a failure result with two errors in the postal code and street fields.

A result that reports two errors:

```swift
// Error in postal code field.
let shippingInvalidZip =
PKPaymentRequest.paymentShippingAddressInvalidError(withKey:CNPostalAddressPostalCodeKey,
                                                    localizedDescription: "Invalid ZIP code")
// Error in street address field.
let shippingInvalidStreet = PKPaymentRequest.paymentShippingAddressInvalidError(withKey:CNPostalAddressStreetKey,
                                                    localizedDescription: "Missing street name")
// Result with failure status and errors.
let result = PKPaymentAuthorizationResult(status: .failure, 
                                          errors: [shippingInvalidZip, shippingInvalidStreet])
```

## Topics

### Initializing a payment authorization result

- [init(status:errors:)](pkpaymentauthorizationresult/init%28status_errors_%29.md): Initializes the result with the status code and list of errors.

### Setting order details

- [orderDetails](pkpaymentauthorizationresult/orderdetails.md): Optional metadata with order details for the placed order.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.

### Setting payment authorization status and errors

- [errors](pkpaymentauthorizationresult/errors.md): List of errors in the Apple Pay sheet.
- [status](pkpaymentauthorizationresult/status.md): Payment authorization general status.
- [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

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

- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

# PKPaymentAuthorizationResult (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An object that reports the status code and errors for a payment authorization request.

## Declaration

```objectivec
@interface PKPaymentAuthorizationResult : NSObject
```

<a id="overview"></a>

## Overview

If the Apple Pay sheet contains errors, you provide a [PKPaymentAuthorizationStatusFailure](pkpaymentauthorizationstatus/failure.md) status to [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md), and include the errors in the errors array. If there are no errors, you provide a [PKPaymentAuthorizationStatusSuccess](pkpaymentauthorizationstatus/success.md) status and leave the error array empty.

The following code example shows a failure result with two errors in the postal code and street fields.

A result that reports two errors:

```swift
// Error in postal code field.
let shippingInvalidZip =
PKPaymentRequest.paymentShippingAddressInvalidError(withKey:CNPostalAddressPostalCodeKey,
                                                    localizedDescription: "Invalid ZIP code")
// Error in street address field.
let shippingInvalidStreet = PKPaymentRequest.paymentShippingAddressInvalidError(withKey:CNPostalAddressStreetKey,
                                                    localizedDescription: "Missing street name")
// Result with failure status and errors.
let result = PKPaymentAuthorizationResult(status: .failure, 
                                          errors: [shippingInvalidZip, shippingInvalidStreet])
```

## Topics

### Initializing a payment authorization result

- [initWithStatus:errors:](pkpaymentauthorizationresult/init%28status_errors_%29.md): Initializes the result with the status code and list of errors.

### Setting order details

- [orderDetails](pkpaymentauthorizationresult/orderdetails.md): Optional metadata with order details for the placed order.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.

### Setting payment authorization status and errors

- [errors](pkpaymentauthorizationresult/errors.md): List of errors in the Apple Pay sheet.
- [status](pkpaymentauthorizationresult/status.md): Payment authorization general status.
- [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment sheet interactions and authorization

- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.
