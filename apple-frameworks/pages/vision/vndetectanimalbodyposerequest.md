> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectanimalbodyposerequest](https://developer.apple.com/documentation/vision/vndetectanimalbodyposerequest)

# VNDetectAnimalBodyPoseRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that detects an animal body pose.

## Declaration

```swift
class VNDetectAnimalBodyPoseRequest
```

## Topics

### Determining Supported Joints

- [supportedJointNames](vndetectanimalbodyposerequest/supportedjointnames.md): Retrieves the joint names the request supports.
- [supportedJointsGroupNames](vndetectanimalbodyposerequest/supportedjointsgroupnames.md): Retrieves the joint group names the request supports.

### Accessing the Results

- [results](vndetectanimalbodyposerequest/results.md): The animal body pose the request observes.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Animal body pose detection

- [Detecting animal body poses with Vision](detecting-animal-body-poses-with-vision.md): Draw the skeleton of an animal by using Vision’s capability to detect animal body poses.
- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md): An observation that provides the animal body points the analysis recognizes.

# VNDetectAnimalBodyPoseRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A request that detects an animal body pose.

## Declaration

```objectivec
@interface VNDetectAnimalBodyPoseRequest : VNImageBasedRequest
```

## Topics

### Determining Supported Joints

- [supportedJointNamesAndReturnError:](vndetectanimalbodyposerequest/supportedjointnamesandreturnerror_.md): Retrieves the joint names the request supports.
- [supportedJointsGroupNamesAndReturnError:](vndetectanimalbodyposerequest/supportedjointsgroupnamesandreturnerror_.md): Retrieves the joint group names the request supports.

### Accessing the Results

- [results](vndetectanimalbodyposerequest/results.md): The animal body pose the request observes.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

## See Also

### Animal body pose detection

- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md): An observation that provides the animal body points the analysis recognizes.
