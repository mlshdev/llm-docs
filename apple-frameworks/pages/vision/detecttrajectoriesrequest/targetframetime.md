> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecttrajectoriesrequest/targetframetime](https://developer.apple.com/documentation/vision/detecttrajectoriesrequest/targetframetime)

# targetFrameTime

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The requested target frame time for processing trajectory detection.

## Declaration

```swift
final var targetFrameTime: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property value for real-time processing of frames, which requires execution within a specific amount of time. The request evaluates from frame to frame. If processing takes longer than the targeted time for the current frame, it attempts to decrease the overall time by reducing the accuracy (down to a set minimum) for the next frame. If a frame takes less time than the targeted time, the request increases the accuracy (up to a set maximum) of the next frame.

The default value is indefinite, which indicates that accuracy stays at the predefined maximum.

## See Also

### Configuring a request

- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
