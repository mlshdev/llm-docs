> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelsortgroup/depthpass-swift.property](https://developer.apple.com/documentation/realitykit/modelsortgroup/depthpass-swift.property)

# depthPass

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A depth pass that controls when the renderer draws the depth of model entities in the group relative to their color.

## Declaration

```swift
var depthPass: ModelSortGroup.DepthPass? { get }
```

<a id="discussion"></a>

## Discussion

You can tell the renderer to draw the depth and color together by setting the value to `nil`.
