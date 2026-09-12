> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstageinregionindirectarguments](https://developer.apple.com/documentation/metal/mtlstageinregionindirectarguments)

# MTLStageInRegionIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The data layout required for the arguments needed to specify the stage-in region.

## Declaration

```swift
struct MTLStageInRegionIndirectArguments
```

## Topics

### Initializers

- [init()](mtlstageinregionindirectarguments/init%28%29.md)
- [init(stageInOrigin:stageInSize:)](mtlstageinregionindirectarguments/init%28stageinorigin_stageinsize_%29.md)

### Instance Properties

- [stageInOrigin](mtlstageinregionindirectarguments/stageinorigin.md): The location of the upper-left corner of the block.
- [stageInSize](mtlstageinregionindirectarguments/stageinsize.md): The size of the block.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.

# MTLStageInRegionIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for the arguments needed to specify the stage-in region.

## Declaration

```objectivec
typedef struct { ... } MTLStageInRegionIndirectArguments;
```

## Topics

### Instance Properties

- [stageInOrigin](mtlstageinregionindirectarguments/stageinorigin.md): The location of the upper-left corner of the block.
- [stageInSize](mtlstageinregionindirectarguments/stageinsize.md): The size of the block.

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLOrigin](mtlorigin.md): The coordinates for the front upper-left corner of a region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
