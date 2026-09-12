> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityphotoiddescriptor](https://developer.apple.com/documentation/passkit/pkidentityphotoiddescriptor)

# PKIdentityPhotoIDDescriptor (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object you use to request information from a user’s photo ID or equivalent document.

## Declaration

```swift
class PKIdentityPhotoIDDescriptor
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

### Discussion

Use this class to help create a digital ID in Wallet, which is an Apple issued ID credential based on government-issued ICAO compliant passport. This ID is available to use in person, within apps, and on the web.

For the elements you request, the response contains the corresponding elements present in the user’s identity document. The following table shows the mapping from [PKIdentityElement](pkidentityelement.md) to elements in the `PKIdentityPhotoIDDescriptor`. If the [PKIdentityElement](pkidentityelement.md) corresponds to more than one of the mobile doc elements, all of the elements are returned.

| Identity element | ISO 23220_1 namespace | Description |
| --- | --- | --- |
| `familyNameElement` | `family_name_unicode`, `family_name_latin1` | Last name, surname, or primary identifier, of the holder. |
| `givenNameElement` | `given_name_unicode`, `given_name_latin1` | First name(s), other name(s), or secondary identifier, of the holder. |
| `portraitElement` | `portrait` | Portrait data as specified in ISO/IEC 18013-2:2020, C.4.5. |
| `addressElement` | `resident_address_unicode`, `resident_city_unicode`, `resident_city_latin1`, `resident_postal_code`, `resident_country` | The place where the ID holder resides and may be contacted. |
| `issuingAuthority` | `issuing_authority_unicode`, `issuing_subdivision`, `issuing_country` | The issuer of the digital ID credential. |
| `documentIssueDateElement` | `issue_date` | The issue date for the underlying physical ID. |
| `documentExpirationDateElement` | `expiry_date` | Date when the ID expires (Note: This is intended to be the date of the underlying physical document, if appropriate. The mdoc-specific dates are included in the ValidityInfo within the MSO.) |
| `documentNumberElement` | `document_number` | The number assigned or calculated by the issuing authority. |
| `sexElement` | `sex_unicode` | The ID holder’s sex using values as defined in ISO/IEC 5218. |
| `dateOfBirthElement` | `birth_date_unicode` | The date when the ID holder was born. |
| `ageElement` | `age_in_years` | The age of the ID holder. |
| `ageThresholdElement` | `age_over_NN` | Age attestation used to convey to a verifier, in a data-minimized fashion, if the holder is older than a specified age. |

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
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.

# PKIdentityPhotoIDDescriptor (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

An object you use to request information from a user’s photo ID or equivalent document.

## Declaration

```objectivec
@interface PKIdentityPhotoIDDescriptor : NSObject
```

## Mentioned In

- [Requesting identity data from a Wallet pass](requesting-identity-data-from-a-wallet-pass.md)

<a id="Discussion"></a>

### Discussion

Use this class to help create a digital ID in Wallet, which is an Apple issued ID credential based on government-issued ICAO compliant passport. This ID is available to use in person, within apps, and on the web.

For the elements you request, the response contains the corresponding elements present in the user’s identity document. The following table shows the mapping from [PKIdentityElement](pkidentityelement.md) to elements in the `PKIdentityPhotoIDDescriptor`. If the [PKIdentityElement](pkidentityelement.md) corresponds to more than one of the mobile doc elements, all of the elements are returned.

| Identity element | ISO 23220_1 namespace | Description |
| --- | --- | --- |
| `familyNameElement` | `family_name_unicode`, `family_name_latin1` | Last name, surname, or primary identifier, of the holder. |
| `givenNameElement` | `given_name_unicode`, `given_name_latin1` | First name(s), other name(s), or secondary identifier, of the holder. |
| `portraitElement` | `portrait` | Portrait data as specified in ISO/IEC 18013-2:2020, C.4.5. |
| `addressElement` | `resident_address_unicode`, `resident_city_unicode`, `resident_city_latin1`, `resident_postal_code`, `resident_country` | The place where the ID holder resides and may be contacted. |
| `issuingAuthority` | `issuing_authority_unicode`, `issuing_subdivision`, `issuing_country` | The issuer of the digital ID credential. |
| `documentIssueDateElement` | `issue_date` | The issue date for the underlying physical ID. |
| `documentExpirationDateElement` | `expiry_date` | Date when the ID expires (Note: This is intended to be the date of the underlying physical document, if appropriate. The mdoc-specific dates are included in the ValidityInfo within the MSO.) |
| `documentNumberElement` | `document_number` | The number assigned or calculated by the issuing authority. |
| `sexElement` | `sex_unicode` | The ID holder’s sex using values as defined in ISO/IEC 5218. |
| `dateOfBirthElement` | `birth_date_unicode` | The date when the ID holder was born. |
| `ageElement` | `age_in_years` | The age of the ID holder. |
| `ageThresholdElement` | `age_over_NN` | Age attestation used to convey to a verifier, in a data-minimized fashion, if the holder is older than a specified age. |

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
- [PKIdentityAnyOfDescriptor](pkidentityanyofdescriptor.md): An object you use to request information from multiple identity documents.
- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKAddIdentityDocumentMetadata](pkaddidentitydocumentmetadata.md): The object for specifying the metadata necessary to provision identity documents.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddIdentityDocumentType](pkaddidentitydocumenttype.md): Classifications that reflect the type of identity document.
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md): Configuration to define the identity document.
- [PKAddPassMetadataPreview](pkaddpassmetadatapreview.md): A preview object that contains information representing the pass you add to Wallet.
- [PKIdentityDocumentMetadata](pkidentitydocumentmetadata.md): A set of configured metadata that defines the required information to add the corresponding pass to Wallet.
- [PKIdentityNationalIDCardDescriptor](pkidentitynationalidcarddescriptor.md): An object for requesting information from a user’s national ID card.
- [PKJapanIndividualNumberCardMetadata](pkjapanindividualnumbercardmetadata.md): A class that contains metadata indicating the specific product instance to provision.
