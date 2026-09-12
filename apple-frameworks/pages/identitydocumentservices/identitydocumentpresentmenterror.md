> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentpresentmenterror](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentpresentmenterror)

# IdentityDocumentPresentmentError

**Framework:** IdentityDocumentServices  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

An error type that is thrown from the identity document web presentment controller.

## Declaration

```swift
struct IdentityDocumentPresentmentError
```

## Topics

### Instance Properties

- [code](identitydocumentpresentmenterror/code-swift.property.md): The code of the current error.
- [debugDescription](identitydocumentpresentmenterror/debugdescription.md): A debug description that provides additional context about the current error.

### Type Properties

- [cancelled](identitydocumentpresentmenterror/cancelled.md): An error that indicates that the current request has been cancelled.
- [invalidRequest](identitydocumentpresentmenterror/invalidrequest.md): An error that is thrown when an invalid request is provided.
- [notEntitled](identitydocumentpresentmenterror/notentitled.md): An error that indicates the caller is not entitled.
- [requestInProgress](identitydocumentpresentmenterror/requestinprogress.md): An error that indicates that there is currently a request in progress.
- [unknown](identitydocumentpresentmenterror/unknown.md): An error that indicates that the framework encountered an unknown problem.

### Enumerations

- [IdentityDocumentPresentmentError.Code](identitydocumentpresentmenterror/code-swift.enum.md): Specific error codes for identity document web presentment errors.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
