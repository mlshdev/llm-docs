> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancetransformresource/replace(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelinstancetransformresource/replace(commandbuffer:))

# replace(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer you populate on the GPU with the new transform data.

## Declaration

```swift
final func replace(commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `commandBuffer`: The command buffer that writes to this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU write operations.

<a id="discussion"></a>

## Discussion

Upon return the transform data is undefined; the caller is responsible for populating it with valid data. The renderer waits for the provided command buffer to complete before using the buffer for rendering.

## See Also

### Replacing transform data

- [replace(\_:)](replace%28__%29.md): Replaces all transform data synchronously on the CPU.
