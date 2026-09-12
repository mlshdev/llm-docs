> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecttrajectoriesrequest/objectmaximumnormalizedradius](https://developer.apple.com/documentation/vision/detecttrajectoriesrequest/objectmaximumnormalizedradius)

# objectMaximumNormalizedRadius

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The maximum radius of the bounding circle of the object to track.

## Declaration

```swift
final var objectMaximumNormalizedRadius: Float { get set }
```

## See Also

### Configuring a request

- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [targetFrameTime](targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
