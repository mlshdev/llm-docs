> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbuffer/replace(using:)](https://developer.apple.com/documentation/realitykit/lowlevelbuffer/replace(using:))

# replace(using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieve an MTLBuffer that can be used to replace the contents of the buffer on GPU using Metal.

## Declaration

```swift
final func replace(using commandBuffer: any MTLCommandBuffer) -> any MTLBuffer
```

<a id="discussion"></a>

## Discussion

The buffer’s contents are in an uninitialized state.

The caller supplies the MTLCommandBuffer that they intend to use for buffer modifications. RealityKit will wait for the MTLCommandBuffer to complete before utilizing the buffer for rendering.
