> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/mobiledocumentregistration/init(mobiledocumenttype:supportedissuerkeyidentifiers:supportedauthoritykeyidentifiers:documentidentifier:invalidationdate:)](https://developer.apple.com/documentation/identitydocumentservices/mobiledocumentregistration/init(mobiledocumenttype:supportedissuerkeyidentifiers:supportedauthoritykeyidentifiers:documentidentifier:invalidationdate:))

# init(mobileDocumentType:supportedIssuerKeyIdentifiers:supportedAuthorityKeyIdentifiers:documentIdentifier:invalidationDate:)

**Framework:** IdentityDocumentServices  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Initialize a mobile document registration with issuer key identifiers.

## Declaration

```swift
init(mobileDocumentType: String, supportedIssuerKeyIdentifiers: [Data], supportedAuthorityKeyIdentifiers: [Data], documentIdentifier: String = UUID().uuidString, invalidationDate: Date? = nil)
```

## Parameters

- `mobileDocumentType`: The type of the mobile document.
- `supportedIssuerKeyIdentifiers`: A list of X.509 authority key identifiers that correspond to the document signer certificate chain for the mobile document.
- `supportedAuthorityKeyIdentifiers`: A list of authority key identifiers that correspond to relying party authorizers that are trusted by the document provider app.
- `documentIdentifier`: An identifier that uniquely refers to the document that is registered. If not provided, a random unique identifier will be chosen.
- `invalidationDate`: A date that indicates when this registration should be invalidated. This can be used in scenarios where the expiration time period of a document is known.
