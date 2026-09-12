> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventerror-swift.struct](https://developer.apple.com/documentation/phase/phasesoundeventerror-swift.struct)

# PHASESoundEventError

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A sound event error that PHASE reports.

## Declaration

```swift
struct PHASESoundEventError
```

## Topics

### Creating an Error

- [PHASESoundEventError.Code](phasesoundeventerror-swift.struct/code.md): Codes that identify sound event errors.

### Identifying an Error Cause

- [apiMisuse](phasesoundeventerror-swift.struct/apimisuse.md): An error that indicates the app misconfigures data or calls the framework in unsupported succession.
- [badData](phasesoundeventerror-swift.struct/baddata.md): An error that indicates a sound event contains invalid data.
- [invalidInstance](phasesoundeventerror-swift.struct/invalidinstance.md): An error that indicates a sound event object is no longer valid.
- [notFound](phasesoundeventerror-swift.struct/notfound.md): An error the framework throws when it fails to find a particular sound event.
- [outOfMemory](phasesoundeventerror-swift.struct/outofmemory.md): An error the framework throws when a sound event depletes system memory.
- [systemNotInitialized](phasesoundeventerror-swift.struct/systemnotinitialized.md): An error the framework throws when engine initialization interrupts sound event playback.

### Type Properties

- [errorDomain](phasesoundeventerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sound Event Errors

- [PHASESoundEventError.Code](phasesoundeventerror-swift.struct/code.md): Codes that identify sound event errors.
- [PHASESoundEventErrorDomain](phasesoundeventerrordomain.md): A unique error domain for sound events.
