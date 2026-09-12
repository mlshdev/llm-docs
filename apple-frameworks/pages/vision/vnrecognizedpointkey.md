> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointkey](https://developer.apple.com/documentation/vision/vnrecognizedpointkey)

# VNRecognizedPointKey (Swift)

**Framework:** Vision  
**Kind:** Structure

The data type for all recognized point keys.

## Declaration

```swift
struct VNRecognizedPointKey
```

## Topics

### Landmarks

- [Body Landmarks](body-landmarks.md): The body landmarks that Vision detects.
- [Hand Landmarks](hand-landmarks.md): The hand landmarks that Vision detects.

### Initializers

- [init(rawValue:)](vnrecognizedpointkey/init%28rawvalue_%29.md): Creates a recognized point key with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

# VNRecognizedPointKey (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

The data type for all recognized point keys.

## Declaration

```objectivec
typedef NSString * VNRecognizedPointKey;
```

## Topics

### Landmarks

- [Body Landmarks](body-landmarks.md): The body landmarks that Vision detects.
- [Hand Landmarks](hand-landmarks.md): The hand landmarks that Vision detects.

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNPoint](vnpoint.md): An immutable object that represents a single 2D point in an image.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.
