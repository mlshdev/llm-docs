> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentprovider](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentprovider)

# IdentityDocumentProvider

**Framework:** IdentityDocumentServicesUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

An app extension that provides an identity document.

## Declaration

```swift
@MainActor protocol IdentityDocumentProvider : AppExtension
```

<a id="overview"></a>

## Overview

Your extension indicates which request types it supports through the provided `IdentityDocumentRequestScene` concrete types. Based on the request types used by the requesting party, the system presents the UI provided through your app extension to the user when they select your app to respond to a presentment request.

## Topics

### Associated Types

- [Body](identitydocumentprovider/body-swift.associatedtype.md): The type for this provider’s body.

### Instance Properties

- [body](identitydocumentprovider/body-swift.property.md): A body containing an identity document scene for each request type the app supports.

### Instance Methods

- [performRegistrationUpdates()](identitydocumentprovider/performregistrationupdates%28%29.md): A function that allows the current app to perform updates to document registrations to ensure consistency with documents stored in the app.

## Relationships

### Inherits From

- [AppExtension](../extensionfoundation/appextension.md)

## See Also

### Building identity document provider authorization UI

- [IdentityDocumentRequestScene](identitydocumentrequestscene.md): A scene that indicates support for a specific document request type.
- [ISO18013MobileDocumentRequestScene](iso18013mobiledocumentrequestscene.md)
- [ISO18013MobileDocumentRequestContext](iso18013mobiledocumentrequestcontext.md): An object that contains details about the ISO 18013 mobile document request.
- [IdentityDocumentRequestSceneBuilder](identitydocumentrequestscenebuilder.md): A result builder that combines one or more `IdentityDocumentRequestScene`s into a single scene.
