> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srfacemetrics](https://developer.apple.com/documentation/sensorkit/srfacemetrics)

# SRFaceMetrics (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents metrics about the user’s face.

## Declaration

```swift
class SRFaceMetrics
```

<a id="overview"></a>

## Overview

The [faceMetrics](srsensor/facemetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting session information

- [sessionIdentifier](srfacemetrics/sessionidentifier.md): An identifier for the camera session.
- [context](srfacemetrics/context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetrics.Context](srfacemetrics/context-swift.struct.md): The context of the system during the camera session.
- [version](srfacemetrics/version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.

### Getting face analytics

- [faceAnchor](srfacemetrics/faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [partialFaceExpressions](srfacemetrics/partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](srfacemetrics/wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](srfacemetricsexpression.md): An object that represents a facial expression.

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

### Analyzing faces

- [SR_ARKIT_SUPPORTED](sr_arkit_supported.md): A flag that indicates whether the ARKit framework is available in the SDK for the SensorKit framework.

# SRFaceMetrics (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An object that represents metrics about the user’s face.

## Declaration

```objectivec
@interface SRFaceMetrics : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorFaceMetrics](srsensor/facemetrics.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Getting session information

- [sessionIdentifier](srfacemetrics/sessionidentifier.md): An identifier for the camera session.
- [context](srfacemetrics/context-swift.property.md): The context of the system during the camera session.
- [SRFaceMetricsContext](srfacemetrics/context-swift.struct.md): The context of the system during the camera session.
- [version](srfacemetrics/version.md): The version of the algorithm that the system uses to generate the face metrics and analytics.

### Getting face analytics

- [faceAnchor](srfacemetrics/faceanchor.md): The anchor for the face that the sensor detects in front of the camera.
- [partialFaceExpressions](srfacemetrics/partialfaceexpressions.md): The partial face expressions that the algorithm detects.
- [wholeFaceExpressions](srfacemetrics/wholefaceexpressions.md): The whole face expressions that the algorithm detects.
- [SRFaceMetricsExpression](srfacemetricsexpression.md): An object that represents a facial expression.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Analyzing faces

- [SR_ARKIT_SUPPORTED](sr_arkit_supported.md): A flag that indicates whether the ARKit framework is available in the SDK for the SensorKit framework.
