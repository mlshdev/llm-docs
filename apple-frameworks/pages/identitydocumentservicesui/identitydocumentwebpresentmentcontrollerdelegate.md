> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontrollerdelegate](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontrollerdelegate)

# IdentityDocumentWebPresentmentControllerDelegate

**Framework:** IdentityDocumentServicesUI  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Defines a delegate that the system uses in conjunction with a web presentment controller.

## Declaration

```swift
@MainActor protocol IdentityDocumentWebPresentmentControllerDelegate : AnyObject
```

## Topics

### Instance Methods

- [rawRequestsForWebPresentmentController(\_:)](identitydocumentwebpresentmentcontrollerdelegate/rawrequestsforwebpresentmentcontroller%28__%29.md): A method that allows the calling app to provide the incoming raw web presentment requests to the web presentment controller.

## See Also

### Implementing the web presentment flow into your browser

- [Implementing as an identity document provider](../identitydocumentservices/implenting-as-an-identity-document-provider.md): Add your app as an option for mobile document web presentment.
- [IdentityDocumentWebPresentmentController](identitydocumentwebpresentmentcontroller.md): A controller that performs identity document requests originating from the web.
- [IdentityDocumentPresentmentControllerPresentationContextProviding](identitydocumentpresentmentcontrollerpresentationcontextproviding.md): An interface the controller uses to receive a presentation context.
- [IdentityDocumentPresentationAnchor](identitydocumentpresentationanchor.md): The presentation anchor the system uses to present your app UI.
- [IdentityDocumentPresentmentControlling](identitydocumentpresentmentcontrolling.md): A closed protocol that indicates this object is a controller that the system uses for identity document presentment.
