> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawable/presentonsceneupdate()](https://developer.apple.com/documentation/realitykit/textureresource/drawable/presentonsceneupdate())

# presentOnSceneUpdate()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS 1.0+

Presents the updated texture to the renderer atomically with the current scene update.

## Declaration

```swift
@MainActor func presentOnSceneUpdate()
```

<a id="discussion"></a>

## Discussion

Needs to be called after all commands in the command buffer have been executed (e.g. after `MTLCommandBuffer.waitUntilCompleted()`). When you call this method, the drawable will make the new texture content available to the renderer at the same time as all other entity component changes made during the same scene update.
