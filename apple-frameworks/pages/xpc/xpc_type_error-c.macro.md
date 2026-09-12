> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_type_error-c.macro](https://developer.apple.com/documentation/xpc/xpc_type_error-c.macro)

# XPC_TYPE_ERROR

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents an error object.

## Declaration

```objectivec
#define XPC_TYPE_ERROR
```

<a id="Discussion"></a>

## Discussion

Errors in XPC are dictionaries, but [xpc_get_type](xpc_get_type%28__%29.md) will return this type when given an error object. You cannot create an error object directly; XPC will only give them to handlers. These error objects have pointer values that are constant across the lifetime of your process and can be safely compared.

These constants are enumerated in the header for the connection object. Error dictionaries may reserve keys so that they can be queried to obtain more detailed information about the error. Currently, the only reserved key is [XPC_ERROR_KEY_DESCRIPTION](xpc_error_key_description-swift.var.md).

## See Also

### Errors

- [XPC_ERROR_KEY_DESCRIPTION](xpc_error_key_description-c.macro.md): A key for querying an error dictionary to retrieve a string with a human-readable description of the error.
