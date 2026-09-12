> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfacemetricsexpression](https://developer.apple.com/documentation/sensorkit/srfacemetricsexpression)

# SRFaceMetricsExpression (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents a facial expression.

## Declaration

```swift
class SRFaceMetricsExpression
```

<a id="overview"></a>

## Overview

Use the [identifier](srfacemetricsexpression/identifier.md) property to determine the facial expression.

## Topics

### Getting the expression identifier and analysis

- [value](srfacemetricsexpression/value.md): The current position of the expression.
- [identifier](srfacemetricsexpression/identifier.md): An identifier for the facial expression.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting face analytics

- [faceAnchor](srfacemetrics/faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [partialFaceExpressions](srfacemetrics/partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](srfacemetrics/wholefaceexpressions.md): The whole face expressions that the algorithm detects.

# SRFaceMetricsExpression (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents a facial expression.

## Declaration

```objectivec
@interface SRFaceMetricsExpression : NSObject
```

<a id="overview"></a>

## Overview

Use the [identifier](srfacemetricsexpression/identifier.md) property to determine the facial expression.

## Topics

### Getting the expression identifier and analysis

- [value](srfacemetricsexpression/value.md): The current position of the expression.
- [identifier](srfacemetricsexpression/identifier.md): An identifier for the facial expression.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Getting face analytics

- [faceAnchor](srfacemetrics/faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [partialFaceExpressions](srfacemetrics/partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](srfacemetrics/wholefaceexpressions.md): The whole face expressions that the algorithm detects.
