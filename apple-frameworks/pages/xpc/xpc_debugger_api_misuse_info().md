> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_debugger_api_misuse_info()](https://developer.apple.com/documentation/xpc/xpc_debugger_api_misuse_info())

# xpc_debugger_api_misuse_info() (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a string that describes the reason XPC aborts the calling process.

## Declaration

```swift
func xpc_debugger_api_misuse_info() -> UnsafePointer<CChar>!
```

<a id="return-value"></a>

## Return Value

A pointer to the human-readable string describing the reason the caller was aborted. If XPC was not responsible for the program’s termination, `NULL` will be returned.

<a id="Discussion"></a>

## Discussion

This function is only callable from within a debugger. It isn’t meant to be called by the program directly.

# xpc_debugger_api_misuse_info (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer to a string that describes the reason XPC aborts the calling process.

## Declaration

```objectivec
const char *xpc_debugger_api_misuse_info();
```

<a id="return-value"></a>

## Return Value

A pointer to the human-readable string describing the reason the caller was aborted. If XPC was not responsible for the program’s termination, `NULL` will be returned.

<a id="Discussion"></a>

## Discussion

This function is only callable from within a debugger. It isn’t meant to be called by the program directly.
