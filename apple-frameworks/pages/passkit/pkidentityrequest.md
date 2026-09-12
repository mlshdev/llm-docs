> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityrequest](https://developer.apple.com/documentation/passkit/pkidentityrequest)

# PKIdentityRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a request for identity information from a Wallet pass.

## Declaration

```swift
class PKIdentityRequest
```

## Mentioned In

- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md)

<a id="overview"></a>

## Overview

A request consists of a [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md), a [nonce](pkidentityrequest/nonce.md), and a [merchantIdentifier](pkidentityrequest/merchantidentifier.md). A [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md) describes the document an app requests.

You use a [nonce](pkidentityrequest/nonce.md) to verify a request is only made once. It’s up to the app and its server to generate the [nonce](pkidentityrequest/nonce.md) before making the request, and to verify the [nonce](pkidentityrequest/nonce.md) when the server receives the response.

The [merchantIdentifier](pkidentityrequest/merchantidentifier.md) maps to an identifier you configure in the developer portal. Payment and identitity requests share the same identifier, so it’s important that the name of the property matches the equivalent [PKPaymentRequest](pkpaymentrequest.md), if necessary.

## Topics

### Configuring an identity request

- [descriptor](pkidentityrequest/descriptor.md): The description of the document the app requests.
- [nonce](pkidentityrequest/nonce.md): An arbitrary number that the signed response playload includes.
- [merchantIdentifier](pkidentityrequest/merchantidentifier.md): A value that represents the merchant that makes the request.

### Instance Properties

- [usageDescriptionKey](pkidentityrequest/usagedescriptionkey.md): A key in the NSIdentityUsageDescriptionDictionary field of the app’s Info.plist file.

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

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
- [VerifyIdentityWithWalletButton](verifyidentitywithwalletbutton.md): A type that displays a button to present the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.

# PKIdentityRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents a request for identity information from a Wallet pass.

## Declaration

```objectivec
@interface PKIdentityRequest : NSObject
```

## Mentioned In

- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md)

<a id="overview"></a>

## Overview

A request consists of a [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md), a [nonce](pkidentityrequest/nonce.md), and a [merchantIdentifier](pkidentityrequest/merchantidentifier.md). A [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md) describes the document an app requests.

You use a [nonce](pkidentityrequest/nonce.md) to verify a request is only made once. It’s up to the app and its server to generate the [nonce](pkidentityrequest/nonce.md) before making the request, and to verify the [nonce](pkidentityrequest/nonce.md) when the server receives the response.

The [merchantIdentifier](pkidentityrequest/merchantidentifier.md) maps to an identifier you configure in the developer portal. Payment and identitity requests share the same identifier, so it’s important that the name of the property matches the equivalent [PKPaymentRequest](pkpaymentrequest.md), if necessary.

## Topics

### Configuring an identity request

- [descriptor](pkidentityrequest/descriptor.md): The description of the document the app requests.
- [nonce](pkidentityrequest/nonce.md): An arbitrary number that the signed response playload includes.
- [merchantIdentifier](pkidentityrequest/merchantidentifier.md): A value that represents the merchant that makes the request.

### Instance Properties

- [usageDescriptionKey](pkidentityrequest/usagedescriptionkey.md): A key in the NSIdentityUsageDescriptionDictionary field of the app’s Info.plist file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityAuthorizationController](pkidentityauthorizationcontroller.md): An object that presents a sheet that prompts the user to allow a request for identity information.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
