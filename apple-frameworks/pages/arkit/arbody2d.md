> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbody2d](https://developer.apple.com/documentation/arkit/arbody2d)

# ARBody2D (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The screen-space representation of a person ARKit recognizes in the camera feed.

## Declaration

```swift
class ARBody2D
```

<a id="overview"></a>

## Overview

When ARKit recognizes a person in the camera feed, it estimates the screen-space location of the body’s joints and provides the location to you through current frame’s [detectedBody](arframe/detectedbody.md).

## Topics

### Getting Joint Information

- [skeleton](arbody2d/skeleton.md): An object that contains the screen position of a body’s joints.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for people

- [detectedBody](arframe/detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [segmentationBuffer](arframe/segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](arframe/estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARFrame.SegmentationClass](arframe/segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.

# ARBody2D (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The screen-space representation of a person ARKit recognizes in the camera feed.

## Declaration

```objectivec
@interface ARBody2D : NSObject
```

<a id="overview"></a>

## Overview

When ARKit recognizes a person in the camera feed, it estimates the screen-space location of the body’s joints and provides the location to you through current frame’s [detectedBody](arframe/detectedbody.md).

## Topics

### Getting Joint Information

- [skeleton](arbody2d/skeleton.md): An object that contains the screen position of a body’s joints.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Checking for people

- [detectedBody](arframe/detectedbody.md): The screen position information of a body that ARKit recognizes in the camera image.
- [segmentationBuffer](arframe/segmentationbuffer.md): A buffer that contains pixel information identifying the shape of objects from the camera feed that you use to occlude virtual content.
- [estimatedDepthData](arframe/estimateddepthdata.md): A buffer that represents the estimated depth values from the camera feed that you use to occlude virtual content.
- [ARSegmentationClass](arframe/segmentationclass.md): A categorization of a pixel that defines a type of content you use to occlude your app’s virtual content.
