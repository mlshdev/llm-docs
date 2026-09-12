> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalbodyposeobservation](https://developer.apple.com/documentation/vision/vnanimalbodyposeobservation)

# VNAnimalBodyPoseObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that provides the animal body points the analysis recognizes.

## Declaration

```swift
class VNAnimalBodyPoseObservation
```

## Topics

### Accessing Points

- [availableJointNames](vnanimalbodyposeobservation/availablejointnames.md): The names of the available joints in the observation.
- [VNAnimalBodyPoseObservation.JointName](vnanimalbodyposeobservation/jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](vnanimalbodyposeobservation/availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservation.JointsGroupName](vnanimalbodyposeobservation/jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPoint(\_:)](vnanimalbodyposeobservation/recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPoints(\_:)](vnanimalbodyposeobservation/recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.

## Relationships

### Inherits From

- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Animal body pose detection

- [Detecting animal body poses with Vision](detecting-animal-body-poses-with-vision.md): Draw the skeleton of an animal by using Vision’s capability to detect animal body poses.
- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md): A request that detects an animal body pose.

# VNAnimalBodyPoseObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that provides the animal body points the analysis recognizes.

## Declaration

```objectivec
@interface VNAnimalBodyPoseObservation : VNRecognizedPointsObservation
```

## Topics

### Accessing Points

- [availableJointNames](vnanimalbodyposeobservation/availablejointnames.md): The names of the available joints in the observation.
- [VNAnimalBodyPoseObservationJointName](vnanimalbodyposeobservation/jointname.md): The joint names for an animal body pose.
- [availableJointGroupNames](vnanimalbodyposeobservation/availablejointgroupnames.md): The available joint group names in the observation.
- [VNAnimalBodyPoseObservationJointsGroupName](vnanimalbodyposeobservation/jointsgroupname.md): The joint group names for an animal body pose.
- [recognizedPointForJointName:error:](vnanimalbodyposeobservation/recognizedpoint%28__%29.md): Returns the point for a joint name the observation recognizes.
- [recognizedPointsForJointsGroupName:error:](vnanimalbodyposeobservation/recognizedpoints%28__%29.md): Returns the points for a joint group name the observation recognizes.

## Relationships

### Inherits From

- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md)

## See Also

### Animal body pose detection

- [VNDetectAnimalBodyPoseRequest](vndetectanimalbodyposerequest.md): A request that detects an animal body pose.
