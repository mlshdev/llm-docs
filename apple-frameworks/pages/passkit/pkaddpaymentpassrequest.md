> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpaymentpassrequest](https://developer.apple.com/documentation/passkit/pkaddpaymentpassrequest)

# PKAddPaymentPassRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Contains the card data needed to add a card to Apple Pay.

## Declaration

```swift
class PKAddPaymentPassRequest
```

<a id="overview"></a>

## Overview

All sensitive data must be encrypted before being assigned to this object. Because the encryption keys vary depending on the server, create [PKAddPaymentPassRequest](pkaddpaymentpassrequest.md) instances only when your [PKAddPaymentPassViewControllerDelegate](pkaddpaymentpassviewcontrollerdelegate.md) object’s [addPaymentPassViewController(\_:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:)](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md) method is called. The required server certificates are provided at that time.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Creating an add payment pass request

- [init()](pkaddpaymentpassrequest/init%28%29.md)

### Accessing request data

- [activationData](pkaddpaymentpassrequest/activationdata.md): The request’s activation data.
- [encryptedPassData](pkaddpaymentpassrequest/encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](pkaddpaymentpassrequest/ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](pkaddpaymentpassrequest/wrappedkey.md)

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

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController(\_:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:)](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [addPaymentPassViewController(\_:didFinishAdding:error:)](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__didfinishadding_error_%29.md)

# PKAddPaymentPassRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+

Contains the card data needed to add a card to Apple Pay.

## Declaration

```objectivec
@interface PKAddPaymentPassRequest : NSObject
```

<a id="overview"></a>

## Overview

All sensitive data must be encrypted before being assigned to this object. Because the encryption keys vary depending on the server, create [PKAddPaymentPassRequest](pkaddpaymentpassrequest.md) instances only when your [PKAddPaymentPassViewControllerDelegate](pkaddpaymentpassviewcontrollerdelegate.md) object’s [addPaymentPassViewController:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md) method is called. The required server certificates are provided at that time.

> **Important**

>  Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## Topics

### Creating an add payment pass request

- [init](pkaddpaymentpassrequest/init%28%29.md)

### Accessing request data

- [activationData](pkaddpaymentpassrequest/activationdata.md): The request’s activation data.
- [encryptedPassData](pkaddpaymentpassrequest/encryptedpassdata.md): An encrypted JSON file containing the sensitive information needed to add a card to Apple Pay.
- [ephemeralPublicKey](pkaddpaymentpassrequest/ephemeralpublickey.md): The ephemeral public key used by elliptic curve cryptography (ECC).
- [wrappedKey](pkaddpaymentpassrequest/wrappedkey.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Requesting to add payment cards to Apple Pay

- [addPaymentPassViewController:generateRequestWithCertificateChain:nonce:nonceSignature:completionHandler:](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__generaterequestwithcertificatechain_nonce_noncesignature_completionhandler_%29.md): Asks the delegate to create an add payment request.
- [addPaymentPassViewController:didFinishAddingPaymentPass:error:](pkaddpaymentpassviewcontrollerdelegate/addpaymentpassviewcontroller%28__didfinishadding_error_%29.md)
