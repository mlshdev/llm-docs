> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/rootmotiondidupdate/suppressesautomaticapplication](https://developer.apple.com/documentation/realitykit/animationevents/rootmotiondidupdate/suppressesautomaticapplication)

# suppressesAutomaticApplication

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that controls whether subscribing to the event suppresses automatic application of the root motion delta.

## Declaration

```swift
var suppressesAutomaticApplication: Bool { get nonmutating set }
```

<a id="discussion"></a>

## Discussion

The default value is `true` — while the event has subscribers, the system doesn’t apply the delta automatically and the subscriber takes over. Set to `false` to keep automatic application in place while still observing the event.

> **Note**

> This property only takes effect when subscribing through `scene.subscribe(to:on:)`. Changes made via `scene.publisher(for:on:)` aren’t written back to the engine.

## See Also

### Accessing root motion

- [rootMotionTransform](rootmotiontransform.md): The change in position and orientation since the previous frame.
