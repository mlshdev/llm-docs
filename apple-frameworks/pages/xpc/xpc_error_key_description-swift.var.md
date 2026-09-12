> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_error_key_description-swift.var](https://developer.apple.com/documentation/xpc/xpc_error_key_description-swift.var)

# XPC_ERROR_KEY_DESCRIPTION

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

A key for querying an error dictionary to retrieve a string with a human-readable description of the error.

## Declaration

```swift
nonisolated(unsafe) let XPC_ERROR_KEY_DESCRIPTION: UnsafePointer<CChar>
```

## See Also

### Errors

- [XPCRichError](xpcricherror.md): An error that contains a description and indicates if you can retry the operation that caused the error.
- [XPC_TYPE_RICH_ERROR](xpc_type_rich_error-swift.var.md): A type that represents a rich error object.
- [XPC_TYPE_ERROR](xpc_type_error-swift.var.md): A type that represents an error object.
- [XPC_ERROR_PEER_CODE_SIGNING_REQUIREMENT](xpc_error_peer_code_signing_requirement-swift.var.md)
