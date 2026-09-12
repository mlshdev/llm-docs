> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasseterror-swift.struct/memoryallocation](https://developer.apple.com/documentation/phase/phaseasseterror-swift.struct/memoryallocation)

# memoryAllocation

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error the framework throws when an asset depletes system memory.

## Declaration

```swift
static var memoryAllocation: PHASEAssetError.Code { get }
```

## See Also

### Identifying an Error Cause

- [alreadyExists](alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [badParameters](badparameters.md): An error that indicates an asset registry call contains invalid data.
- [failedToLoad](failedtoload.md): An error that indicates an asset failed to load.
- [generalError](generalerror.md): An error the asset registry throws when an unspecified problem occurs.
- [invalidEngineInstance](invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
