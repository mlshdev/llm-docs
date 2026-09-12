> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventerror-swift.struct/code](https://developer.apple.com/documentation/phase/phasesoundeventerror-swift.struct/code)

# PHASESoundEventError.Code (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify sound event errors.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [PHASESoundEventError.Code.apiMisuse](code/apimisuse.md): An error that indicates the app misconfigures data or calls the framework in unsupported succession.
- [PHASESoundEventError.Code.badData](code/baddata.md): An error that indicates a sound event contains invalid data.
- [PHASESoundEventError.Code.invalidInstance](code/invalidinstance.md): An error that indicates a sound event object is no longer valid.
- [PHASESoundEventError.Code.notFound](code/notfound.md): An error the framework throws when it fails to find a particular sound event.
- [PHASESoundEventError.Code.outOfMemory](code/outofmemory.md): An error the framework throws when a sound event depletes system memory.
- [PHASESoundEventError.Code.systemNotInitialized](code/systemnotinitialized.md): An error the framework throws when engine initialization interrupts sound event playback.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sound Event Errors

- [PHASESoundEventError](../phasesoundeventerror-swift.struct.md): A sound event error that PHASE reports.
- [PHASESoundEventErrorDomain](../phasesoundeventerrordomain.md): A unique error domain for sound events.

# PHASESoundEventError (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify sound event errors.

## Declaration

```objectivec
enum PHASESoundEventError : NSInteger;
```

## Topics

### Errors

- [PHASESoundEventErrorAPIMisuse](code/apimisuse.md): An error that indicates the app misconfigures data or calls the framework in unsupported succession.
- [PHASESoundEventErrorBadData](code/baddata.md): An error that indicates a sound event contains invalid data.
- [PHASESoundEventErrorInvalidInstance](code/invalidinstance.md): An error that indicates a sound event object is no longer valid.
- [PHASESoundEventErrorNotFound](code/notfound.md): An error the framework throws when it fails to find a particular sound event.
- [PHASESoundEventErrorOutOfMemory](code/outofmemory.md): An error the framework throws when a sound event depletes system memory.
- [PHASESoundEventErrorSystemNotInitialized](code/systemnotinitialized.md): An error the framework throws when engine initialization interrupts sound event playback.

## See Also

### Sound Event Errors

- [PHASESoundEventErrorDomain](../phasesoundeventerrordomain.md): A unique error domain for sound events.
