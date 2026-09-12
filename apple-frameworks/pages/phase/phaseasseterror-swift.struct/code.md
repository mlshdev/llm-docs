> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseasseterror-swift.struct/code](https://developer.apple.com/documentation/phase/phaseasseterror-swift.struct/code)

# PHASEAssetError.Code (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify framework asset errors.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [PHASEAssetError.Code.alreadyExists](code/alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [PHASEAssetError.Code.badParameters](code/badparameters.md): An error that indicates an asset registry call contains invalid data.
- [PHASEAssetError.Code.failedToLoad](code/failedtoload.md): An error that indicates an asset failed to load.
- [PHASEAssetError.Code.generalError](code/generalerror.md): An error the asset registry throws when an unspecified problem occurs.
- [PHASEAssetError.Code.invalidEngineInstance](code/invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
- [PHASEAssetError.Code.memoryAllocation](code/memoryallocation.md): An error the framework throws when an asset depletes system memory.

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

### Asset Errors

- [PHASEAssetError](../phaseasseterror-swift.struct.md): An asset error that PHASE reports.
- [PHASEAssetErrorDomain](../phaseasseterrordomain.md): A unique error domain for PHASE assets.

# PHASEAssetError (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Codes that identify framework asset errors.

## Declaration

```objectivec
enum PHASEAssetError : NSInteger;
```

## Topics

### Errors

- [PHASEAssetErrorAlreadyExists](code/alreadyexists.md): An error the asset registry throws when the app registers an asset twice by the same name.
- [PHASEAssetErrorBadParameters](code/badparameters.md): An error that indicates an asset registry call contains invalid data.
- [PHASEAssetErrorFailedToLoad](code/failedtoload.md): An error that indicates an asset failed to load.
- [PHASEAssetErrorGeneralError](code/generalerror.md): An error the asset registry throws when an unspecified problem occurs.
- [PHASEAssetErrorInvalidEngineInstance](code/invalidengineinstance.md): An error that indicates an asset registry call references an invalid engine.
- [PHASEAssetErrorMemoryAllocation](code/memoryallocation.md): An error the framework throws when an asset depletes system memory.

## See Also

### Asset Errors

- [PHASEAssetErrorDomain](../phaseasseterrordomain.md): A unique error domain for PHASE assets.
