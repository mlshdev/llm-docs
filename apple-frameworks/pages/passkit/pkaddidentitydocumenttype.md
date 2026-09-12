> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddidentitydocumenttype](https://developer.apple.com/documentation/passkit/pkaddidentitydocumenttype)

# PKAddIdentityDocumentType (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Classifications that reflect the type of identity document.

## Declaration

```swift
enum PKAddIdentityDocumentType
```

## Topics

### Types of identity documents

- [PKAddIdentityDocumentType.idCard](pkaddidentitydocumenttype/idcard.md): A generic pass that represents a person’s identification.
- [PKAddIdentityDocumentType.mDL](pkaddidentitydocumenttype/mdl.md): A pass that represents a driver’s license or government-issued identification.
- [PKAddIdentityDocumentType.photoID](pkaddidentitydocumenttype/photoid.md): A pass to use for personal identification.

### Initializers

- [init(rawValue:)](pkaddidentitydocumenttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

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
- [JPKIPassContents](jpkipasscontents.md): A set of actions for viewing and updating PINs, passwords, and signing abilities associated with digital identities on the JPKI applet.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKAddIdentityDocumentType (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Classifications that reflect the type of identity document.

## Declaration

```objectivec
enum PKAddIdentityDocumentType : NSInteger;
```

## Topics

### Types of identity documents

- [PKAddIdentityDocumentTypeIDCard](pkaddidentitydocumenttype/idcard.md): A generic pass that represents a person’s identification.
- [PKAddIdentityDocumentTypeMDL](pkaddidentitydocumenttype/mdl.md): A pass that represents a driver’s license or government-issued identification.
- [PKAddIdentityDocumentTypePhotoID](pkaddidentitydocumenttype/photoid.md): A pass to use for personal identification.

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
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
