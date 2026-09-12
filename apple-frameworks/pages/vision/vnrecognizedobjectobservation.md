> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedobjectobservation](https://developer.apple.com/documentation/vision/vnrecognizedobjectobservation)

# VNRecognizedObjectObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A detected object observation with an array of classification labels that classify the recognized object.

## Declaration

```swift
class VNRecognizedObjectObservation
```

<a id="overview"></a>

## Overview

The confidence of the classifications sum up to `1.0.` Multiply the classification confidence with the confidence of this observation.

## Topics

### Classifying a Recognized Object

- [labels](vnrecognizedobjectobservation/labels.md): An array of observations that classify the recognized object.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

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

### Object recognition

- [Recognizing Objects in Live Capture](recognizing-objects-in-live-capture.md): Apply Vision algorithms to identify objects in real-time video.
- [Understanding a Dice Roll with Vision and Object Detection](../coreml/understanding-a-dice-roll-with-vision-and-object-detection.md): Detect dice position and values shown in a camera frame, and determine the end of a roll by leveraging a dice detection model.

# VNRecognizedObjectObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A detected object observation with an array of classification labels that classify the recognized object.

## Declaration

```objectivec
@interface VNRecognizedObjectObservation : VNDetectedObjectObservation
```

<a id="overview"></a>

## Overview

The confidence of the classifications sum up to `1.0.` Multiply the classification confidence with the confidence of this observation.

## Topics

### Classifying a Recognized Object

- [labels](vnrecognizedobjectobservation/labels.md): An array of observations that classify the recognized object.
- [VNClassificationObservation](vnclassificationobservation.md): An object that represents classification information that an image-analysis request produces.

## Relationships

### Inherits From

- [VNDetectedObjectObservation](vndetectedobjectobservation.md)

## See Also

### Object recognition

- [Recognizing Objects in Live Capture](recognizing-objects-in-live-capture.md): Apply Vision algorithms to identify objects in real-time video.
- [Understanding a Dice Roll with Vision and Object Detection](../coreml/understanding-a-dice-roll-with-vision-and-object-detection.md): Detect dice position and values shown in a camera frame, and determine the end of a roll by leveraging a dice detection model.
