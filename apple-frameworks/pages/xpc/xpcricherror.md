> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcricherror](https://developer.apple.com/documentation/xpc/xpcricherror)

# XPCRichError

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An error that contains a description and indicates if you can retry the operation that caused the error.

## Declaration

```swift
struct XPCRichError
```

## Topics

### Error properties

- [canRetry](xpcricherror/canretry.md): A Boolean that indicates whether you can retry the operation that caused the error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [XPC_TYPE_RICH_ERROR](xpc_type_rich_error-swift.var.md): A type that represents a rich error object.
- [XPC_TYPE_ERROR](xpc_type_error-swift.var.md): A type that represents an error object.
- [XPC_ERROR_KEY_DESCRIPTION](xpc_error_key_description-swift.var.md): A key for querying an error dictionary to retrieve a string with a human-readable description of the error.
- [XPC_ERROR_PEER_CODE_SIGNING_REQUIREMENT](xpc_error_peer_code_signing_requirement-swift.var.md)
