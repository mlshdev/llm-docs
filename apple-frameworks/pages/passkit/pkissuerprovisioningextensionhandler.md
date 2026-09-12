> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionhandler](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionhandler)

# PKIssuerProvisioningExtensionHandler (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An abstract superclass for an app extension to add a payment card to Wallet.

## Declaration

```swift
class PKIssuerProvisioningExtensionHandler
```

<a id="overview"></a>

## Overview

The principal class of your app’s extension target must be a subclass of `PKIssuerProvisioningExtensionHandler`.

Your app must be installed and the user open the app at least once for the system to call the extension handler.

> **Important**

>  Before you can add a payment card provisioning extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Returning extension status

- [status(completion:)](pkissuerprovisioningextensionhandler/status%28completion_%29.md): Reports the status of your Wallet extension.
- [PKIssuerProvisioningExtensionStatus](pkissuerprovisioningextensionstatus.md): An object that indicates whether there are any payment cards available to add as Wallet passes.

### Returning available passes

- [passEntries(completion:)](pkissuerprovisioningextensionhandler/passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [remotePassEntries(completion:)](pkissuerprovisioningextensionhandler/remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.

### Returning information for adding a pass

- [generateAddPaymentPassRequestForPassEntryWithIdentifier(\_:configuration:certificateChain:nonce:nonceSignature:completionHandler:)](pkissuerprovisioningextensionhandler/generateaddpaymentpassrequestforpassentrywithidentifier%28__configuration_certificatechain_nonce_noncesignature_completionhandler_%29.md): Creates an object with the data the system needs to add a card to Apple Pay.

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

### Issuer cards

- [Implementing Wallet Extensions](implementing-wallet-extensions.md): Support adding an issued card to Apple Pay from directly within Apple Wallet using Wallet Extensions.
- [PKIssuerProvisioningExtensionAuthorizationProviding](pkissuerprovisioningextensionauthorizationproviding.md): A protocol for a UI app extension to authorize a user to add a payment card to Wallet.

# PKIssuerProvisioningExtensionHandler (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An abstract superclass for an app extension to add a payment card to Wallet.

## Declaration

```objectivec
@interface PKIssuerProvisioningExtensionHandler : NSObject
```

<a id="overview"></a>

## Overview

The principal class of your app’s extension target must be a subclass of `PKIssuerProvisioningExtensionHandler`.

Your app must be installed and the user open the app at least once for the system to call the extension handler.

> **Important**

>  Before you can add a payment card provisioning extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Returning extension status

- [statusWithCompletion:](pkissuerprovisioningextensionhandler/status%28completion_%29.md): Reports the status of your Wallet extension.
- [PKIssuerProvisioningExtensionStatus](pkissuerprovisioningextensionstatus.md): An object that indicates whether there are any payment cards available to add as Wallet passes.

### Returning available passes

- [passEntriesWithCompletion:](pkissuerprovisioningextensionhandler/passentries%28completion_%29.md): Reports the list of passes available to add to an iPhone.
- [remotePassEntriesWithCompletion:](pkissuerprovisioningextensionhandler/remotepassentries%28completion_%29.md): Reports the list of passes available to add to an Apple Watch.
- [PKIssuerProvisioningExtensionPassEntry](pkissuerprovisioningextensionpassentry.md): An object that represents an item available to add to as a Wallet pass.
- [PKIssuerProvisioningExtensionPaymentPassEntry](pkissuerprovisioningextensionpaymentpassentry.md): An object that represents a payment card available to add as a payment pass.

### Returning information for adding a pass

- [generateAddPaymentPassRequestForPassEntryWithIdentifier:configuration:certificateChain:nonce:nonceSignature:completionHandler:](pkissuerprovisioningextensionhandler/generateaddpaymentpassrequestforpassentrywithidentifier%28__configuration_certificatechain_nonce_noncesignature_completionhandler_%29.md): Creates an object with the data the system needs to add a card to Apple Pay.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Issuer cards

- [Implementing Wallet Extensions](implementing-wallet-extensions.md): Support adding an issued card to Apple Pay from directly within Apple Wallet using Wallet Extensions.
- [PKIssuerProvisioningExtensionAuthorizationProviding](pkissuerprovisioningextensionauthorizationproviding.md): A protocol for a UI app extension to authorize a user to add a payment card to Wallet.
