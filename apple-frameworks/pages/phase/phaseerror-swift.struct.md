> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseerror-swift.struct](https://developer.apple.com/documentation/phase/phaseerror-swift.struct)

# PHASEError

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that PHASE reports.

## Declaration

```swift
struct PHASEError
```

## Topics

### Identifying an Error Cause

- [initializeFailed](phaseerror-swift.struct/initializefailed.md): An error that indicates the engine failed to initialize.
- [invalidObject](phaseerror-swift.struct/invalidobject.md): An error that indicates an object is invalid in a specific context.

### Creating an Error

- [PHASEError.Code](phaseerror-swift.struct/code.md): Codes that identify errors in PHASE.

### Type Properties

- [errorDomain](phaseerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Framework Errors

- [PHASEError.Code](phaseerror-swift.struct/code.md): Codes that identify errors in PHASE.
- [PHASEErrorDomain](phaseerrordomain.md): A unique error domain for the framework.
