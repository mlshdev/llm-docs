> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructuresizes/init(accelerationstructuresize:buildscratchbuffersize:refitscratchbuffersize:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructuresizes/init(accelerationstructuresize:buildscratchbuffersize:refitscratchbuffersize:))

# init(accelerationStructureSize:buildScratchBufferSize:refitScratchBufferSize:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates an acceleration sizes instance with specific values.

## Declaration

```swift
init(accelerationStructureSize: Int, buildScratchBufferSize: Int, refitScratchBufferSize: Int)
```

## Parameters

- `accelerationStructureSize`: The size of the acceleration structure, in bytes.
- `buildScratchBufferSize`: The amount of scratch memory, in bytes, the GPU devices needs to build the acceleration structure.
- `refitScratchBufferSize`: The amount of scratch memory, in bytes, the GPU device needs to refit the acceleration structure.

## See Also

### Creating an acceleration size structure

- [init()](init%28%29.md): Creates an acceleration sizes instance with default values.
