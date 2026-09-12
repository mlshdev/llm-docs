> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttrajectoriesrequest/targetframetime](https://developer.apple.com/documentation/vision/vndetecttrajectoriesrequest/targetframetime)

# targetFrameTime (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The requested target frame time for processing trajectory detection.

## Declaration

```swift
var targetFrameTime: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property value for real-time processing of frames, which requires execution within a specific amount of time. The request evaluates from frame-to-frame. If processing takes longer than the targeted time for the current frame, it attempts to decrease the overall time by reducing the accuracy (down to a set minimum) for the next frame. If a frame takes less time than the targeted time, the request increases the accuracy (up to a set maximum) of the next frame.

The default value is [indefinite](../../coremedia/cmtime/indefinite.md), which indicates that accuracy stays at the predefined maximum.

## See Also

### Configuring the Request

- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.

# targetFrameTime (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The requested target frame time for processing trajectory detection.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CMTime targetFrameTime;
```

<a id="Discussion"></a>

## Discussion

Use this property value for real-time processing of frames, which requires execution within a specific amount of time. The request evaluates from frame-to-frame. If processing takes longer than the targeted time for the current frame, it attempts to decrease the overall time by reducing the accuracy (down to a set minimum) for the next frame. If a frame takes less time than the targeted time, the request increases the accuracy (up to a set maximum) of the next frame.

The default value is [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md), which indicates that accuracy stays at the predefined maximum.

## See Also

### Configuring the Request

- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.
