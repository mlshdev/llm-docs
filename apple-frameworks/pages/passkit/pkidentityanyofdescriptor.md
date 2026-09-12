> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityanyofdescriptor](https://developer.apple.com/documentation/passkit/pkidentityanyofdescriptor)

# PKIdentityAnyOfDescriptor (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object you use to request information from multiple identity documents.

## Declaration

```swift
class PKIdentityAnyOfDescriptor
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

Use this class to support requests for one or more identity documents or when multiple identity documents are requested. For example, this class supports the return of a driver’s license or digital ID, or the request for a driver’s license and a digital ID.

## Topics

### Identity documents

- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.

### Initializers

- [init(descriptors:)](pkidentityanyofdescriptor/init%28descriptors_%29.md): Returns a composite document descriptor with specified descriptors.

### Instance Properties

- [descriptors](pkidentityanyofdescriptor/descriptors.md): Set of requested descriptors for the composite document descriptor.

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
- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md)

## See Also

### Identity passes and authorization

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md): Initiate a request for identity information by prompting a user for permission and decrypting a response payload.
- [Configuring your environment for the Verify with Wallet API](configuring-your-environment-for-the-verify-with-wallet-api.md): Set up your environment to use Verify with Wallet.
- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md): Decrypt and verify an in-app presentment request on your server.
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [JPKIPassContents](jpkipasscontents.md): A set of actions for viewing and updating PINs, passwords, and signing abilities associated with digital identities on the JPKI applet.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKIdentityAnyOfDescriptor (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object you use to request information from multiple identity documents.

## Declaration

```objectivec
@interface PKIdentityAnyOfDescriptor : NSObject
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

## Discussion

Use this class to support requests for one or more identity documents or when multiple identity documents are requested. For example, this class supports the return of a driver’s license or digital ID, or the request for a driver’s license and a digital ID.

## Topics

### Identity documents

- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.

### Instance Properties

- [descriptors](pkidentityanyofdescriptor/descriptors.md): Set of requested descriptors for the composite document descriptor.

### Instance Methods

- [initWithDescriptors:](pkidentityanyofdescriptor/init%28descriptors_%29.md): Returns a composite document descriptor with specified descriptors.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md)

## See Also

### Identity passes and authorization

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md): Initiate a request for identity information by prompting a user for permission and decrypting a response payload.
- [Configuring your environment for the Verify with Wallet API](configuring-your-environment-for-the-verify-with-wallet-api.md): Set up your environment to use Verify with Wallet.
- [Verifying Wallet identity requests](verifying-wallet-identity-requests.md): Decrypt and verify an in-app presentment request on your server.
- [PKIdentityPhotoIDDescriptor](pkidentityphotoiddescriptor.md): An object you use to request information from a user’s photo ID or equivalent document.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
