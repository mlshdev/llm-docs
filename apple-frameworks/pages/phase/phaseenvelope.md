> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseenvelope](https://developer.apple.com/documentation/phase/phaseenvelope)

# PHASEEnvelope (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of segments that connect to graph a complex curve over a linear input.

## Declaration

```swift
class PHASEEnvelope
```

<a id="overview"></a>

## Overview

In traditional audio uses, an *envelope* defines a complex graph that determines the volume of audio data over an input duration. PHASE uses envelopes in a similar way. Given a value on the envelope’s input axis, the [evaluate(x:)](phaseenvelope/evaluate%28x_%29.md) function plots and returns the result on the output axis. The following are possible uses of this class:

- Sound event nodes, such as [PHASEBlendNodeDefinition](phaseblendnodedefinition.md), can shape their volume using an envelope; see [addRange(envelope:subtree:)](phaseblendnodedefinition/addrange%28envelope_subtree_%29.md).
- Distance models shape sounds with a 3D position using an envelope; see [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md).
- An envelope can do more than shape audio. To gradually change an envelope’s input value over time, use the [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) class, which creates a function with a metaparameter value as input. An app can use the numeric result for any purpose. For example, the x-axis can be distance and the y-axis can be playback rate.

At runtime, PHASE determines whether a particular member of the [segments](phaseenvelope/segments.md) array slopes up or down along the domain depending on the envelope’s particular use case.

<a id="Create-an-Envelope-and-Shape-its-Curve"></a>

### Create an Envelope and Shape its Curve

To use an envelope in your app, define its shape by defining a series of segments. Each segment specifies a curve that collectively connect to form a graph. The following code creates an envelope with a single segment that’s shaped like the lettter *s:*

**Swift**

```swift
// Create a segments array.
var segments: [PHASEEnvelopeSegment] = []

// Create a single segment with a sigmoid curve to give "ease in, 
//  ease out" movement along the domain. Define an endpoint of (1, 1).
let segment = PHASEEnvelopeSegment(
    endPoint: simd_make_double2(1.0, 1.0), curveType: .sigmoid)

// Add the segment to the array.
segments.append(segment)

// Create the envelope and set the start point to (-1, -1).
let envelope = PHASEEnvelope(startPoint: simd_make_double2(-1.0, -1.0),
    segments: segments)
```

**Objective-C**

```objc
// Create a segments array.
NSMutableArray<PHASEEnvelopeSegment*>* segments = 
    [NSMutableArray new];

// Create a single segment with a sigmoid curve to give "ease in, 
//  ease out" movement along the domain. Define an endpoint of (1, 1).
PHASEEnvelopeSegment* segment = [[PHASEEnvelopeSegment alloc] 
    initWithEndPoint:simd_make_double2(1.0, 1.0) 
    curveType:PHASECurveTypeSigmoid];

// Add the segment to the array.
[segments addObject:segment];

// Create the envelope and set the start point to (-1, -1).
PHASEEnvelope* envelope = [[PHASEEnvelope alloc] 
    initWithStartPoint:simd_make_double2(-1.0, -1.0) 
    segments:segments];
```

The graph flexes at runtime depending on the source content on which the envelope operates. A [PHASEEnvelope](phaseenvelope.md) doesn’t constrain the [evaluate(x:)](phaseenvelope/evaluate%28x_%29.md) function’s output to predertermined values. Instead, PHASE applies the envelope’s curves to the source content as a rate of change.

## Topics

### Creating an Envelope

- [init(startPoint:segments:)](phaseenvelope/init%28startpoint_segments_%29.md): Creates an envelope with a start point and segments.

### Inspecting the Envelope

- [evaluate(x:)](phaseenvelope/evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [segments](phaseenvelope/segments.md): An array of the envelope’s segments.
- [startPoint](phaseenvelope/startpoint.md): The starting point along the envelope’s duration.

### Bounding the Input

- [domain](phaseenvelope/domain.md): The range of the envelope’s possible input values.
- [range](phaseenvelope/range.md): The bounds of the output value.

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

- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

# PHASEEnvelope (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A collection of segments that connect to graph a complex curve over a linear input.

## Declaration

```objectivec
@interface PHASEEnvelope : NSObject
```

<a id="overview"></a>

## Overview

In traditional audio uses, an *envelope* defines a complex graph that determines the volume of audio data over an input duration. PHASE uses envelopes in a similar way. Given a value on the envelope’s input axis, the [evaluateForValue:](phaseenvelope/evaluate%28x_%29.md) function plots and returns the result on the output axis. The following are possible uses of this class:

- Sound event nodes, such as [PHASEBlendNodeDefinition](phaseblendnodedefinition.md), can shape their volume using an envelope; see [addRangeWithEnvelope:subtree:](phaseblendnodedefinition/addrange%28envelope_subtree_%29.md).
- Distance models shape sounds with a 3D position using an envelope; see [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md).
- An envelope can do more than shape audio. To gradually change an envelope’s input value over time, use the [PHASEMappedMetaParameterDefinition](phasemappedmetaparameterdefinition.md) class, which creates a function with a metaparameter value as input. An app can use the numeric result for any purpose. For example, the x-axis can be distance and the y-axis can be playback rate.

At runtime, PHASE determines whether a particular member of the [segments](phaseenvelope/segments.md) array slopes up or down along the domain depending on the envelope’s particular use case.

<a id="Create-an-Envelope-and-Shape-its-Curve"></a>

### Create an Envelope and Shape its Curve

To use an envelope in your app, define its shape by defining a series of segments. Each segment specifies a curve that collectively connect to form a graph. The following code creates an envelope with a single segment that’s shaped like the lettter *s:*

**Swift**

```swift
// Create a segments array.
var segments: [PHASEEnvelopeSegment] = []

// Create a single segment with a sigmoid curve to give "ease in, 
//  ease out" movement along the domain. Define an endpoint of (1, 1).
let segment = PHASEEnvelopeSegment(
    endPoint: simd_make_double2(1.0, 1.0), curveType: .sigmoid)

// Add the segment to the array.
segments.append(segment)

// Create the envelope and set the start point to (-1, -1).
let envelope = PHASEEnvelope(startPoint: simd_make_double2(-1.0, -1.0),
    segments: segments)
```

**Objective-C**

```objc
// Create a segments array.
NSMutableArray<PHASEEnvelopeSegment*>* segments = 
    [NSMutableArray new];

// Create a single segment with a sigmoid curve to give "ease in, 
//  ease out" movement along the domain. Define an endpoint of (1, 1).
PHASEEnvelopeSegment* segment = [[PHASEEnvelopeSegment alloc] 
    initWithEndPoint:simd_make_double2(1.0, 1.0) 
    curveType:PHASECurveTypeSigmoid];

// Add the segment to the array.
[segments addObject:segment];

// Create the envelope and set the start point to (-1, -1).
PHASEEnvelope* envelope = [[PHASEEnvelope alloc] 
    initWithStartPoint:simd_make_double2(-1.0, -1.0) 
    segments:segments];
```

The graph flexes at runtime depending on the source content on which the envelope operates. A [PHASEEnvelope](phaseenvelope.md) doesn’t constrain the [evaluateForValue:](phaseenvelope/evaluate%28x_%29.md) function’s output to predertermined values. Instead, PHASE applies the envelope’s curves to the source content as a rate of change.

## Topics

### Creating an Envelope

- [initWithStartPoint:segments:](phaseenvelope/init%28startpoint_segments_%29.md): Creates an envelope with a start point and segments.

### Inspecting the Envelope

- [evaluateForValue:](phaseenvelope/evaluate%28x_%29.md): Provides the height of the envelope for an input value.
- [segments](phaseenvelope/segments.md): An array of the envelope’s segments.
- [startPoint](phaseenvelope/startpoint.md): The starting point along the envelope’s duration.

### Bounding the Input

- [domain](phaseenvelope/domain.md): The range of the envelope’s possible input values.
- [range](phaseenvelope/range.md): The bounds of the output value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Dynamic Sound Control

- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASECurveType](phasecurvetype.md): Options that apply a mathematical function to an input value.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.
