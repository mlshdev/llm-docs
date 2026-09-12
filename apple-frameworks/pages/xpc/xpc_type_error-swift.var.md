> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_type_error-swift.var](https://developer.apple.com/documentation/xpc/xpc_type_error-swift.var)

# XPC_TYPE_ERROR

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

A type that represents an error object.

## Declaration

```swift
var XPC_TYPE_ERROR: xpc_type_t { get }
```

<a id="Discussion"></a>

## Discussion

Errors in XPC are dictionaries, but [xpc_get_type(\_:)](xpc_get_type%28__%29.md) will return this type when given an error object. You cannot create an error object directly; XPC will only give them to handlers. These error objects have pointer values that are constant across the lifetime of your process and can be safely compared.

These constants are enumerated in the header for the connection object. Error dictionaries may reserve keys so that they can be queried to obtain more detailed information about the error. Currently, the only reserved key is [XPC_ERROR_KEY_DESCRIPTION](xpc_error_key_description-swift.var.md).

## See Also

### Errors

- [XPCRichError](xpcricherror.md): An error that contains a description and indicates if you can retry the operation that caused the error.
- [XPC_TYPE_RICH_ERROR](xpc_type_rich_error-swift.var.md): A type that represents a rich error object.
- [XPC_ERROR_KEY_DESCRIPTION](xpc_error_key_description-swift.var.md): A key for querying an error dictionary to retrieve a string with a human-readable description of the error.
- [XPC_ERROR_PEER_CODE_SIGNING_REQUIREMENT](xpc_error_peer_code_signing_requirement-swift.var.md)
