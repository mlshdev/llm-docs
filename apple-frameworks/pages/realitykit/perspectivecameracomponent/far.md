> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/perspectivecameracomponent/far](https://developer.apple.com/documentation/realitykit/perspectivecameracomponent/far)

# far

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The maximum distance in meters from the camera that the camera can see.

## Declaration

```swift
var far: Float
```

<a id="discussion"></a>

## Discussion

The value defaults to `infinity`. Use a value greater than the value of [near](near.md). The renderer clips any surface beyond the `far` point.

## See Also

### Setting focal points

- [near](near.md): The minimum distance in meters from the camera that the camera can see.
