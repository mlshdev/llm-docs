> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointgroupkey](https://developer.apple.com/documentation/vision/vnrecognizedpointgroupkey)

# VNRecognizedPointGroupKey (Swift)

**Framework:** Vision  
**Kind:** Structure

The data type for all recognized-point group keys.

## Declaration

```swift
struct VNRecognizedPointGroupKey
```

## Topics

### Body Regions

- [bodyLandmarkRegionKeyFace](vnrecognizedpointgroupkey/bodylandmarkregionkeyface.md): Deprecated. A group key identifying the face, which includes the eyes, ears, and nose.
- [bodyLandmarkRegionKeyTorso](vnrecognizedpointgroupkey/bodylandmarkregionkeytorso.md): Deprecated. A group key identifying the torso, which includes the neck, shoulders, hips, and root.
- [bodyLandmarkRegionKeyRightArm](vnrecognizedpointgroupkey/bodylandmarkregionkeyrightarm.md): Deprecated. A group key identifying the landmarks of the right arm.
- [bodyLandmarkRegionKeyLeftArm](vnrecognizedpointgroupkey/bodylandmarkregionkeyleftarm.md): Deprecated. A group key identifying the landmarks of the left arm.
- [bodyLandmarkRegionKeyRightLeg](vnrecognizedpointgroupkey/bodylandmarkregionkeyrightleg.md): Deprecated. A group key identifying the landmarks of the right leg.
- [bodyLandmarkRegionKeyLeftLeg](vnrecognizedpointgroupkey/bodylandmarkregionkeyleftleg.md): Deprecated. A group key identifying the landmarks of the left leg.

### All Regions

- [all](vnrecognizedpointgroupkey/all.md): A group key identifying all landmarks.
- [point3DGroupKeyAll](vnrecognizedpointgroupkey/point3dgroupkeyall.md): A group key identifying all three-dimensional landmarks.

### Initializers

- [init(rawValue:)](vnrecognizedpointgroupkey/init%28rawvalue_%29.md): Creates a recognized point key with a string value.

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
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.

# VNRecognizedPointGroupKey (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

The data type for all recognized-point group keys.

## Declaration

```objectivec
typedef NSString * VNRecognizedPointGroupKey;
```

## Topics

### Body Regions

- [VNBodyLandmarkRegionKeyFace](vnrecognizedpointgroupkey/bodylandmarkregionkeyface.md): Deprecated. A group key identifying the face, which includes the eyes, ears, and nose.
- [VNBodyLandmarkRegionKeyTorso](vnrecognizedpointgroupkey/bodylandmarkregionkeytorso.md): Deprecated. A group key identifying the torso, which includes the neck, shoulders, hips, and root.
- [VNBodyLandmarkRegionKeyRightArm](vnrecognizedpointgroupkey/bodylandmarkregionkeyrightarm.md): Deprecated. A group key identifying the landmarks of the right arm.
- [VNBodyLandmarkRegionKeyLeftArm](vnrecognizedpointgroupkey/bodylandmarkregionkeyleftarm.md): Deprecated. A group key identifying the landmarks of the left arm.
- [VNBodyLandmarkRegionKeyRightLeg](vnrecognizedpointgroupkey/bodylandmarkregionkeyrightleg.md): Deprecated. A group key identifying the landmarks of the right leg.
- [VNBodyLandmarkRegionKeyLeftLeg](vnrecognizedpointgroupkey/bodylandmarkregionkeyleftleg.md): Deprecated. A group key identifying the landmarks of the left leg.

### All Regions

- [VNRecognizedPointGroupKeyAll](vnrecognizedpointgroupkey/all.md): A group key identifying all landmarks.
- [VNRecognizedPoint3DGroupKeyAll](vnrecognizedpointgroupkey/point3dgroupkeyall.md): A group key identifying all three-dimensional landmarks.

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
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
