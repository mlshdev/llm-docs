> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/waitforcommandbuffer(_:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/waitforcommandbuffer(_:))

# waitForCommandBuffer(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds a command buffer that the renderer should wait on before using resources for rendering.

## Declaration

```swift
final func waitForCommandBuffer(_ commandBuffer: any MTLCommandBuffer)
```

## Parameters

- `commandBuffer`: The command buffer whose completion the renderer waits for before using the updated GPU resources.

<a id="discussion"></a>

## Discussion

Instead of passing the same command buffer to every individual `replace(commandBuffer:)` call, you can call this method once and then pass `nil` to each GPU replace call on this context. The renderer waits for this command buffer to complete before using any of those resources for rendering.
