> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsrevolutejoint/angularlimit](https://developer.apple.com/documentation/realitykit/physicsrevolutejoint/angularlimit)

# angularLimit

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A limit of the rotational freedom between the pins around the x-axis.

## Declaration

```swift
var angularLimit: ClosedRange<Float>?
```

<a id="discussion"></a>

## Discussion

If defined, this limits the rotation of `pin1` around the x-axis of `pin0`. There is no limit if this property is `nil`.
