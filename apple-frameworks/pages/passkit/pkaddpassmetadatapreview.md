> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassmetadatapreview](https://developer.apple.com/documentation/passkit/pkaddpassmetadatapreview)

# PKAddPassMetadataPreview (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A preview object that contains information representing the pass you add to Wallet.

## Declaration

```swift
class PKAddPassMetadataPreview
```

<a id="overview"></a>

## Overview

Use this class to preview an object with all of the information you need to present a pass during provision.

## Topics

### Creating a preview of the pass

- [init(passThumbnail:localizedDescription:)](pkaddpassmetadatapreview/init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [localizedDescription](pkaddpassmetadatapreview/localizeddescription.md): A localized description of the pass.
- [passThumbnailImage](pkaddpassmetadatapreview/passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)

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
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [JPKIPassContents](jpkipasscontents.md): A set of actions for viewing and updating PINs, passwords, and signing abilities associated with digital identities on the JPKI applet.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKAddPassMetadataPreview (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A preview object that contains information representing the pass you add to Wallet.

## Declaration

```objectivec
@interface PKAddPassMetadataPreview : NSObject
```

<a id="overview"></a>

## Overview

Use this class to preview an object with all of the information you need to present a pass during provision.

## Topics

### Creating a preview of the pass

- [initWithPassThumbnail:localizedDescription:](pkaddpassmetadatapreview/init%28passthumbnail_localizeddescription_%29.md): Provides a preview of an image object that represents the pass you add to Wallet.
- [localizedDescription](pkaddpassmetadatapreview/localizeddescription.md): A localized description of the pass.
- [passThumbnailImage](pkaddpassmetadatapreview/passthumbnailimage.md): A CGImage object representing the card artwork of the pass you use during provisioning.
- [previewWithPassThumbnail:localizedDescription:](pkaddpassmetadatapreview/previewwithpassthumbnail_localizeddescription_.md): Initializes properties you need to preview an object that represents the pass you add to Wallet.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)

## See Also

### Identity passes and authorization

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md): Initiate a request for identity information by prompting a user for permission and decrypting a response payload.
- [Configuring your environment for the Verify with Wallet API](configuring-your-environment-for-the-verify-with-wallet-api.md): Set up your environment to use Verify with Wallet.
- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md): Decrypt and verify an in-app presentment request on your server.
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md): An object you use to request information from multiple identity documents.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
