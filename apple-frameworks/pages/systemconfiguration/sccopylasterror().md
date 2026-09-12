> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/sccopylasterror()](https://developer.apple.com/documentation/systemconfiguration/sccopylasterror())

# SCCopyLastError() (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+

Returns an error or status code associated with the most recent function call.

## Declaration

```swift
func SCCopyLastError() -> CFError
```

<a id="return-value"></a>

## Return Value

The most recent status or error code generated as the result of calling a function defined by the System Configuration framework. The code is represented by a Core Foundation `CFErrorRef` opaque type.

<a id="Discussion"></a>

## Discussion

Call the [CFErrorGetCode(\_:)](../corefoundation/cferrorgetcode%28__%29.md) function on the returned object to get the underlying error-code integer. See [Status and Error Codes](1518026-status-and-error-codes.md) for descriptions of these codes. For more on `CFErrorRef` objects, see [CFError](../corefoundation/cferror.md).

## See Also

### Functions

- [SCError()](scerror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCErrorString(\_:)](scerrorstring%28__%29.md): Returns a string describing the specified status code or error code.

# SCCopyLastError (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+

Returns an error or status code associated with the most recent function call.

## Declaration

```objectivec
CFErrorRefSCCopyLastError();
```

<a id="return-value"></a>

## Return Value

The most recent status or error code generated as the result of calling a function defined by the System Configuration framework. The code is represented by a Core Foundation `CFErrorRef` opaque type.

<a id="Discussion"></a>

## Discussion

Call the [CFErrorGetCode](../corefoundation/cferrorgetcode%28__%29.md) function on the returned object to get the underlying error-code integer. See [Status and Error Codes](1518026-status-and-error-codes.md) for descriptions of these codes. For more on `CFErrorRef` objects, see [CFErrorRef](../corefoundation/cferror.md).

## See Also

### Functions

- [SCError](scerror%28%29.md): Returns an error or status code associated with the most recent function call.
- [SCErrorString](scerrorstring%28__%29.md): Returns a string describing the specified status code or error code.
