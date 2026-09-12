> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkjapanindividualnumbercardmetadata](https://developer.apple.com/documentation/passkit/pkjapanindividualnumbercardmetadata)

# PKJapanIndividualNumberCardMetadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A class that contains metadata indicating the specific product instance to provision.

## Declaration

```swift
class PKJapanIndividualNumberCardMetadata
```

<a id="overview"></a>

## Overview

This class is similar to [PKShareablePassMetadata](pkshareablepassmetadata.md).

## Topics

### Initializing the digital card metadata

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:)](pkjapanindividualnumbercardmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md): Initializes the user instance for provisioning.
- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:)](pkjapanindividualnumbercardmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md): Creates the product instance to provision.

### Defining configuration

- [authenticationPassword](pkjapanindividualnumbercardmetadata/authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [preview](pkjapanindividualnumbercardmetadata/preview.md): An object that contains information representing the pass for provisioning.
- [signingPassword](pkjapanindividualnumbercardmetadata/signingpassword.md): A string that sets the signing password when you provision the pass.

## Relationships

### Inherits From

- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md)

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
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.

# PKJapanIndividualNumberCardMetadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+

A class that contains metadata indicating the specific product instance to provision.

## Declaration

```objectivec
@interface PKJapanIndividualNumberCardMetadata : PKIdentityDocumentMetadata
```

<a id="overview"></a>

## Overview

This class is similar to [PKShareablePassMetadata](pkshareablepassmetadata.md).

## Topics

### Initializing the digital card metadata

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardConfigurationIdentifier:preview:](pkjapanindividualnumbercardmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardconfigurationidentifier_preview_%29.md): Initializes the user instance for provisioning.
- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:preview:](pkjapanindividualnumbercardmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_preview_%29.md): Creates the product instance to provision.

### Defining configuration

- [authenticationPassword](pkjapanindividualnumbercardmetadata/authenticationpassword.md): A string that specifies the authentication password when provisioning the pass.
- [preview](pkjapanindividualnumbercardmetadata/preview.md): An object that contains information representing the pass for provisioning.
- [signingPassword](pkjapanindividualnumbercardmetadata/signingpassword.md): A string that sets the signing password when you provision the pass.

## Relationships

### Inherits From

- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md)

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
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
