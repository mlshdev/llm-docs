> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentrequestscenebuilder](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentrequestscenebuilder)

# IdentityDocumentRequestSceneBuilder

**Framework:** IdentityDocumentServicesUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A result builder that combines one or more `IdentityDocumentRequestScene`s into a single scene.

## Declaration

```swift
@MainActor @resultBuilder struct IdentityDocumentRequestSceneBuilder
```

## Topics

### Type Methods

- [buildBlock(\_:)](identitydocumentrequestscenebuilder/buildblock%28__%29.md): A result builder that combines one or more identity document request scene\`s into a single scene.
- [buildBlock(\_:\_:)](identitydocumentrequestscenebuilder/buildblock%28____%29.md): A result builder that combines one or more identity document request scene\`s into a single scene.
- [buildLimitedAvailability(\_:)](identitydocumentrequestscenebuilder/buildlimitedavailability%28__%29.md)
- [buildOptional(\_:)](identitydocumentrequestscenebuilder/buildoptional%28__%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Building identity document provider authorization UI

- [IdentityDocumentProvider](identitydocumentprovider.md): An app extension that provides an identity document.
- [IdentityDocumentRequestScene](identitydocumentrequestscene.md): A scene that indicates support for a specific document request type.
- [ISO18013MobileDocumentRequestScene](iso18013mobiledocumentrequestscene.md)
- [ISO18013MobileDocumentRequestContext](iso18013mobiledocumentrequestcontext.md): An object that contains details about the ISO 18013 mobile document request.
