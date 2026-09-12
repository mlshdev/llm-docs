> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddidentitydocumentconfiguration](https://developer.apple.com/documentation/passkit/pkaddidentitydocumentconfiguration)

# PKAddIdentityDocumentConfiguration (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Configuration to define the identity document.

## Declaration

```swift
class PKAddIdentityDocumentConfiguration
```

<a id="overview"></a>

## Overview

Use this class for identity document passes. You provide the underlying metadata that defines the passes.

## Topics

### Setting the metadata

- [metadata](pkaddidentitydocumentconfiguration/metadata.md): A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.
- [forMetadata(\_:completion:)](pkaddidentitydocumentconfiguration/formetadata%28__completion_%29.md): Returns the identity document configuration.

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Identity passes and authorization

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md): Initiate a request for identity information by prompting a user for permission and decrypting a response payload.
- [Configuring your environment for the Verify with Wallet API](configuring-your-environment-for-the-verify-with-wallet-api.md): Set up your environment to use Verify with Wallet.
- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md): Decrypt and verify an in-app presentment request on your server.
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md): An object you use to request information from multiple identity documents.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [JPKIPassContents](jpkipasscontents.md): A set of actions for viewing and updating PINs, passwords, and signing abilities associated with digital identities on the JPKI applet.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKAddIdentityDocumentConfiguration (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

Configuration to define the identity document.

## Declaration

```objectivec
@interface PKAddIdentityDocumentConfiguration : PKAddSecureElementPassConfiguration
```

<a id="overview"></a>

## Overview

Use this class for identity document passes. You provide the underlying metadata that defines the passes.

## Topics

### Setting the metadata

- [metadata](pkaddidentitydocumentconfiguration/metadata.md): A set of configurable metadata that defines the required information to add the corresponding pass to Wallet.
- [configurationForMetadata:completion:](pkaddidentitydocumentconfiguration/formetadata%28__completion_%29.md): Returns the identity document configuration.

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

## See Also

### Identity passes and authorization

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md): Initiate a request for identity information by prompting a user for permission and decrypting a response payload.
- [Configuring your environment for the Verify with Wallet API](configuring-your-environment-for-the-verify-with-wallet-api.md): Set up your environment to use Verify with Wallet.
- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md): Decrypt and verify an in-app presentment request on your server.
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md): An object you use to request information from multiple identity documents.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
