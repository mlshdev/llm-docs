> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentpresentmentcontrolling](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentpresentmentcontrolling)

# IdentityDocumentPresentmentControlling

**Framework:** IdentityDocumentServicesUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A closed protocol that indicates this object is a controller that the system uses for identity document presentment.

## Declaration

```swift
@MainActor protocol IdentityDocumentPresentmentControlling
```

## Relationships

### Conforming Types

- [IdentityDocumentWebPresentmentController](identitydocumentwebpresentmentcontroller.md)

## See Also

### Implementing the web presentment flow into your browser

- [Implementing as an identity document provider](../identitydocumentservices/implenting-as-an-identity-document-provider.md): Add your app as an option for mobile document web presentment.
- [IdentityDocumentWebPresentmentController](identitydocumentwebpresentmentcontroller.md): A controller that performs identity document requests originating from the web.
- [IdentityDocumentWebPresentmentControllerDelegate](identitydocumentwebpresentmentcontrollerdelegate.md): Defines a delegate that the system uses in conjunction with a web presentment controller.
- [IdentityDocumentPresentmentControllerPresentationContextProviding](identitydocumentpresentmentcontrollerpresentationcontextproviding.md): An interface the controller uses to receive a presentation context.
- [IdentityDocumentPresentationAnchor](identitydocumentpresentationanchor.md): The presentation anchor the system uses to present your app UI.
