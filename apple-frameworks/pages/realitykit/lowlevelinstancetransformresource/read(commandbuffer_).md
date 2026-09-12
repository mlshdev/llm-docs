> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancetransformresource/read(commandbuffer:)](https://developer.apple.com/documentation/realitykit/lowlevelinstancetransformresource/read(commandbuffer:))

# read(commandBuffer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a Metal buffer containing the current transform data for GPU read operations.

## Declaration

```swift
final func read(commandBuffer: (any MTLCommandBuffer)?) -> any MTLBuffer
```

## Parameters

- `commandBuffer`: The command buffer that reads from this buffer, or `nil` to skip synchronization.

<a id="return-value"></a>

## Return Value

A `MTLBuffer` ready for GPU read operations.

<a id="discussion"></a>

## Discussion

The renderer waits for the provided command buffer to complete before discarding the buffer.

## See Also

### Reading transform data

- [read(\_:)](read%28__%29.md): Reads the current transform data synchronously on the CPU.
