> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textcomponent/cornerradius](https://developer.apple.com/documentation/realitykit/textcomponent/cornerradius)

# cornerRadius

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The corner radius of the text mesh.

## Declaration

```swift
var cornerRadius: Float
```

<a id="discussion"></a>

## Discussion

The corner geometry is based on a circular shape and is not a continuous corner. Text components use the CoreGraphics coordinate space: The origin is at the upper left of the canvas and positive values extend down and to the right.
