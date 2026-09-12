> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventerror-swift.struct/systemnotinitialized](https://developer.apple.com/documentation/phase/phasesoundeventerror-swift.struct/systemnotinitialized)

# systemNotInitialized

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error the framework throws when engine initialization interrupts sound event playback.

## Declaration

```swift
static var systemNotInitialized: PHASESoundEventError.Code { get }
```

## See Also

### Identifying an Error Cause

- [apiMisuse](apimisuse.md): An error that indicates the app misconfigures data or calls the framework in unsupported succession.
- [badData](baddata.md): An error that indicates a sound event contains invalid data.
- [invalidInstance](invalidinstance.md): An error that indicates a sound event object is no longer valid.
- [notFound](notfound.md): An error the framework throws when it fails to find a particular sound event.
- [outOfMemory](outofmemory.md): An error the framework throws when a sound event depletes system memory.
