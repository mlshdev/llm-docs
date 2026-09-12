> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassviewcontrollerdelegate](https://developer.apple.com/documentation/passkit/pkaddpaymentpassviewcontrollerdelegate)

# PKAddPaymentPassViewControllerDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.

## Declaration

```swift
protocol PKAddPaymentPassViewControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates for the [PKAddPaymentPassViewController](pkaddpaymentpassviewcontroller.md) class must adopt this protocol.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController(\_:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:)](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [PKAddPaymentPassRequest](pkaddpaymentpassrequest.md): Contains the card data needed to add a card to Apple Pay.
- [addPaymentPassViewController(\_:didFinishAdding:error:)](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__didfinishadding_error_%29.md)

### Payment pass errors

- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with add payment view controllers

- [delegate](pkaddpaymentpassviewcontroller/delegate.md): The object that acts as the delegate for the add payment view controller.

# PKAddPaymentPassViewControllerDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Methods that let the system prompt you for an add payment request, and inform you when a request has succeeded or failed.

## Declaration

```objectivec
@protocol PKAddPaymentPassViewControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates for the [PKAddPaymentPassViewController](pkaddpaymentpassviewcontroller.md) class must adopt this protocol.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [PKAddPaymentPassRequest](pkaddpaymentpassrequest.md): Contains the card data needed to add a card to Apple Pay.
- [addPaymentPassViewController:didFinishAddingPaymentPass:error:](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__didfinishadding_error_%29.md)

### Payment pass errors

- [PKAddPaymentPassError](pkaddpaymentpasserror.md): Error codes for adding payment passes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Working with add payment view controllers

- [delegate](pkaddpaymentpassviewcontroller/delegate.md): The object that acts as the delegate for the add payment view controller.
