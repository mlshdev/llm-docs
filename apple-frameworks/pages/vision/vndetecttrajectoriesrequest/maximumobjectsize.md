> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttrajectoriesrequest/maximumobjectsize](https://developer.apple.com/documentation/vision/vndetecttrajectoriesrequest/maximumobjectsize)

# maximumObjectSize (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The maximum radius of the tracked shape’s bounding circle.

> Use [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md) instead.

## Declaration

```swift
var maximumObjectSize: Float { get set }
```

## Mentioned In

- [Identifying Trajectories in Video](../identifying-trajectories-in-video.md)

<a id="Discussion"></a>

## Discussion

Set the maximum size to filter out unwanted trajectories from larger objects moving through the scene. The default value is 1.0, which means to apply no filtering.

Changing this property value from frame to frame can produce erratic trajectories because objects either disappear or are added to the tracking based on this filtering.

Specify the size in normalized (0.0 to 1.0) coordinates.

## See Also

### Configuring the Request

- [targetFrameTime](targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.

# maximumObjectSize (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The maximum radius of the tracked shape’s bounding circle.

> Use [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) float maximumObjectSize;
```

## Mentioned In

- [Identifying Trajectories in Video](../identifying-trajectories-in-video.md)

<a id="Discussion"></a>

## Discussion

Set the maximum size to filter out unwanted trajectories from larger objects moving through the scene. The default value is 1.0, which means to apply no filtering.

Changing this property value from frame to frame can produce erratic trajectories because objects either disappear or are added to the tracking based on this filtering.

Specify the size in normalized (0.0 to 1.0) coordinates.

## See Also

### Configuring the Request

- [targetFrameTime](targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
