> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perspectivecameracomponent/near](https://developer.apple.com/documentation/realitykit/perspectivecameracomponent/near)

# near

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The minimum distance in meters from the camera that the camera can see.

## Declaration

```swift
var near: Float
```

<a id="discussion"></a>

## Discussion

The value defaults to `1.0` centimeter. Use a value greater than `0.0` and less than the value of [far](far.md). The renderer clips any surface closer than the `near` point.

## See Also

### Setting focal points

- [far](far.md): The maximum distance in meters from the camera that the camera can see.
