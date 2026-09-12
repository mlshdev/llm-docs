> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancedata/replace(using:)](https://developer.apple.com/documentation/realitykit/lowlevelinstancedata/replace(using:))

# replace(using:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves a Metal buffer that you can use to replace the per instance transform data on GPU using Metal.

## Declaration

```swift
final func replace(using commandBuffer: any MTLCommandBuffer) -> any MTLBuffer
```

<a id="discussion"></a>

## Discussion

The transform buffer’s contents are in an uninitialized state.

The caller supplies the MTLCommandBuffer that they intend to use for transform buffer modifications. RealityKit will wait for the MTLCommandBuffer to complete before utilizing the transform buffer for rendering.
