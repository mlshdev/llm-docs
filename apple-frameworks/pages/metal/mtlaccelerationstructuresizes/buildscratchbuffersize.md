> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlaccelerationstructuresizes/buildscratchbuffersize

# buildScratchBufferSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.

## Declaration

```swift
var buildScratchBufferSize: Int
```

## See Also

### Retrieving the sizes

- [accelerationStructureSize](accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [refitScratchBufferSize](refitscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

# buildScratchBufferSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.

## Declaration

```objectivec
NSUInteger buildScratchBufferSize;
```

## See Also

### Retrieving the sizes

- [accelerationStructureSize](accelerationstructuresize.md): The size of the acceleration structure, in bytes.
- [refitScratchBufferSize](refitscratchbuffersize.md): The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.
