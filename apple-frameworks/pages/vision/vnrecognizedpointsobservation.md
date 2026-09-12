> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointsobservation](https://developer.apple.com/documentation/vision/vnrecognizedpointsobservation)

# VNRecognizedPointsObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that provides the points the analysis recognized.

## Declaration

```swift
class VNRecognizedPointsObservation
```

## Topics

### Inspecting the Observation

- [availableKeys](vnrecognizedpointsobservation/availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](vnrecognizedpointsobservation/availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPoint(forKey:)](vnrecognizedpointsobservation/recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.
- [recognizedPoints(forGroupKey:)](vnrecognizedpointsobservation/recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.

### Converting Points for Core ML

- [keypointsMultiArray()](vnrecognizedpointsobservation/keypointsmultiarray%28%29.md): Retrieves the grouping of normalized point coordinates and confidence scores in a format compatible with Core ML.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md)
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md)
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md)

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

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

# VNRecognizedPointsObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An observation that provides the points the analysis recognized.

## Declaration

```objectivec
@interface VNRecognizedPointsObservation : VNObservation
```

## Topics

### Inspecting the Observation

- [availableKeys](vnrecognizedpointsobservation/availablekeys.md): The available point keys in the observation.
- [availableGroupKeys](vnrecognizedpointsobservation/availablegroupkeys.md): The available point group keys in the observation.
- [recognizedPointForKey:error:](vnrecognizedpointsobservation/recognizedpoint%28forkey_%29.md): Retrieves a recognized point for a key.
- [recognizedPointsForGroupKey:error:](vnrecognizedpointsobservation/recognizedpoints%28forgroupkey_%29.md): Retrieves the recognized points for a key.

### Converting Points for Core ML

- [keypointsMultiArrayAndReturnError:](vnrecognizedpointsobservation/keypointsmultiarray%28%29.md): Retrieves the grouping of normalized point coordinates and confidence scores in a format compatible with Core ML.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Inherited By

- [VNAnimalBodyPoseObservation](vnanimalbodyposeobservation.md)
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md)
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md)

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.
