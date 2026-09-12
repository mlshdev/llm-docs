> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint](https://developer.apple.com/documentation/vision/vnpoint)

# VNPoint (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable object that represents a single 2D point in an image.

## Declaration

```swift
class VNPoint
```

## Topics

### Creating a Point

- [init(x:y:)](vnpoint/init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [init(location:)](vnpoint/init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [init(coder:)](vnpoint/init%28coder_%29.md)
- [apply(\_:to:)](vnpoint/apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zero](vnpoint/zero.md): A point object that represents the origin.

### Inspecting a Point

- [x](vnpoint/x.md): The x-coordinate.
- [y](vnpoint/y.md): The y-coordinate.
- [location](vnpoint/location.md): The Core Graphics point for this point.

### Calculating Distance

- [distance(\_:)](vnpoint/distance%28__%29.md): Returns the distance to another point.
- [distance(\_:\_:)](vnpoint/distance%28____%29.md): Deprecated. Calculates the distance between two points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNDetectedPoint](vndetectedpoint.md)

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

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.

# VNPoint (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An immutable object that represents a single 2D point in an image.

## Declaration

```objectivec
@interface VNPoint : NSObject
```

## Topics

### Creating a Point

- [initWithX:y:](vnpoint/init%28x_y_%29.md): Creates a point object with the specified coordinates.
- [initWithLocation:](vnpoint/init%28location_%29.md): Creates a point object from the specified Core Graphics point.
- [pointByApplyingVector:toPoint:](vnpoint/apply%28__to_%29.md): Creates a point object that’s shifted by the X and Y offsets of the specified vector.
- [zeroPoint](vnpoint/zero.md): A point object that represents the origin.

### Inspecting a Point

- [x](vnpoint/x.md): The x-coordinate.
- [y](vnpoint/y.md): The y-coordinate.
- [location](vnpoint/location.md): The Core Graphics point for this point.

### Calculating Distance

- [distanceToPoint:](vnpoint/distance%28__%29.md): Returns the distance to another point.
- [distanceBetweenPoint:point:](vnpoint/distance%28____%29.md): Deprecated. Calculates the distance between two points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNDetectedPoint](vndetectedpoint.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Body and hand pose detection

- [Detecting Human Body Poses in Images](detecting-human-body-poses-in-images.md): Add the capability to detect human body poses to your app using the Vision framework.
- [Detecting Hand Poses with Vision](detecting-hand-poses-with-vision.md): Create a virtual drawing app by using Vision’s capability to detect hand poses.
- [VNDetectHumanBodyPoseRequest](vndetecthumanbodyposerequest.md): A request that detects a human body pose.
- [VNDetectHumanHandPoseRequest](vndetecthumanhandposerequest.md): A request that detects a human hand pose.
- [VNRecognizedPointsObservation](vnrecognizedpointsobservation.md): An observation that provides the points the analysis recognized.
- [VNHumanBodyPoseObservation](vnhumanbodyposeobservation.md): An observation that provides the body points the analysis recognized.
- [VNHumanHandPoseObservation](vnhumanhandposeobservation.md): An observation that provides the hand points the analysis recognized.
- [VNDetectedPoint](vndetectedpoint.md): An object that represents a normalized point in an image, along with a confidence value.
- [VNRecognizedPoint](vnrecognizedpoint.md): An object that represents a normalized point in an image, along with an identifier label and a confidence value.
- [VNRecognizedPointKey](vnrecognizedpointkey.md): The data type for all recognized point keys.
- [VNRecognizedPointGroupKey](vnrecognizedpointgroupkey.md): The data type for all recognized-point group keys.
