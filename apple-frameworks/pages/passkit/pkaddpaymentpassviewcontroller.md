> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassviewcontroller](https://developer.apple.com/documentation/passkit/pkaddpaymentpassviewcontroller)

# PKAddPaymentPassViewController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays an interface that lets users add cards to Apple Pay from within your app.

## Declaration

```swift
class PKAddPaymentPassViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before this class can be instantiated. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Determining if payment passes can be added

- [canAddPaymentPass()](pkaddpaymentpassviewcontroller/canaddpaymentpass%28%29.md): Returns a Boolean value that indicates whether the app can add cards to Apple Pay.

### Working with add payment view controllers

- [delegate](pkaddpaymentpassviewcontroller/delegate.md): The object that acts as the delegate for the add payment view controller.
- [PKAddPaymentPassViewControllerDelegate](pkaddpaymentpassviewcontrollerdelegate.md): Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.

### Creating an add-payment-pass view controller

- [init(requestConfiguration:delegate:)](pkaddpaymentpassviewcontroller/init%28requestconfiguration_delegate_%29.md): Returns an initialized add payment view controller object, using the provided configuration and delegate.
- [PKAddPaymentPassRequestConfiguration](pkaddpaymentpassrequestconfiguration.md): Contains the configuration data for a view controller that lets the user add a payment pass.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### Payment passes

- [PKPaymentPass](pkpaymentpass.md): An object that represents a provisioned payment card for in-app payments.

# PKAddPaymentPassViewController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Displays an interface that lets users add cards to Apple Pay from within your app.

## Declaration

```objectivec
@interface PKAddPaymentPassViewController : UIViewController
```

<a id="overview"></a>

## Overview

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before this class can be instantiated. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Determining if payment passes can be added

- [canAddPaymentPass](pkaddpaymentpassviewcontroller/canaddpaymentpass%28%29.md): Returns a Boolean value that indicates whether the app can add cards to Apple Pay.

### Working with add payment view controllers

- [delegate](pkaddpaymentpassviewcontroller/delegate.md): The object that acts as the delegate for the add payment view controller.
- [PKAddPaymentPassViewControllerDelegate](pkaddpaymentpassviewcontrollerdelegate.md): Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.

### Creating an add-payment-pass view controller

- [initWithRequestConfiguration:delegate:](pkaddpaymentpassviewcontroller/init%28requestconfiguration_delegate_%29.md): Returns an initialized add payment view controller object, using the provided configuration and delegate.
- [PKAddPaymentPassRequestConfiguration](pkaddpaymentpassrequestconfiguration.md): Contains the configuration data for a view controller that lets the user add a payment pass.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

## See Also

### Payment passes

- [PKPaymentPass](pkpaymentpass.md): An object that represents a provisioned payment card for in-app payments.
