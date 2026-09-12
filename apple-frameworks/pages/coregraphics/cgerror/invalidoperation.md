> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgerror/invalidoperation](https://developer.apple.com/documentation/coregraphics/cgerror/invalidoperation)

# CGError.invalidOperation (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The requested operation is not valid for the parameters passed in, or the current system state.

## Declaration

```swift
case invalidOperation
```

## See Also

### Constants

- [CGError.cannotComplete](cannotcomplete.md): The requested operation is inappropriate for the parameters passed in, or the current system state.
- [CGError.failure](failure.md): A general failure occurred.
- [CGError.illegalArgument](illegalargument.md): One or more of the parameters passed to a function are invalid. Check for `NULL` pointers.
- [CGError.invalidConnection](invalidconnection.md): The parameter representing a connection to the window server is invalid.
- [CGError.invalidContext](invalidcontext.md): The `CPSProcessSerNum` or context identifier parameter is not valid.
- [CGError.noneAvailable](noneavailable.md): The requested operation could not be completed as the indicated resources were not found.
- [CGError.notImplemented](notimplemented.md): Return value from obsolete function stubs present for binary compatibility, but not typically called.
- [CGError.rangeCheck](rangecheck.md): A parameter passed in has a value that is inappropriate, or which does not map to a useful operation or value.
- [CGError.success](success.md): The requested operation was completed successfully.
- [CGError.typeCheck](typecheck.md): A data type or token was encountered that did not match the expected type or token.

# kCGErrorInvalidOperation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The requested operation is not valid for the parameters passed in, or the current system state.

## Declaration

```objectivec
kCGErrorInvalidOperation
```

## See Also

### Constants

- [kCGErrorCannotComplete](cannotcomplete.md): The requested operation is inappropriate for the parameters passed in, or the current system state.
- [kCGErrorFailure](failure.md): A general failure occurred.
- [kCGErrorIllegalArgument](illegalargument.md): One or more of the parameters passed to a function are invalid. Check for `NULL` pointers.
- [kCGErrorInvalidConnection](invalidconnection.md): The parameter representing a connection to the window server is invalid.
- [kCGErrorInvalidContext](invalidcontext.md): The `CPSProcessSerNum` or context identifier parameter is not valid.
- [kCGErrorNoneAvailable](noneavailable.md): The requested operation could not be completed as the indicated resources were not found.
- [kCGErrorNotImplemented](notimplemented.md): Return value from obsolete function stubs present for binary compatibility, but not typically called.
- [kCGErrorRangeCheck](rangecheck.md): A parameter passed in has a value that is inappropriate, or which does not map to a useful operation or value.
- [kCGErrorSuccess](success.md): The requested operation was completed successfully.
- [kCGErrorTypeCheck](typecheck.md): A data type or token was encountered that did not match the expected type or token.
