> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phaseasseterror-swift.struct/generalerror

# generalError

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error the asset registry throws when an unspecified problem occurs.

## Declaration

```swift
static var generalError: PHASEAssetError.Code { get }
```

## See Also

### Identifying an Error Cause

- [alreadyExists](alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [badParameters](badparameters.md): An error that indicates an asset registry call contains invalid data.
- [failedToLoad](failedtoload.md): An error that indicates an asset failed to load.
- [invalidEngineInstance](invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
- [memoryAllocation](memoryallocation.md): An error the framework throws when an asset depletes system memory.
