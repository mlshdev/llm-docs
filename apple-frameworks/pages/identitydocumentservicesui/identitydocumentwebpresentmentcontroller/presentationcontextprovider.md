> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller/presentationcontextprovider](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller/presentationcontextprovider)

# presentationContextProvider

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A delegate that provides a display context in which the system can present an authorization interface to the user.

## Declaration

```swift
@MainActor weak final var presentationContextProvider: (any IdentityDocumentPresentmentControllerPresentationContextProviding)?
```
