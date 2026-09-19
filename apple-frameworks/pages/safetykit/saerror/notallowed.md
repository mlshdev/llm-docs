> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/safetykit/saerror/notallowed

# notAllowed

**Framework:** SafetyKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

The system currently restricts the feature on this device.

## Declaration

```swift
static var notAllowed: SAError.Code { get }
```

## See Also

### Identifying an error cause

- [SAError.Code](code.md): Codes for identifying errors in SafetyKit.
- [SAErrorDomain](../saerrordomain.md): The domain for error objects that SafetyKit produces.
- [invalidArgument](invalidargument.md): The method received an argument that it can’t validate.
- [notAuthorized](notauthorized.md): The system denies the app from performing the requested operation.
- [operationFailed](operationfailed.md): The requested operation failed; retrying may succeed.
