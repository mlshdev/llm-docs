> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityauthorizationcontroller](https://developer.apple.com/documentation/passkit/pkidentityauthorizationcontroller)

# PKIdentityAuthorizationController (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that presents a sheet that prompts the user to allow a request for identity information.

## Declaration

```swift
class PKIdentityAuthorizationController
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="overview"></a>

## Overview

Use this class to request [PKIdentityElement](pkidentityelement.md) objects from a mobile driver’s license or state identification card. When you request identity information, the system prompts the user for approval.

```swift
// Create an authorization controller.
let controller = PKIdentityAuthorizationController()

// Describe the elements you request.
let descriptor = PKIdentityDriversLicenseDescriptor()
descriptor.addElements([.age(atLeast: 18)], 
                        intentToStore: .willNotStore)
descriptor.addElements([.givenName, .portrait], 
                        intentToStore: .mayStore(days: 30))

// Create the request.
let request = PKIdentityRequest()
request.descriptor = descriptor
request.merchantIdentifier = // A merchant identifier you configure in the developer portal.
request.nonce = // Generate a nonce to verify a request is only made once.

// Prompt the user for approval.
controller.requestDocument(request) { document, error in
    // Handle the document response or error, if necessary.
}
```

The system returns response data as an encoded concise binary object representation (CBOR) blob; CBOR is a binary format similar to JSON. You must decrypt the response on your server.

For design guidance, see [Human Interface Guidelines \> Technologies \> Wallet](https://developer.apple.com/design/human-interface-guidelines/technologies/wallet/introduction).

> **Important**

>  This API only works on iPhone and returns an error if you access it on iPad. This framework requires a special entitlement from Apple. This entitlement is not yet available.

## Topics

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.
- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md): A type that describes the structure and behavior of an identity document.

### Requesting a document

- [checkCanRequestDocument(\_:completion:)](pkidentityauthorizationcontroller/checkcanrequestdocument%28__completion_%29.md): Returns whether an identity document is available to request.
- [requestDocument(\_:completion:)](pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md): Prompts the user to approve the request to get the identity information.

### Cancelling a request

- [cancelRequest()](pkidentityauthorizationcontroller/cancelrequest%28%29.md): Cancels a request in progress.

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

- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
- [VerifyIdentityWithWalletButton](verifyidentitywithwalletbutton.md): A type that displays a button to present the identity verification flow.
- [VerifyIdentityWithWalletButtonLabel](verifyidentitywithwalletbuttonlabel.md): A type that represents the label you use with a verify identity button.
- [VerifyIdentityWithWalletButtonStyle](verifyidentitywithwalletbuttonstyle.md): A type that represents the style you use with a verify identity button.

# PKIdentityAuthorizationController (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that presents a sheet that prompts the user to allow a request for identity information.

## Declaration

```objectivec
@interface PKIdentityAuthorizationController : NSObject
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="overview"></a>

## Overview

Use this class to request [PKIdentityElement](pkidentityelement.md) objects from a mobile driver’s license or state identification card. When you request identity information, the system prompts the user for approval.

```swift
// Create an authorization controller.
let controller = PKIdentityAuthorizationController()

// Describe the elements you request.
let descriptor = PKIdentityDriversLicenseDescriptor()
descriptor.addElements([.age(atLeast: 18)], 
                        intentToStore: .willNotStore)
descriptor.addElements([.givenName, .portrait], 
                        intentToStore: .mayStore(days: 30))

// Create the request.
let request = PKIdentityRequest()
request.descriptor = descriptor
request.merchantIdentifier = // A merchant identifier you configure in the developer portal.
request.nonce = // Generate a nonce to verify a request is only made once.

// Prompt the user for approval.
controller.requestDocument(request) { document, error in
    // Handle the document response or error, if necessary.
}
```

The system returns response data as an encoded concise binary object representation (CBOR) blob; CBOR is a binary format similar to JSON. You must decrypt the response on your server.

For design guidance, see [Human Interface Guidelines \> Technologies \> Wallet](https://developer.apple.com/design/human-interface-guidelines/technologies/wallet/introduction).

> **Important**

>  This API only works on iPhone and returns an error if you access it on iPad. This framework requires a special entitlement from Apple. This entitlement is not yet available.

## Topics

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityIntentToStore](pkidentityintenttostore.md): An object that represents your intention to store an identity element or values derived from an identity element.
- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md): A type that describes the structure and behavior of an identity document.

### Requesting a document

- [checkCanRequestDocument:completion:](pkidentityauthorizationcontroller/checkcanrequestdocument%28__completion_%29.md): Returns whether an identity document is available to request.
- [requestDocument:completion:](pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md): Prompts the user to approve the request to get the identity information.

### Cancelling a request

- [cancelRequest](pkidentityauthorizationcontroller/cancelrequest%28%29.md): Cancels a request in progress.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Identity sheet interactions and authorization

- [PKIdentityRequest](pkidentityrequest.md): An object that represents a request for identity information from a Wallet pass.
- [PKIdentityDocument](pkidentitydocument.md): An object that represents the response to a request.
- [PKIdentityElement](pkidentityelement.md): An object that represents the elements an app requests from identity documents.
- [PKIdentityButton](pkidentitybutton.md): An object that displays a button to trigger the identity verification flow.
