> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecttrajectoriesrequest](https://developer.apple.com/documentation/vision/vndetecttrajectoriesrequest)

# VNDetectTrajectoriesRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects the trajectories of shapes moving along a parabolic path.

## Declaration

```swift
class VNDetectTrajectoriesRequest
```

## Mentioned In

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md)

<a id="overview"></a>

## Overview

After the request detects a trajectory, it produces an observation that contains the shape’s detected points and an equation describing the parabola.

## Topics

### Creating a Request

- [init(frameAnalysisSpacing:trajectoryLength:completionHandler:)](vndetecttrajectoriesrequest/init%28frameanalysisspacing_trajectorylength_completionhandler_%29.md): Creates a new request to detect trajectories.

### Configuring the Request

- [targetFrameTime](vndetecttrajectoriesrequest/targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](vndetecttrajectoriesrequest/trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](vndetecttrajectoriesrequest/objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](vndetecttrajectoriesrequest/objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](vndetecttrajectoriesrequest/minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](vndetecttrajectoriesrequest/maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.

### Inspecting the Results

- [results](vndetecttrajectoriesrequest/results.md): The array of detected trajectory observations.
- [VNTrajectoryObservation](vntrajectoryobservation.md): An observation that describes a detected trajectory.

### Identifying Request Revisions

- [VNDetectTrajectoriesRequestRevision1](vndetecttrajectoriesrequestrevision1.md): A constant for specifying revision 1 of the trajectories detection request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Trajectory detection

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md): Gain new insights into your video data by using Vision to detect trajectories.
- [Detecting moving objects in a video](detecting-moving-objects-in-a-video.md): Identify the trajectory of a thrown object by using Vision.

# VNDetectTrajectoriesRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A request that detects the trajectories of shapes moving along a parabolic path.

## Declaration

```objectivec
@interface VNDetectTrajectoriesRequest : VNStatefulRequest
```

## Mentioned In

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md)

<a id="overview"></a>

## Overview

After the request detects a trajectory, it produces an observation that contains the shape’s detected points and an equation describing the parabola.

## Topics

### Creating a Request

- [initWithFrameAnalysisSpacing:trajectoryLength:completionHandler:](vndetecttrajectoriesrequest/init%28frameanalysisspacing_trajectorylength_completionhandler_%29.md): Creates a new request to detect trajectories.

### Configuring the Request

- [targetFrameTime](vndetecttrajectoriesrequest/targetframetime.md): The requested target frame time for processing trajectory detection.
- [trajectoryLength](vndetecttrajectoriesrequest/trajectorylength.md): The number of points to detect before calculating a trajectory.
- [objectMinimumNormalizedRadius](vndetecttrajectoriesrequest/objectminimumnormalizedradius.md): The minimum radius of the bounding circle of the object to track.
- [objectMaximumNormalizedRadius](vndetecttrajectoriesrequest/objectmaximumnormalizedradius.md): The maximum radius of the bounding circle of the object to track.
- [minimumObjectSize](vndetecttrajectoriesrequest/minimumobjectsize.md): Deprecated. The minimum radius of the tracked shape’s bounding circle.
- [maximumObjectSize](vndetecttrajectoriesrequest/maximumobjectsize.md): Deprecated. The maximum radius of the tracked shape’s bounding circle.

### Inspecting the Results

- [results](vndetecttrajectoriesrequest/results.md): The array of detected trajectory observations.
- [VNTrajectoryObservation](vntrajectoryobservation.md): An observation that describes a detected trajectory.

### Identifying Request Revisions

- [VNDetectTrajectoriesRequestRevision1](vndetecttrajectoriesrequestrevision1.md): A constant for specifying revision 1 of the trajectories detection request.

## Relationships

### Inherits From

- [VNStatefulRequest](vnstatefulrequest.md)

## See Also

### Trajectory detection

- [Identifying Trajectories in Video](identifying-trajectories-in-video.md): Gain new insights into your video data by using Vision to detect trajectories.
- [Detecting moving objects in a video](detecting-moving-objects-in-a-video.md): Identify the trajectory of a thrown object by using Vision.
