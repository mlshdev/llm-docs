> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddidentitydocumentmetadata](https://developer.apple.com/documentation/passkit/pkaddidentitydocumentmetadata)

# PKAddIdentityDocumentMetadata (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · visionOS 26.0+

The object for specifying the metadata necessary to provision identity documents.

## Declaration

```swift
class PKAddIdentityDocumentMetadata
```

<a id="overview"></a>

## Overview

After creating a [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md) object, you can verify whether an identity document already exists for the specified [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md) and  [documentType](pkidentitydocumentmetadata/documenttype.md).

> **Important**

>  This class requires a special entitlement from Apple. Your app needs to include that entitlement before you can use this API.

The following example shows how to create a metadata object:

```swift
let previewIdentityPass = PKAddPassMetadataPreview(
                  passThumbnail: passThumbnail,
                  localizedDescription: localizedDescription
              )

let identityMetadata = PKAddIdentityDocumentMetadata(
    provisioningCredentialIdentifier: credentialIdentifier,
    sharingInstanceIdentifier: sharingInstanceIdentifier,
    cardTemplateIdentifier: templateIdentifier,
    issuingCountryCode: "US",
    documentType: .mDL,
    previewIdentityPass: previewIdentityPass
)
```

## Topics

### Creating metadata for identity documents

- [init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:issuingCountryCode:documentType:preview:)](pkaddidentitydocumentmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_issuingcountrycode_documenttype_preview_%29.md): Creates the identity document metadata with parameters that the issuer’s server configures to indicate the specific product instance to provision.

### Checking identity document types

- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.

### Previewing identity document metadata

- [preview](pkaddidentitydocumentmetadata/preview.md): A preview object containing the necessary information to represent the pass during provisioning.

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
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [JPKIPassContents](jpkipasscontents.md): A set of actions for viewing and updating PINs, passwords, and signing abilities associated with digital identities on the JPKI applet.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKAddIdentityDocumentMetadata (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · visionOS 26.0+

The object for specifying the metadata necessary to provision identity documents.

## Declaration

```objectivec
@interface PKAddIdentityDocumentMetadata : PKIdentityDocumentMetadata
```

<a id="overview"></a>

## Overview

After creating a [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md) object, you can verify whether an identity document already exists for the specified [issuingCountryCode](pkidentitydocumentmetadata/issuingcountrycode.md) and  [documentType](pkidentitydocumentmetadata/documenttype.md).

> **Important**

>  This class requires a special entitlement from Apple. Your app needs to include that entitlement before you can use this API.

The following example shows how to create a metadata object:

```swift
let previewIdentityPass = PKAddPassMetadataPreview(
                  passThumbnail: passThumbnail,
                  localizedDescription: localizedDescription
              )

let identityMetadata = PKAddIdentityDocumentMetadata(
    provisioningCredentialIdentifier: credentialIdentifier,
    sharingInstanceIdentifier: sharingInstanceIdentifier,
    cardTemplateIdentifier: templateIdentifier,
    issuingCountryCode: "US",
    documentType: .mDL,
    previewIdentityPass: previewIdentityPass
)
```

## Topics

### Creating metadata for identity documents

- [initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:issuingCountryCode:documentType:preview:](pkaddidentitydocumentmetadata/init%28provisioningcredentialidentifier_sharinginstanceidentifier_cardtemplateidentifier_issuingcountrycode_documenttype_preview_%29.md): Creates the identity document metadata with parameters that the issuer’s server configures to indicate the specific product instance to provision.

### Checking identity document types

- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.

### Previewing identity document metadata

- [preview](pkaddidentitydocumentmetadata/preview.md): A preview object containing the necessary information to represent the pass during provisioning.

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
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
