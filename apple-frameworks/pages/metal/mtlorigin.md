> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlorigin](https://developer.apple.com/documentation/metal/mtlorigin)

# MTLOrigin (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The coordinates for the front upper-left corner of a region.

## Declaration

```swift
struct MTLOrigin
```

## Topics

### Creating origin points

- [init()](mtlorigin/init%28%29.md): Initializes a new origin.
- [init(x:y:z:)](mtlorigin/init%28x_y_z_%29.md): Initializes a new origin with the specified coordinates.
- [MTLOriginMake(\_:\_:\_:)](mtloriginmake%28______%29.md): Returns a new origin with the specified coordinates.

### Getting and setting coordinate values

- [x](mtlorigin/x.md): The x coordinate of the origin.
- [y](mtlorigin/y.md): The y coordinate of the origin.
- [z](mtlorigin/z.md): The z coordinate of the origin.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.

# MTLOrigin (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The coordinates for the front upper-left corner of a region.

## Declaration

```objectivec
typedef struct { ... } MTLOrigin;
```

## Topics

### Creating origin points

- [MTLOriginMake](mtloriginmake%28______%29.md): Returns a new origin with the specified coordinates.

### Getting and setting coordinate values

- [x](mtlorigin/x.md): The x coordinate of the origin.
- [y](mtlorigin/y.md): The y coordinate of the origin.
- [z](mtlorigin/z.md): The z coordinate of the origin.

## See Also

### Indirect compute commands

- [MTLIndirectComputeCommand](mtlindirectcomputecommand.md): A compute command in an indirect command buffer.
- [MTLRegion](mtlregion.md): The bounds for a subset of an instance’s elements.
- [MTLSize](mtlsize.md): A type that represents one, two, or three dimensions of a type instance, such as an array or texture.
- [MTLStageInRegionIndirectArguments](mtlstageinregionindirectarguments.md): The data layout required for the arguments needed to specify the stage-in region.
- [MTLDispatchThreadgroupsIndirectArguments](mtldispatchthreadgroupsindirectarguments.md): The data layout required for arguments needed to specify the size of threadgroups.
