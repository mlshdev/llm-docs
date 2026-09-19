> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safetykit/saerror/code/notallowed

# SAError.Code.notAllowed (Swift)

**Framework:** SafetyKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The system restricts the feature on this iPhone at the current time.

## Declaration

```swift
case notAllowed
```

## See Also

### Determining the error type

- [SAError.Code.invalidArgument](invalidargument.md): The passed argument is invalid.
- [SAError.Code.notAuthorized](notauthorized.md): The app isn’t authorized to perform the requested operation.
- [SAError.Code.operationFailed](operationfailed.md): The requested operation failed; retrying may succeed.

# SAErrorNotAllowed (Objective-C)

**Framework:** SafetyKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The system restricts the feature on this iPhone at the current time.

## Declaration

```objectivec
SAErrorNotAllowed
```

## See Also

### Determining the error type

- [SAErrorInvalidArgument](invalidargument.md): The passed argument is invalid.
- [SAErrorNotAuthorized](notauthorized.md): The app isn’t authorized to perform the requested operation.
- [SAErrorOperationFailed](operationfailed.md): The requested operation failed; retrying may succeed.
