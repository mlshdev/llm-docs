> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationevents/rootmotiondidupdate/rootmotiontransform](https://developer.apple.com/documentation/realitykit/animationevents/rootmotiondidupdate/rootmotiontransform)

# rootMotionTransform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The change in position and orientation since the previous frame.

## Declaration

```swift
let rootMotionTransform: Transform
```

<a id="discussion"></a>

## Discussion

This value is the delta from the previous frame, not a cumulative transform.

## See Also

### Accessing root motion

- [suppressesAutomaticApplication](suppressesautomaticapplication.md): A Boolean value that controls whether subscribing to the event suppresses automatic application of the root motion delta.
