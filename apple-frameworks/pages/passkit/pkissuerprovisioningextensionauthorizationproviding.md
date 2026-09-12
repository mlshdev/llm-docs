> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkissuerprovisioningextensionauthorizationproviding](https://developer.apple.com/documentation/passkit/pkissuerprovisioningextensionauthorizationproviding)

# PKIssuerProvisioningExtensionAuthorizationProviding (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A protocol for a UI app extension to authorize a user to add a payment card to Wallet.

## Declaration

```swift
protocol PKIssuerProvisioningExtensionAuthorizationProviding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The principal class of your app’s authorization user interface extension target must conform to the `PKIssuerProvisioningExtensionAuthorizationProviding` protocol.

> **Important**

>  Before you can add a payment card provisioning UI extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Providing the result of authorization

- [completionHandler](pkissuerprovisioningextensionauthorizationproviding/completionhandler.md): A completion handler the system calls to find the result of authorizing the addition of the payment card.
- [PKIssuerProvisioningExtensionAuthorizationResult](pkissuerprovisioningextensionauthorizationresult.md): A value that indicates the result of authorizing the addition of a payment card.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Issuer cards

- [Implementing Wallet Extensions](implementing-wallet-extensions.md): Support adding an issued card to Apple Pay from directly within Apple Wallet using Wallet Extensions.
- [PKIssuerProvisioningExtensionHandler](pkissuerprovisioningextensionhandler.md): An abstract superclass for an app extension to add a payment card to Wallet.

# PKIssuerProvisioningExtensionAuthorizationProviding (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A protocol for a UI app extension to authorize a user to add a payment card to Wallet.

## Declaration

```objectivec
@protocol PKIssuerProvisioningExtensionAuthorizationProviding <NSObject>
```

<a id="overview"></a>

## Overview

The principal class of your app’s authorization user interface extension target must conform to the `PKIssuerProvisioningExtensionAuthorizationProviding` protocol.

> **Important**

>  Before you can add a payment card provisioning UI extension you need an entitlement from Apple. For more information on requesting an entitlement, contact apple-pay-inquiries@apple.com.

## Topics

### Providing the result of authorization

- [completionHandler](pkissuerprovisioningextensionauthorizationproviding/completionhandler.md): A completion handler the system calls to find the result of authorizing the addition of the payment card.
- [PKIssuerProvisioningExtensionAuthorizationResult](pkissuerprovisioningextensionauthorizationresult.md): A value that indicates the result of authorizing the addition of a payment card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Issuer cards

- [Implementing Wallet Extensions](implementing-wallet-extensions.md): Support adding an issued card to Apple Pay from directly within Apple Wallet using Wallet Extensions.
- [PKIssuerProvisioningExtensionHandler](pkissuerprovisioningextensionhandler.md): An abstract superclass for an app extension to add a payment card to Wallet.
