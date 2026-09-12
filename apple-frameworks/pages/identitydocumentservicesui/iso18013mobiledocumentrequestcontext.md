> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/iso18013mobiledocumentrequestcontext](https://developer.apple.com/documentation/identitydocumentservicesui/iso18013mobiledocumentrequestcontext)

# ISO18013MobileDocumentRequestContext

**Framework:** IdentityDocumentServicesUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An object that contains details about the ISO 18013 mobile document request.

## Declaration

```swift
struct ISO18013MobileDocumentRequestContext
```

<a id="Managing-the-context"></a>

### Managing the context

- [request](iso18013mobiledocumentrequestcontext/request.md)
- [requestingWebsiteOrigin](iso18013mobiledocumentrequestcontext/requestingwebsiteorigin.md)
- [sendResponse(\_:)](iso18013mobiledocumentrequestcontext/sendresponse%28__%29.md)
- [cancel()](iso18013mobiledocumentrequestcontext/cancel%28%29.md)

## Topics

### Instance Properties

- [request](iso18013mobiledocumentrequestcontext/request.md): The incoming ISO 18013 mobile document request.
- [requestingWebsiteOrigin](iso18013mobiledocumentrequestcontext/requestingwebsiteorigin.md): The origin of the requesting website, if present.

### Instance Methods

- [cancel()](iso18013mobiledocumentrequestcontext/cancel%28%29.md): Cancels the current request from the relying party.
- [sendResponse(\_:)](iso18013mobiledocumentrequestcontext/sendresponse%28__%29.md): Builds and sends an ISO 18013 mobile document response.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Building identity document provider authorization UI

- [IdentityDocumentProvider](identitydocumentprovider.md): An app extension that provides an identity document.
- [IdentityDocumentRequestScene](identitydocumentrequestscene.md): A scene that indicates support for a specific document request type.
- [ISO18013MobileDocumentRequestScene](iso18013mobiledocumentrequestscene.md)
- [IdentityDocumentRequestSceneBuilder](identitydocumentrequestscenebuilder.md): A result builder that combines one or more `IdentityDocumentRequestScene`s into a single scene.
