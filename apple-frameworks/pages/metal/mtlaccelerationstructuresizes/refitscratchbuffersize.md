> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuresizes/refitscratchbuffersize](https://developer.apple.com/documentation/metal/mtlaccelerationstructuresizes/refitscratchbuffersize)

# refitScratchBufferSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

## Declaration

```swift
var refitScratchBufferSize: Int
```

<a id="discussion"></a>

## Discussion

This value can be zero, which indicates that refitting the acceleration structure doesn’t require a scratch buffer.

## See Also

### Retrieving the sizes

- [accelerationStructureSize](accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [buildScratchBufferSize](buildscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.

# refitScratchBufferSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

## Declaration

```objectivec
NSUInteger refitScratchBufferSize;
```

<a id="discussion"></a>

## Discussion

This value can be zero, which indicates that refitting the acceleration structure doesn’t require a scratch buffer.

## See Also

### Retrieving the sizes

- [accelerationStructureSize](accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [buildScratchBufferSize](buildscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.
