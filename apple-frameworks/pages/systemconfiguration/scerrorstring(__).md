> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scerrorstring(_:)](https://developer.apple.com/documentation/systemconfiguration/scerrorstring(_:))

# SCErrorString(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS · visionOS 1.0+

Returns a string describing the specified status code or error code.

## Declaration

```swift
func SCErrorString(_ status: Int32) -> UnsafePointer<CChar>
```

## Parameters

- `status`: A status or error code described in [Status and Error Codes](1518026-status-and-error-codes.md). You typically get this code by calling [SCError()](scerror%28%29.md) or [SCCopyLastError()](sccopylasterror%28%29.md).

<a id="return-value"></a>

## Return Value

The message string associated with the status or error identified by `status`.

## See Also

### Functions

- [SCCopyLastError()](sccopylasterror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCError()](scerror%28%29.md): Returns an error or status code associated with the most recent function call.

# SCErrorString (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS · visionOS 1.0+

Returns a string describing the specified status code or error code.

## Declaration

```objectivec
const char *SCErrorString(int status);
```

## Parameters

- `status`: A status or error code described in [Status and Error Codes](1518026-status-and-error-codes.md). You typically get this code by calling [SCError](scerror%28%29.md) or [SCCopyLastError](sccopylasterror%28%29.md).

<a id="return-value"></a>

## Return Value

The message string associated with the status or error identified by `status`.

## See Also

### Functions

- [SCCopyLastError](sccopylasterror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCError](scerror%28%29.md): Returns an error or status code associated with the most recent function call.
