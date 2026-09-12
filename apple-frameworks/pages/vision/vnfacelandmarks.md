> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnfacelandmarks](https://developer.apple.com/documentation/vision/vnfacelandmarks)

# VNFaceLandmarks (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for containers of face landmark information.

## Declaration

```swift
class VNFaceLandmarks
```

<a id="overview"></a>

## Overview

This class represents the set of all detectable facial landmarks and regions, exposed as properties.

## Topics

### Creating an Instance

- [init(coder:)](vnfacelandmarks/init%28coder_%29.md)

### Determining Accuracy

- [confidence](vnfacelandmarks/confidence.md): A confidence estimate for the detected landmarks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNFaceLandmarks2D](vnfacelandmarks2d.md)

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

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.

# VNFaceLandmarks (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The abstract superclass for containers of face landmark information.

## Declaration

```objectivec
@interface VNFaceLandmarks : NSObject
```

<a id="overview"></a>

## Overview

This class represents the set of all detectable facial landmarks and regions, exposed as properties.

## Topics

### Determining Accuracy

- [confidence](vnfacelandmarks/confidence.md): A confidence estimate for the detected landmarks.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [VNFaceLandmarks2D](vnfacelandmarks2d.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Identifying Landmarks

- [landmarks](vnfaceobservation/landmarks.md): The facial features of the detected face.
- [VNFaceLandmarks2D](vnfacelandmarks2d.md): A collection of facial features that a request detects.
- [VNFaceLandmarkRegion2D](vnfacelandmarkregion2d.md): 2D geometry information for a specific facial feature.
- [VNFaceLandmarkRegion](vnfacelandmarkregion.md): The abstract superclass for information about a specific face landmark.
