> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentrequestscene](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentrequestscene)

# IdentityDocumentRequestScene

**Framework:** IdentityDocumentServicesUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A scene that indicates support for a specific document request type.

## Declaration

```swift
@MainActor @preconcurrency protocol IdentityDocumentRequestScene : AppExtensionScene
```

<a id="overview"></a>

## Overview

The framework provides concrete types for this protocol.

## Relationships

### Inherits From

- [AppExtensionScene](../extensionkit/appextensionscene.md)

### Conforming Types

- [ISO18013MobileDocumentRequestScene](iso18013mobiledocumentrequestscene.md)

## See Also

### Building identity document provider authorization UI

- [IdentityDocumentProvider](identitydocumentprovider.md): An app extension that provides an identity document.
- [ISO18013MobileDocumentRequestScene](iso18013mobiledocumentrequestscene.md)
- [ISO18013MobileDocumentRequestContext](iso18013mobiledocumentrequestcontext.md): An object that contains details about the ISO 18013 mobile document request.
- [IdentityDocumentRequestSceneBuilder](identitydocumentrequestscenebuilder.md): A result builder that combines one or more `IdentityDocumentRequestScene`s into a single scene.
