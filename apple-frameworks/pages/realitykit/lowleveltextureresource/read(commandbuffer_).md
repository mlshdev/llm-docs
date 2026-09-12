> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltextureresource/read(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowleveltextureresource/read(commandbuffer:))

# read(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal texture containing the current contents of the texture resource for GPU read operations.

## Declaration

```swift
final func read(commandBuffer: (any MTLCommandBuffer)?) -> any MTLTexture
```

## Parameters

- `commandBuffer`: The command buffer that reads from this texture, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLTexture` ready for GPU read operations.

<a id="discussion"></a>

## Discussion

The renderer waits for the provided command buffer to complete before discarding the texture.

## See Also

### Reading and writing texture data

- [replace(commandBuffer:)](replace%28commandbuffer_%29.md): Returns a Metal texture you populate on the GPU with the new contents of the texture resource.
