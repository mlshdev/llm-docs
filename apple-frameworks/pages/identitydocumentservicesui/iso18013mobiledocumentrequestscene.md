> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/iso18013mobiledocumentrequestscene](https://developer.apple.com/documentation/identitydocumentservicesui/iso18013mobiledocumentrequestscene)

# ISO18013MobileDocumentRequestScene

**Framework:** IdentityDocumentServicesUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

## Declaration

```swift
@MainActor @preconcurrency struct ISO18013MobileDocumentRequestScene<Content> where Content : Sendable, Content : View
```

## Topics

### Initializers

- [init(content:)](iso18013mobiledocumentrequestscene/init%28content_%29.md): Initialize an ISO 18013 mobile document raw request scene.

## Relationships

### Conforms To

- [AppExtensionScene](../extensionkit/appextensionscene.md)
- [IdentityDocumentRequestScene](identitydocumentrequestscene.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Building identity document provider authorization UI

- [IdentityDocumentProvider](identitydocumentprovider.md): An app extension that provides an identity document.
- [IdentityDocumentRequestScene](identitydocumentrequestscene.md): A scene that indicates support for a specific document request type.
- [ISO18013MobileDocumentRequestContext](iso18013mobiledocumentrequestcontext.md): An object that contains details about the ISO 18013 mobile document request.
- [IdentityDocumentRequestSceneBuilder](identitydocumentrequestscenebuilder.md): A result builder that combines one or more `IdentityDocumentRequestScene`s into a single scene.
