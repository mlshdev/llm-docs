> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/segmentationclass](https://developer.apple.com/documentation/arkit/arframe/segmentationclass)

# ARFrame.SegmentationClass (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

## Declaration

```swift
enum SegmentationClass
```

<a id="overview"></a>

## Overview

ARKit applies the categories defined in this class based on its interpretation of the camera feed’s pixel data. Only people are identified in a camera feed, and therefore the available pixel classifications are either [ARFrame.SegmentationClass.person](segmentationclass/person.md) or [ARFrame.SegmentationClass.none](segmentationclass/none.md).

## Topics

### Classifying Pixels

- [ARFrame.SegmentationClass.person](segmentationclass/person.md): A classification of a pixel in the segmentation buffer as part of a person.
- [ARFrame.SegmentationClass.none](segmentationclass/none.md): A classification of a pixel in the segmentation buffer as unidentified.

### Initializers

- [init(rawValue:)](segmentationclass/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for people

- [detectedBody](detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.

# ARSegmentationClass (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

## Declaration

```objectivec
enum ARSegmentationClass : uint8_t;
```

<a id="overview"></a>

## Overview

ARKit applies the categories defined in this class based on its interpretation of the camera feed’s pixel data. Only people are identified in a camera feed, and therefore the available pixel classifications are either [ARSegmentationClassPerson](segmentationclass/person.md) or [ARSegmentationClassNone](segmentationclass/none.md).

## Topics

### Classifying Pixels

- [ARSegmentationClassPerson](segmentationclass/person.md): A classification of a pixel in the segmentation buffer as part of a person.
- [ARSegmentationClassNone](segmentationclass/none.md): A classification of a pixel in the segmentation buffer as unidentified.

## See Also

### Checking for people

- [detectedBody](detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [ARBody2D](../arbody2d.md): The screen-space representation of a person ARKit recognizes in the camera feed.
- [segmentationBuffer](segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
