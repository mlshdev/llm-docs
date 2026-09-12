> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentpresentmentcontrollerpresentationcontextproviding](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentpresentmentcontrollerpresentationcontextproviding)

# IdentityDocumentPresentmentControllerPresentationContextProviding

**Framework:** IdentityDocumentServicesUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

An interface the controller uses to receive a presentation context.

## Declaration

```swift
@MainActor protocol IdentityDocumentPresentmentControllerPresentationContextProviding : AnyObject
```

## Topics

### Instance Methods

- [presentationAnchorForPresentmentController(\_:)](identitydocumentpresentmentcontrollerpresentationcontextproviding/presentationanchorforpresentmentcontroller%28__%29-26ohw.md): Indicates the presentation anchor within which the system presents the controller’s UI to the presentment controller.
- [presentationAnchorForPresentmentController(\_:)](identitydocumentpresentmentcontrollerpresentationcontextproviding/presentationanchorforpresentmentcontroller%28__%29-58gth.md): Indicates the presentation anchor within which the system presents the controller’s UI to the presentment controller.

## See Also

### Implementing the web presentment flow into your browser

- [Implementing as an identity document provider](../identitydocumentservices/implenting-as-an-identity-document-provider.md): Add your app as an option for mobile document web presentment.
- [IdentityDocumentWebPresentmentController](identitydocumentwebpresentmentcontroller.md): A controller that performs identity document requests originating from the web.
- [IdentityDocumentWebPresentmentControllerDelegate](identitydocumentwebpresentmentcontrollerdelegate.md): Defines a delegate that the system uses in conjunction with a web presentment controller.
- [IdentityDocumentPresentationAnchor](identitydocumentpresentationanchor.md): The presentation anchor the system uses to present your app UI.
- [IdentityDocumentPresentmentControlling](identitydocumentpresentmentcontrolling.md): A closed protocol that indicates this object is a controller that the system uses for identity document presentment.
