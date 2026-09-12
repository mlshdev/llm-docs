> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelopesegment](https://developer.apple.com/documentation/phase/phaseenvelopesegment)

# PHASEEnvelopeSegment (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A curved portion of an envelope.

## Declaration

```swift
class PHASEEnvelopeSegment
```

<a id="overview"></a>

## Overview

This class specifies a curve that determines the \_y-\_value rate of change over a particular portion of an envelope’s graph. For example, the difference between a [PHASECurveType.cubed](phasecurvetype/cubed.md) segment and an [PHASECurveType.inverseCubed](phasecurvetype/inversecubed.md) segment is that they share opposite rates of change; where the cubed curve’s *y* value changes fastest in the segment’s domain, the inverse-cubed curve changes slowest, and vice versa.

## Topics

### Creating a Segment

- [init(endPoint:curveType:)](phaseenvelopesegment/init%28endpoint_curvetype_%29.md): Creates a curved portion of an envelope.

### Shaping a Segment

- [curveType](phaseenvelopesegment/curvetype.md): A curve along the envelope that shapes the segment.
- [endPoint](phaseenvelopesegment/endpoint.md): A point that identifies the end of the segment along the envelope.

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

## See Also

### Dynamic Sound Control

- [PHASEEnvelope](phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

# PHASEEnvelopeSegment (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A curved portion of an envelope.

## Declaration

```objectivec
@interface PHASEEnvelopeSegment : NSObject
```

<a id="overview"></a>

## Overview

This class specifies a curve that determines the \_y-\_value rate of change over a particular portion of an envelope’s graph. For example, the difference between a [PHASECurveTypeCubed](phasecurvetype/cubed.md) segment and an [PHASECurveTypeInverseCubed](phasecurvetype/inversecubed.md) segment is that they share opposite rates of change; where the cubed curve’s *y* value changes fastest in the segment’s domain, the inverse-cubed curve changes slowest, and vice versa.

## Topics

### Creating a Segment

- [initWithEndPoint:curveType:](phaseenvelopesegment/init%28endpoint_curvetype_%29.md): Creates a curved portion of an envelope.

### Shaping a Segment

- [curveType](phaseenvelopesegment/curvetype.md): A curve along the envelope that shapes the segment.
- [endPoint](phaseenvelopesegment/endpoint.md): A point that identifies the end of the segment along the envelope.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Dynamic Sound Control

- [PHASEEnvelope](phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.
