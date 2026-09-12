> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhorizonobservation](https://developer.apple.com/documentation/vision/vnhorizonobservation)

# VNHorizonObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The horizon angle information that an image-analysis request detects.

## Declaration

```swift
class VNHorizonObservation
```

<a id="overview"></a>

## Overview

Instances of this class result from invoking a [VNDetectHorizonRequest](vndetecthorizonrequest.md), and report the [angle](vnhorizonobservation/angle.md) and [transform](vnhorizonobservation/transform.md) of the horizon in an image.

## Topics

### Evaluating the Horizon

- [angle](vnhorizonobservation/angle.md): The angle of the observed horizon.
- [transform](vnhorizonobservation/transform.md): The transform to apply to the detected horizon.
- [transform(forImageWidth:height:)](vnhorizonobservation/transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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

### Horizon detection

- [VNDetectHorizonRequest](vndetecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.

# VNHorizonObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The horizon angle information that an image-analysis request detects.

## Declaration

```objectivec
@interface VNHorizonObservation : VNObservation
```

<a id="overview"></a>

## Overview

Instances of this class result from invoking a [VNDetectHorizonRequest](vndetecthorizonrequest.md), and report the [angle](vnhorizonobservation/angle.md) and [transform](vnhorizonobservation/transform.md) of the horizon in an image.

## Topics

### Evaluating the Horizon

- [angle](vnhorizonobservation/angle.md): The angle of the observed horizon.
- [transform](vnhorizonobservation/transform.md): The transform to apply to the detected horizon.
- [transformForImageWidth:height:](vnhorizonobservation/transform%28forimagewidth_height_%29.md): Creates an affine transform for the specified image width and height.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Horizon detection

- [VNDetectHorizonRequest](vndetecthorizonrequest.md): An image-analysis request that determines the horizon angle in an image.
