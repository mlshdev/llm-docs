> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safetykit/saerror](https://developer.apple.com/documentation/safetykit/saerror)

# SAError

**Framework:** SafetyKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · watchOS 10.1+

An error reported by SafetyKit.

## Declaration

```swift
struct SAError
```

## Topics

### Inspecting error information

- [errorDomain](saerror/errordomain.md)

### Identifying an error cause

- [SAError.Code](saerror/code.md): Codes for identifying errors in SafetyKit.
- [SAErrorDomain](saerrordomain.md): The domain for error objects that SafetyKit produces.
- [invalidArgument](saerror/invalidargument.md): The method received an argument that it can’t validate.
- [notAllowed](saerror/notallowed.md): The system currently restricts the feature on this device.
- [notAuthorized](saerror/notauthorized.md): The system denies the app from performing the requested operation.
- [operationFailed](saerror/operationfailed.md): The requested operation failed; retrying may succeed.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [SAErrorDomain](saerrordomain.md): The domain for error objects that SafetyKit produces.
- [SAError.Code](saerror/code.md): Codes for identifying errors in SafetyKit.
