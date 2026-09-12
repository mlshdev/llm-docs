> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontroller](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontroller)

# PKPaymentAuthorizationViewController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

An object that presents a sheet that prompts the user to authorize a payment request.

## Declaration

```swift
class PKPaymentAuthorizationViewController
```

<a id="overview"></a>

## Overview

After the user authorizes the payment request for a transaction, the delegate is called with a payment token used to authorize the transaction’s payment.

## Topics

### Determining whether the user can make payments

- [canMakePayments()](pkpaymentauthorizationviewcontroller/canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePayments(usingNetworks:)](pkpaymentauthorizationviewcontroller/canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePayments(usingNetworks:capabilities:)](pkpaymentauthorizationviewcontroller/canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements()](pkpaymentauthorizationviewcontroller/supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursements(using:)](pkpaymentauthorizationviewcontroller/supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks.
- [supportsDisbursements(using:capabilities:)](pkpaymentauthorizationviewcontroller/supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks and merchant capabilities.

### Handling user interactions

- [delegate](pkpaymentauthorizationviewcontroller/delegate.md): The view controller’s delegate.
- [PKPaymentAuthorizationViewControllerDelegate](pkpaymentauthorizationviewcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization view controller.

### Creating a payment authorization view controller

- [init(paymentRequest:)](pkpaymentauthorizationviewcontroller/init%28paymentrequest_%29.md): Initializes and returns a payment authorization view controller.
- [init(disbursementRequest:)](pkpaymentauthorizationviewcontroller/init%28disbursementrequest_%29.md): Initializes and returns a new payment authorization view controller with the provided disbursement request.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Apple Pay availability

- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.

# PKPaymentAuthorizationViewController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

An object that presents a sheet that prompts the user to authorize a payment request.

## Declaration

```objectivec
@interface PKPaymentAuthorizationViewController : UIViewController
```

```objectivec
@interface PKPaymentAuthorizationViewController : NSViewController
```

<a id="overview"></a>

## Overview

After the user authorizes the payment request for a transaction, the delegate is called with a payment token used to authorize the transaction’s payment.

## Topics

### Determining whether the user can make payments

- [canMakePayments](pkpaymentauthorizationviewcontroller/canmakepayments%28%29.md): Returns whether the user can make payments.
- [canMakePaymentsUsingNetworks:](pkpaymentauthorizationviewcontroller/canmakepayments%28usingnetworks_%29.md): Returns whether the user can make payments through the specified network.
- [canMakePaymentsUsingNetworks:capabilities:](pkpaymentauthorizationviewcontroller/canmakepayments%28usingnetworks_capabilities_%29.md): Returns whether the user can make payments using a card from the specified network with the specified capabilities.
- [supportsDisbursements](pkpaymentauthorizationviewcontroller/supportsdisbursements%28%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests.
- [supportsDisbursementsUsingNetworks:](pkpaymentauthorizationviewcontroller/supportsdisbursements%28using_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks.
- [supportsDisbursementsUsingNetworks:capabilities:](pkpaymentauthorizationviewcontroller/supportsdisbursements%28using_capabilities_%29.md): Returns a Boolean value that indicates whether this device can process disbursement requests using the specified payment networks and merchant capabilities.

### Handling user interactions

- [delegate](pkpaymentauthorizationviewcontroller/delegate.md): The view controller’s delegate.
- [PKPaymentAuthorizationViewControllerDelegate](pkpaymentauthorizationviewcontrollerdelegate.md): Methods that let you respond to user interactions with your payment authorization view controller.

### Creating a payment authorization view controller

- [initWithPaymentRequest:](pkpaymentauthorizationviewcontroller/init%28paymentrequest_%29.md): Initializes and returns a payment authorization view controller.
- [initWithDisbursementRequest:](pkpaymentauthorizationviewcontroller/init%28disbursementrequest_%29.md): Initializes and returns a new payment authorization view controller with the provided disbursement request.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Apple Pay availability

- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
