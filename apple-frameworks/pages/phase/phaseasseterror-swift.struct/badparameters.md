> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasseterror-swift.struct/badparameters](https://developer.apple.com/documentation/phase/phaseasseterror-swift.struct/badparameters)

# badParameters

**Framework:** PHASE  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An error that indicates an asset registry call contains invalid data.

## Declaration

```swift
static var badParameters: PHASEAssetError.Code { get }
```

## See Also

### Identifying an Error Cause

- [alreadyExists](alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [failedToLoad](failedtoload.md): An error that indicates an asset failed to load.
- [generalError](generalerror.md): An error the asset registry throws when an unspecified problem occurs.
- [invalidEngineInstance](invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
- [memoryAllocation](memoryallocation.md): An error the framework throws when an asset depletes system memory.
