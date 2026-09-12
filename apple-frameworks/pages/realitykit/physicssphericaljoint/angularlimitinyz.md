> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssphericaljoint/angularlimitinyz](https://developer.apple.com/documentation/realitykit/physicssphericaljoint/angularlimitinyz)

# angularLimitInYZ

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A cone-shaped limit of rotational freedom.

## Declaration

```swift
var angularLimitInYZ: (Float, Float)?
```

<a id="discussion"></a>

## Discussion

The maximum value of rotation in radians from the y and z axes, or `nil` for unlimited.

This pair defines an elliptical cone limit around the x-axis of the pose on the first entity, `pin0`. If defined, the x-axis of the pose on the second entity (`pin1`) is limited to stay within this cone.
