> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttrajectoriesrequest/trajectorylength](https://developer.apple.com/documentation/vision/vndetecttrajectoriesrequest/trajectorylength)

# trajectoryLength (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The number of points to detect before calculating a trajectory.

## Declaration

```swift
var trajectoryLength: Int { get }
```

## See Also

### Configuring the Request

- [targetFrameTime](targetframetime.md): The requested target frame time for processing trajectory detection.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.

# trajectoryLength (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The number of points to detect before calculating a trajectory.

## Declaration

```objectivec
@property (readonly) NSInteger trajectoryLength;
```

## See Also

### Configuring the Request

- [targetFrameTime](targetframetime.md): The requested target frame time for processing trajectory detection.
- [objectMinimumNormalizedRadius](objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.
