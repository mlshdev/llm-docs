> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller)

# IdentityDocumentWebPresentmentController

**Framework:** IdentityDocumentServicesUI  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A controller that performs identity document requests originating from the web.

## Declaration

```swift
@MainActor final class IdentityDocumentWebPresentmentController
```

## Topics

### Initializers

- [init()](identitydocumentwebpresentmentcontroller/init%28%29.md): Initialize a web presentment controller.

### Instance Properties

- [delegate](identitydocumentwebpresentmentcontroller/delegate.md): A delegate that provides information for the controller to perform a web presentment.
- [presentationContextProvider](identitydocumentwebpresentmentcontroller/presentationcontextprovider.md): A delegate that provides a display context in which the system can present an authorization interface to the user.

### Instance Methods

- [performRequests(\_:origin:)](identitydocumentwebpresentmentcontroller/performrequests%28__origin_%29.md): Performs an identity document request.

## Relationships

### Conforms To

- [IdentityDocumentPresentmentControlling](identitydocumentpresentmentcontrolling.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing the web presentment flow into your browser

- [Implementing as an identity document provider](../identitydocumentservices/implenting-as-an-identity-document-provider.md): Add your app as an option for mobile document web presentment.
- [IdentityDocumentWebPresentmentControllerDelegate](identitydocumentwebpresentmentcontrollerdelegate.md): Defines a delegate that the system uses in conjunction with a web presentment controller.
- [IdentityDocumentPresentmentControllerPresentationContextProviding](identitydocumentpresentmentcontrollerpresentationcontextproviding.md): An interface the controller uses to receive a presentation context.
- [IdentityDocumentPresentationAnchor](identitydocumentpresentationanchor.md): The presentation anchor the system uses to present your app UI.
- [IdentityDocumentPresentmentControlling](identitydocumentpresentmentcontrolling.md): A closed protocol that indicates this object is a controller that the system uses for identity document presentment.
