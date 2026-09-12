> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivepreviewrenderer/commandbuffer](https://developer.apple.com/documentation/immersivemediasupport/immersivepreviewrenderer/commandbuffer)

# commandBuffer

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 27.0+ · visionOS 27.0+

The command buffer of the render.

## Declaration

```swift
@MainActor var commandBuffer: (any MTLCommandBuffer)? { get }
```

<a id="discussion"></a>

## Discussion

Use this to present a drawable and commit the command buffer to finalize the frame.
