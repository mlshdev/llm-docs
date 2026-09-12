> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifacefeature](https://developer.apple.com/documentation/coreimage/cifacefeature)

# CIFaceFeature (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Information about a face detected in a still or video image.

## Declaration

```swift
class CIFaceFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces this class for identifying and analyzing image features. See `VNDetectFaceRectanglesRequest`. See [VNDetectFaceRectanglesRequest](../vision/vndetectfacerectanglesrequest.md))

The properties of a `CIFaceFeature` object provide information about the face’s eyes and mouth. A face object in a video can also have properties that track its location over time, tracking ID and frame count.

## Topics

### Locating Faces

- [bounds](cifacefeature/bounds-swift.property.md): A rectangle indicating the position and extent of the face feature in image coordinates.
- [hasFaceAngle](cifacefeature/hasfaceangle-swift.property.md): A Boolean value that indicates whether information about face rotation is available.
- [faceAngle](cifacefeature/faceangle-swift.property.md): The rotation of the face.

### Identifying Facial Features

- [hasLeftEyePosition](cifacefeature/haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](cifacefeature/hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](cifacefeature/hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](cifacefeature/lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](cifacefeature/righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](cifacefeature/mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [hasSmile](cifacefeature/hassmile-swift.property.md): A Boolean value that indicates whether a smile is detected in the face.
- [leftEyeClosed](cifacefeature/lefteyeclosed-swift.property.md): A Boolean value that indicates whether a closed left eye is detected in the face.
- [rightEyeClosed](cifacefeature/righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.

### Tracking Distinct Faces in Video

- [hasTrackingID](cifacefeature/hastrackingid-swift.property.md): A Boolean value that indicates whether the face object has a tracking ID.
- [trackingID](cifacefeature/trackingid-swift.property.md): The tracking identifier of the face object.
- [hasTrackingFrameCount](cifacefeature/hastrackingframecount-swift.property.md): A Boolean value that indicates the face object has a tracking frame count.
- [trackingFrameCount](cifacefeature/trackingframecount-swift.property.md): The tracking frame count of the face.

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.

# CIFaceFeature (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

Information about a face detected in a still or video image.

## Declaration

```objectivec
@interface CIFaceFeature : CIFeature
```

<a id="overview"></a>

## Overview

> **Note**

> In macOS 10.13, iOS 11, and tvOS 11 or later, the Vision framework replaces this class for identifying and analyzing image features. See `VNDetectFaceRectanglesRequest`. See [VNDetectFaceRectanglesRequest](../vision/vndetectfacerectanglesrequest.md))

The properties of a `CIFaceFeature` object provide information about the face’s eyes and mouth. A face object in a video can also have properties that track its location over time, tracking ID and frame count.

## Topics

### Locating Faces

- [bounds](cifacefeature/bounds-swift.property.md): A rectangle indicating the position and extent of the face feature in image coordinates.
- [hasFaceAngle](cifacefeature/hasfaceangle-swift.property.md): A Boolean value that indicates whether information about face rotation is available.
- [faceAngle](cifacefeature/faceangle-swift.property.md): The rotation of the face.

### Identifying Facial Features

- [hasLeftEyePosition](cifacefeature/haslefteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s left eye.
- [hasRightEyePosition](cifacefeature/hasrighteyeposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s right eye.
- [hasMouthPosition](cifacefeature/hasmouthposition-swift.property.md): A Boolean value that indicates whether the detector found the face’s mouth.
- [leftEyePosition](cifacefeature/lefteyeposition-swift.property.md): The image coordinate of the center of the left eye.
- [rightEyePosition](cifacefeature/righteyeposition-swift.property.md): The image coordinate of the center of the right eye.
- [mouthPosition](cifacefeature/mouthposition-swift.property.md): The image coordinate of the center of the mouth.
- [hasSmile](cifacefeature/hassmile-swift.property.md): A Boolean value that indicates whether a smile is detected in the face.
- [leftEyeClosed](cifacefeature/lefteyeclosed-swift.property.md): A Boolean value that indicates whether a closed left eye is detected in the face.
- [rightEyeClosed](cifacefeature/righteyeclosed-swift.property.md): A Boolean value that indicates whether a closed right eye is detected in the face.

### Tracking Distinct Faces in Video

- [hasTrackingID](cifacefeature/hastrackingid-swift.property.md): A Boolean value that indicates whether the face object has a tracking ID.
- [trackingID](cifacefeature/trackingid-swift.property.md): The tracking identifier of the face object.
- [hasTrackingFrameCount](cifacefeature/hastrackingframecount-swift.property.md): A Boolean value that indicates the face object has a tracking frame count.
- [trackingFrameCount](cifacefeature/trackingframecount-swift.property.md): The tracking frame count of the face.

### Instance Variables

- [bounds](cifacefeature/bounds-c.ivar.md)
- [faceAngle](cifacefeature/faceangle-c.ivar.md)
- [hasFaceAngle](cifacefeature/hasfaceangle-c.ivar.md)
- [hasLeftEyePosition](cifacefeature/haslefteyeposition-c.ivar.md)
- [hasMouthPosition](cifacefeature/hasmouthposition-c.ivar.md)
- [hasRightEyePosition](cifacefeature/hasrighteyeposition-c.ivar.md)
- [hasSmile](cifacefeature/hassmile-c.ivar.md)
- [hasTrackingFrameCount](cifacefeature/hastrackingframecount-c.ivar.md)
- [hasTrackingID](cifacefeature/hastrackingid-c.ivar.md)
- [leftEyeClosed](cifacefeature/lefteyeclosed-c.ivar.md)
- [leftEyePosition](cifacefeature/lefteyeposition-c.ivar.md)
- [mouthPosition](cifacefeature/mouthposition-c.ivar.md)
- [rightEyeClosed](cifacefeature/righteyeclosed-c.ivar.md)
- [rightEyePosition](cifacefeature/righteyeposition-c.ivar.md)
- [trackingFrameCount](cifacefeature/trackingframecount-c.ivar.md)
- [trackingID](cifacefeature/trackingid-c.ivar.md)

## Relationships

### Inherits From

- [CIFeature](cifeature.md)

## See Also

### Image Feature Detection

- [CIDetector](cidetector.md): An image processor that identifies notable features, such as faces and barcodes, in a still image or video.
- [CIFeature](cifeature.md): The abstract superclass for objects representing notable features detected in an image.
- [CIRectangleFeature](cirectanglefeature.md): Information about a rectangular region detected in a still or video image.
- [CITextFeature](citextfeature.md): Information about a text that was detected in a still or video image.
- [CIQRCodeFeature](ciqrcodefeature.md): Information about a Quick Response code detected in a still or video image.
