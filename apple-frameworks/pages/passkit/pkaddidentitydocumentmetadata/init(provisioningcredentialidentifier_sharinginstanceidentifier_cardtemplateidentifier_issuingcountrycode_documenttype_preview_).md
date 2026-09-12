> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddidentitydocumentmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardtemplateidentifier:issuingcountrycode:documenttype:preview:)](https://developer.apple.com/documentation/passkit/pkaddidentitydocumentmetadata/init(provisioningcredentialidentifier:sharinginstanceidentifier:cardtemplateidentifier:issuingcountrycode:documenttype:preview:))

# init(provisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:issuingCountryCode:documentType:preview:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · visionOS 26.0+

Creates the identity document metadata with parameters that the issuer’s server configures to indicate the specific product instance to provision.

## Declaration

```swift
init(provisioningCredentialIdentifier credentialIdentifier: String, sharingInstanceIdentifier: String, cardTemplateIdentifier templateIdentifier: String, issuingCountryCode: String, documentType: PKAddIdentityDocumentType, preview: PKAddPassMetadataPreview)
```

## Parameters

- `credentialIdentifier`: Identifies the user’s instance for provisioning.
- `sharingInstanceIdentifier`: A short-lived token to prevent replay ability.
- `templateIdentifier`: A legacy identifier for Apple Pay servers.
- `issuingCountryCode`: Identifies the issuing country of the identity document.
- `documentType`: Identifies the type of the identity document.
- `preview`: An object containing information that represents the pass to provision in Wallet.

# initWithProvisioningCredentialIdentifier:sharingInstanceIdentifier:cardTemplateIdentifier:issuingCountryCode:documentType:preview: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · visionOS 26.0+

Creates the identity document metadata with parameters that the issuer’s server configures to indicate the specific product instance to provision.

## Declaration

```objectivec
- (instancetype) initWithProvisioningCredentialIdentifier:(NSString *) credentialIdentifier sharingInstanceIdentifier:(NSString *) sharingInstanceIdentifier cardTemplateIdentifier:(NSString *) templateIdentifier issuingCountryCode:(NSString *) issuingCountryCode documentType:(PKAddIdentityDocumentType) documentType preview:(PKAddPassMetadataPreview *) preview;
```

## Parameters

- `credentialIdentifier`: Identifies the user’s instance for provisioning.
- `sharingInstanceIdentifier`: A short-lived token to prevent replay ability.
- `templateIdentifier`: A legacy identifier for Apple Pay servers.
- `issuingCountryCode`: Identifies the issuing country of the identity document.
- `documentType`: Identifies the type of the identity document.
- `preview`: An object containing information that represents the pass to provision in Wallet.
