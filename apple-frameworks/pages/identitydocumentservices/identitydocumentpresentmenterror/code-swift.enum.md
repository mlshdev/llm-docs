> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservices/identitydocumentpresentmenterror/code-swift.enum](https://developer.apple.com/documentation/identitydocumentservices/identitydocumentpresentmenterror/code-swift.enum)

# IdentityDocumentPresentmentError.Code

**Framework:** IdentityDocumentServices  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Specific error codes for identity document web presentment errors.

## Declaration

```swift
enum Code
```

## Topics

### Operators

- [~=(\_:\_:)](code-swift.enum/~=%28____%29.md): Pattern matching operator for matching error codes directly. This enables traditional switch/case pattern matching on error codes.

### Enumeration Cases

- [IdentityDocumentPresentmentError.Code.cancelled](code-swift.enum/cancelled.md): An error that indicates that the current request has been cancelled.
- [IdentityDocumentPresentmentError.Code.invalidRequest](code-swift.enum/invalidrequest.md): An error that is thrown when an invalid request is provided.
- [IdentityDocumentPresentmentError.Code.notEntitled](code-swift.enum/notentitled.md): An error that indicates the caller is not entitled.
- [IdentityDocumentPresentmentError.Code.requestInProgress](code-swift.enum/requestinprogress.md): An error that indicates that there is currently a request in progress.
- [IdentityDocumentPresentmentError.Code.unknown](code-swift.enum/unknown.md): An error that indicates that the framework encountered an unknown problem.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
