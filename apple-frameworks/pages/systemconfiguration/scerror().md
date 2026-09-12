> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scerror()](https://developer.apple.com/documentation/systemconfiguration/scerror())

# SCError() (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS · visionOS 1.0+

Returns an error or status code associated with the most recent function call.

## Declaration

```swift
func SCError() -> Int32
```

<a id="return-value"></a>

## Return Value

The most recent status or error code generated as the result of calling a function defined by the System Configuration framework. See [Status and Error Codes](1518026-status-and-error-codes.md) for descriptions of these codes.

## See Also

### Functions

- [SCCopyLastError()](sccopylasterror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCErrorString(\_:)](scerrorstring%28__%29.md): Returns a string describing the specified status code or error code.

# SCError (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS · visionOS 1.0+

Returns an error or status code associated with the most recent function call.

## Declaration

```objectivec
int SCError();
```

<a id="return-value"></a>

## Return Value

The most recent status or error code generated as the result of calling a function defined by the System Configuration framework. See [Status and Error Codes](1518026-status-and-error-codes.md) for descriptions of these codes.

## See Also

### Functions

- [SCCopyLastError](sccopylasterror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCErrorString](scerrorstring%28__%29.md): Returns a string describing the specified status code or error code.
