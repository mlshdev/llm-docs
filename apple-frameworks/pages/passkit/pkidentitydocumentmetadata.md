> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentitydocumentmetadata](https://developer.apple.com/documentation/passkit/pkidentitydocumentmetadata)

# PKIdentityDocumentMetadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A set of configured metadata that defines the required information to add the corresponding pass to Wallet.

## Declaration

```swift
class PKIdentityDocumentMetadata
```

<a id="overview"></a>

## Overview

This class contains the required and optional metadata you need to configure a pass. It’s similar to [PKShareablePassMetadata](pkshareablepassmetadata.md).

## Topics

### Instance Properties

- [cardConfigurationIdentifier](pkidentitydocumentmetadata/cardconfigurationidentifier.md)
- [cardTemplateIdentifier](pkidentitydocumentmetadata/cardtemplateidentifier.md)
- [credentialIdentifier](pkidentitydocumentmetadata/credentialidentifier.md)
- [serverEnvironmentIdentifier](pkidentitydocumentmetadata/serverenvironmentidentifier.md): An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.
- [sharingInstanceIdentifier](pkidentitydocumentmetadata/sharinginstanceidentifier.md): A unique identifier that refers to an instance of sharing credentials to a person’s device that another user, device, or the web initiates.
- [documentType](pkidentitydocumentmetadata/documenttype.md): Identifies the type of the identity document.
- [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md): Identifies the issuing country of the identity document.
- [cardConfigurationIdentifier](pkidentitydocumentmetadata/cardconfigurationidentifier.md)
- [cardTemplateIdentifier](pkidentitydocumentmetadata/cardtemplateidentifier.md)
- [credentialIdentifier](pkidentitydocumentmetadata/credentialidentifier.md)
- [documentType](pkidentitydocumentmetadata/documenttype.md): Identifies the type of the identity document.
- [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md): Identifies the issuing country of the identity document.
- [serverEnvironmentIdentifier](pkidentitydocumentmetadata/serverenvironmentidentifier.md): An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.
- [sharingInstanceIdentifier](pkidentitydocumentmetadata/sharinginstanceidentifier.md): A unique identifier that refers to an instance of sharing credentials to a person’s device that another user, device, or the web initiates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md)
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md)

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
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKIdentityDocumentMetadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A set of configured metadata that defines the required information to add the corresponding pass to Wallet.

## Declaration

```objectivec
@interface PKIdentityDocumentMetadata : NSObject
```

<a id="overview"></a>

## Overview

This class contains the required and optional metadata you need to configure a pass. It’s similar to [PKShareablePassMetadata](pkshareablepassmetadata.md).

## Topics

### Instance Properties

- [cardConfigurationIdentifier](pkidentitydocumentmetadata/cardconfigurationidentifier.md)
- [cardTemplateIdentifier](pkidentitydocumentmetadata/cardtemplateidentifier.md)
- [credentialIdentifier](pkidentitydocumentmetadata/credentialidentifier.md)
- [serverEnvironmentIdentifier](pkidentitydocumentmetadata/serverenvironmentidentifier.md): An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.
- [sharingInstanceIdentifier](pkidentitydocumentmetadata/sharinginstanceidentifier.md): A unique identifier that refers to an instance of sharing credentials to a person’s device that another user, device, or the web initiates.
- [documentType](pkidentitydocumentmetadata/documenttype.md): Identifies the type of the identity document.
- [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md): Identifies the issuing country of the identity document.
- [cardConfigurationIdentifier](pkidentitydocumentmetadata/cardconfigurationidentifier.md)
- [cardTemplateIdentifier](pkidentitydocumentmetadata/cardtemplateidentifier.md)
- [credentialIdentifier](pkidentitydocumentmetadata/credentialidentifier.md)
- [documentType](pkidentitydocumentmetadata/documenttype.md): Identifies the type of the identity document.
- [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md): Identifies the issuing country of the identity document.
- [serverEnvironmentIdentifier](pkidentitydocumentmetadata/serverenvironmentidentifier.md): An identifier that references the target server environment Apple Pay servers need to connect with to provision the pass.
- [sharingInstanceIdentifier](pkidentitydocumentmetadata/sharinginstanceidentifier.md): A unique identifier that refers to an instance of sharing credentials to a person’s device that another user, device, or the web initiates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md)
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md)

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
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
