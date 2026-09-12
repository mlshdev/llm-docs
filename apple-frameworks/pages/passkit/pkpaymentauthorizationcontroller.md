> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller)

# PKPaymentAuthorizationController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that presents a sheet that prompts the user to authorize a payment request.

## Declaration

```swift
class PKPaymentAuthorizationController
```

<a id="overview"></a>

## Overview

After the user authorizes the payment request for a transaction, the delegate is called with a payment token used to authorize the transaction’s payment.

> **Important**

>  The [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md) class performs the same role as the [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md) class, but it does not depend on the UIKit framework. This means that the authorization controller can be used in places where a view controller cannot (for example, in watchOS apps or in SiriKit extensions).

## Topics

### Creating a payment authorization controller

- [init(paymentRequest:)](pkpaymentauthorizationcontroller/init%28paymentrequest_%29.md): Initializes and returns a payment authorization controller.
- [init(disbursementRequest:)](pkpaymentauthorizationcontroller/init%28disbursementrequest_%29.md): Creates a new payment authorization controller with the disbursement request you provide.

### Determining whether the user can make payments or disbursements

- [canMakePayments()](pkpaymentauthorizationcontroller/canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePayments(usingNetworks:)](pkpaymentauthorizationcontroller/canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePayments(usingNetworks:capabilities:)](pkpaymentauthorizationcontroller/canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements()](pkpaymentauthorizationcontroller/supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursements(using:)](pkpaymentauthorizationcontroller/supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.
- [supportsDisbursements(using:capabilities:)](pkpaymentauthorizationcontroller/supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.

### Handling user interactions

- [delegate](pkpaymentauthorizationcontroller/delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [present(completion:)](pkpaymentauthorizationcontroller/present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismiss(completion:)](pkpaymentauthorizationcontroller/dismiss%28completion_%29.md): Dismisses the payment sheet.

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

### Apple Pay availability

- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.

# PKPaymentAuthorizationController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that presents a sheet that prompts the user to authorize a payment request.

## Declaration

```objectivec
@interface PKPaymentAuthorizationController : NSObject
```

<a id="overview"></a>

## Overview

After the user authorizes the payment request for a transaction, the delegate is called with a payment token used to authorize the transaction’s payment.

> **Important**

>  The [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md) class performs the same role as the [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md) class, but it does not depend on the UIKit framework. This means that the authorization controller can be used in places where a view controller cannot (for example, in watchOS apps or in SiriKit extensions).

## Topics

### Creating a payment authorization controller

- [initWithPaymentRequest:](pkpaymentauthorizationcontroller/init%28paymentrequest_%29.md): Initializes and returns a payment authorization controller.
- [initWithDisbursementRequest:](pkpaymentauthorizationcontroller/init%28disbursementrequest_%29.md): Creates a new payment authorization controller with the disbursement request you provide.

### Determining whether the user can make payments or disbursements

- [canMakePayments](pkpaymentauthorizationcontroller/canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePaymentsUsingNetworks:](pkpaymentauthorizationcontroller/canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePaymentsUsingNetworks:capabilities:](pkpaymentauthorizationcontroller/canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements](pkpaymentauthorizationcontroller/supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursementsUsingNetworks:](pkpaymentauthorizationcontroller/supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment network brands.
- [supportsDisbursementsUsingNetworks:capabilities:](pkpaymentauthorizationcontroller/supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value indicating whether this device can process disbursement requests using the specified payment network brands and capabilities.

### Handling user interactions

- [delegate](pkpaymentauthorizationcontroller/delegate.md): The controller’s delegate.
- [PKPaymentAuthorizationControllerDelegate](pkpaymentauthorizationcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization controller.
- [presentWithCompletion:](pkpaymentauthorizationcontroller/present%28completion_%29.md): Presents the payment sheet modally over your app.
- [dismissWithCompletion:](pkpaymentauthorizationcontroller/dismiss%28completion_%29.md): Dismisses the payment sheet.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Apple Pay availability

- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
