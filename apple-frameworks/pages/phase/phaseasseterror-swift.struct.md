> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasseterror-swift.struct](https://developer.apple.com/documentation/phase/phaseasseterror-swift.struct)

# PHASEAssetError

**Framework:** PHASE  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An asset error that PHASE reports.

## Declaration

```swift
struct PHASEAssetError
```

## Topics

### Creating an Error

- [PHASEAssetError.Code](phaseasseterror-swift.struct/code.md): Codes that identify framework asset errors.

### Identifying an Error Cause

- [alreadyExists](phaseasseterror-swift.struct/alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [badParameters](phaseasseterror-swift.struct/badparameters.md): An error that indicates an asset registry call contains invalid data.
- [failedToLoad](phaseasseterror-swift.struct/failedtoload.md): An error that indicates an asset failed to load.
- [generalError](phaseasseterror-swift.struct/generalerror.md): An error the asset registry throws when an unspecified problem occurs.
- [invalidEngineInstance](phaseasseterror-swift.struct/invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
- [memoryAllocation](phaseasseterror-swift.struct/memoryallocation.md): An error the framework throws when an asset depletes system memory.

### Type Properties

- [errorDomain](phaseasseterror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset Errors

- [PHASEAssetError.Code](phaseasseterror-swift.struct/code.md): Codes that identify framework asset errors.
- [PHASEAssetErrorDomain](phaseasseterrordomain.md): A unique error domain for PHASE assets.
