> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest/issuerkeyidentifiers](https://developer.apple.com/documentation/identitydocumentservices/iso18013mobiledocumentrequest/documentrequest/issuerkeyidentifiers)

# issuerKeyIdentifiers

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst · macOS 27.0+

A list of X.509 authority key identifiers corresponding to the issuer certificates accepted by the relying party.

## Declaration

```swift
var issuerKeyIdentifiers: [Data]
```

<a id="discussion"></a>

## Discussion

An empty list means any document signer certificate is acceptable.

> **Warning**

> The number of issuer key identifiers must not exceed 1,000 and the size of each identifier must not exceed 64 bytes.
