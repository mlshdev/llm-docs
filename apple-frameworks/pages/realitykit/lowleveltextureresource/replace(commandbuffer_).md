> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltextureresource/replace(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowleveltextureresource/replace(commandbuffer:))

# replace(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal texture you populate on the GPU with the new contents of the texture resource.

## Declaration

```swift
final func replace(commandBuffer: (any MTLCommandBuffer)?) -> any MTLTexture
```

## Parameters

- `commandBuffer`: The command buffer that writes to this texture, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLTexture` ready for GPU write operations.

<a id="discussion"></a>

## Discussion

Upon return the texture’s contents are undefined; the caller is responsible for populating it with valid data. The renderer waits for the provided command buffer to complete before using the texture for rendering.

## See Also

### Reading and writing texture data

- [read(commandBuffer:)](read%28commandbuffer_%29.md): Returns a Metal texture containing the current contents of the texture resource for GPU read operations.
