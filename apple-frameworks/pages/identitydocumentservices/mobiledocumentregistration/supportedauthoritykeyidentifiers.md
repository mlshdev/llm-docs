> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/mobiledocumentregistration/supportedauthoritykeyidentifiers](https://developer.apple.com/documentation/identitydocumentservices/mobiledocumentregistration/supportedauthoritykeyidentifiers)

# supportedAuthorityKeyIdentifiers

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A list of authority key identifiers that correspond to relying party authorizers that are trusted by the document provider app.

## Declaration

```swift
var supportedAuthorityKeyIdentifiers: [Data]
```

<a id="Discussion"></a>

## Discussion

A relying party that’s authorized by an authority in this list of key identifiers can receive this document during a presentment.
