> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasesoundeventerror-swift.struct/baddata](https://developer.apple.com/documentation/phase/phasesoundeventerror-swift.struct/baddata)

# badData

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that indicates a sound event contains invalid data.

## Declaration

```swift
static var badData: PHASESoundEventError.Code { get }
```

## See Also

### Identifying an Error Cause

- [apiMisuse](apimisuse.md): An error that indicates the app misconfigures data or calls the framework in unsupported succession.
- [invalidInstance](invalidinstance.md): An error that indicates a sound event object is no longer valid.
- [notFound](notfound.md): An error the framework throws when it fails to find a particular sound event.
- [outOfMemory](outofmemory.md): An error the framework throws when a sound event depletes system memory.
- [systemNotInitialized](systemnotinitialized.md): An error the framework throws when engine initialization interrupts sound event playback.
