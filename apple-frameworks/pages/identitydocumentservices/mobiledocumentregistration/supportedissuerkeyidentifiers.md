> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/mobiledocumentregistration/supportedissuerkeyidentifiers](https://developer.apple.com/documentation/identitydocumentservices/mobiledocumentregistration/supportedissuerkeyidentifiers)

# supportedIssuerKeyIdentifiers

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A list of X.509 authority key identifiers that correspond to the document signer certificate chain for the mobile document.

## Declaration

```swift
var supportedIssuerKeyIdentifiers: [Data]
```

<a id="discussion"></a>

## Discussion

An issuer key identifier is an authority key identifier from the document signer certificate chain.

> **Warning**

> The number of issuer key identifiers must not exceed 1,000 and the size of each identifier must not exceed 64 bytes.
