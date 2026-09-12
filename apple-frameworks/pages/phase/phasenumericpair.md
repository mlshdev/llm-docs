> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasenumericpair](https://developer.apple.com/documentation/phase/phasenumericpair)

# PHASENumericPair (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An ordered pair that defines a bounding box for an envelope.

## Declaration

```swift
class PHASENumericPair
```

<a id="overview"></a>

## Overview

A [PHASEEnvelope](phaseenvelope.md) object uses this class to bound the value of its [range](phaseenvelope/range.md) and [domain](phaseenvelope/domain.md).

## Topics

### Creating a Numeric Pair

- [init(firstValue:secondValue:)](phasenumericpair/init%28firstvalue_secondvalue_%29.md): Creates a pair of numbers with the given values.

### Defining the Values

- [first](phasenumericpair/first.md): The first value in the pair.
- [second](phasenumericpair/second.md): The second value in the pair.

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
- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

# PHASENumericPair (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

An ordered pair that defines a bounding box for an envelope.

## Declaration

```objectivec
@interface PHASENumericPair : NSObject
```

<a id="overview"></a>

## Overview

A [PHASEEnvelope](phaseenvelope.md) object uses this class to bound the value of its [range](phaseenvelope/range.md) and [domain](phaseenvelope/domain.md).

## Topics

### Creating a Numeric Pair

- [initWithFirstValue:secondValue:](phasenumericpair/init%28firstvalue_secondvalue_%29.md): Creates a pair of numbers with the given values.

### Defining the Values

- [first](phasenumericpair/first.md): The first value in the pair.
- [second](phasenumericpair/second.md): The second value in the pair.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Dynamic Sound Control

- [PHASEEnvelope](phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.
