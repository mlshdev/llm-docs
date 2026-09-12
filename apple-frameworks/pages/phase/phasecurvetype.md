> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecurvetype](https://developer.apple.com/documentation/phase/phasecurvetype)

# PHASECurveType (Swift)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that apply a mathematical function to an input value.

## Declaration

```swift
enum PHASECurveType
```

<a id="overview"></a>

## Overview

PHASE applies curves in several places across the framework:

- A [PHASEEnvelopeSegment](phaseenvelopesegment.md) object represents one curved portion of an envelope’s graph.
- The [PHASEGroup](phasegroup.md) class applies a curve type to its sounds by fading its volume with the [fadeGain(gain:duration:curveType:)](phasegroup/fadegain%28gain_duration_curvetype_%29.md) function, and to its rate, with [fadeRate(rate:duration:curveType:)](phasegroup/faderate%28rate_duration_curvetype_%29.md).
- Each [PHASEGroupPresetSetting](phasegrouppresetsetting.md) applies a curve to control a setting’s rate of change.

<a id="Apply-a-Curve-as-a-Rate-of-Change"></a>

### Apply a Curve as a Rate of Change

In most cases, PHASE applies curves to output a rate of change. For example, an  envelope segment’s [curveType](phaseenvelopesegment/curvetype.md) determines where along the segment’s domain the y-value changes more quickly. The following figure compares all the curves’ rate of change by plotting their input over the range `(0,0)` to `(1,1)`.

![A certesian graph plots all curve types for comparison. The graph encompases the first cartesian quadrant, where each curve begins at coordinate (0,0) and ends at coordinate (1,1). The linear curve plots in a straight line between the two coordinates. An arc that occupies the furthest area from the linear line to the upper left is the inverse cube curve. The next furthest arc from the linear line to the upper left is the inverse squared curve. And the third-furthest arc from the linear line to the upper left is the inverse sine curve. An arc that occupies the furthest area from the linear line to the lower right is the cube curve. The next furthest arc from the linear line to the lower right is the squared curve. And the third-furthest arc from the linear line to the lower right is the sine curve. The sigmoid and inverse sigmoid curves occupy the central area of the graph and center on top of the linear line. The sigmoid curve shapes like the letter S and begins by extending more quickly in the X direction. The inverse sigmoid curve shapes like an inverted letter S and begins by extending more quickly in the Y direction.](https://developer.apple.com/images/com.apple.phase/media-3887371@2x.png)

## Topics

### Types

- [PHASECurveType.linear](phasecurvetype/linear.md): A curve that increases uniformly with its input.
- [PHASECurveType.squared](phasecurvetype/squared.md): A curve that increases at a rate that squares its input.
- [PHASECurveType.inverseSquared](phasecurvetype/inversesquared.md): A curve that increases at a rate of one divided by the input’s square.
- [PHASECurveType.cubed](phasecurvetype/cubed.md): A curve that increases at a rate that cubes its input.
- [PHASECurveType.inverseCubed](phasecurvetype/inversecubed.md): A curve that increases at a rate of one divided by the input’s cube.
- [PHASECurveType.sine](phasecurvetype/sine.md): A sine curve.
- [PHASECurveType.inverseSine](phasecurvetype/inversesine.md): An inverse sine curve.
- [PHASECurveType.sigmoid](phasecurvetype/sigmoid.md): A sigmoid curve.
- [PHASECurveType.inverseSigmoid](phasecurvetype/inversesigmoid.md): An inverse sigmoid curve.
- [PHASECurveType.holdStartValue](phasecurvetype/holdstartvalue.md): A curve that equals its start value for the entire duration.
- [PHASECurveType.jumpToEndValue](phasecurvetype/jumptoendvalue.md): A curve that equals its end value for the entire duration.

### Initializers

- [init(rawValue:)](phasecurvetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dynamic Sound Control

- [PHASEEnvelope](phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.

# PHASECurveType (Objective-C)

**Framework:** PHASE  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that apply a mathematical function to an input value.

## Declaration

```objectivec
enum PHASECurveType : NSInteger;
```

<a id="overview"></a>

## Overview

PHASE applies curves in several places across the framework:

- A [PHASEEnvelopeSegment](phaseenvelopesegment.md) object represents one curved portion of an envelope’s graph.
- The [PHASEGroup](phasegroup.md) class applies a curve type to its sounds by fading its volume with the [fadeGain:duration:curveType:](phasegroup/fadegain%28gain_duration_curvetype_%29.md) function, and to its rate, with [fadeRate:duration:curveType:](phasegroup/faderate%28rate_duration_curvetype_%29.md).
- Each [PHASEGroupPresetSetting](phasegrouppresetsetting.md) applies a curve to control a setting’s rate of change.

<a id="Apply-a-Curve-as-a-Rate-of-Change"></a>

### Apply a Curve as a Rate of Change

In most cases, PHASE applies curves to output a rate of change. For example, an  envelope segment’s [curveType](phaseenvelopesegment/curvetype.md) determines where along the segment’s domain the y-value changes more quickly. The following figure compares all the curves’ rate of change by plotting their input over the range `(0,0)` to `(1,1)`.

![A certesian graph plots all curve types for comparison. The graph encompases the first cartesian quadrant, where each curve begins at coordinate (0,0) and ends at coordinate (1,1). The linear curve plots in a straight line between the two coordinates. An arc that occupies the furthest area from the linear line to the upper left is the inverse cube curve. The next furthest arc from the linear line to the upper left is the inverse squared curve. And the third-furthest arc from the linear line to the upper left is the inverse sine curve. An arc that occupies the furthest area from the linear line to the lower right is the cube curve. The next furthest arc from the linear line to the lower right is the squared curve. And the third-furthest arc from the linear line to the lower right is the sine curve. The sigmoid and inverse sigmoid curves occupy the central area of the graph and center on top of the linear line. The sigmoid curve shapes like the letter S and begins by extending more quickly in the X direction. The inverse sigmoid curve shapes like an inverted letter S and begins by extending more quickly in the Y direction.](https://developer.apple.com/images/com.apple.phase/media-3887371@2x.png)

## Topics

### Types

- [PHASECurveTypeLinear](phasecurvetype/linear.md): A curve that increases uniformly with its input.
- [PHASECurveTypeSquared](phasecurvetype/squared.md): A curve that increases at a rate that squares its input.
- [PHASECurveTypeInverseSquared](phasecurvetype/inversesquared.md): A curve that increases at a rate of one divided by the input’s square.
- [PHASECurveTypeCubed](phasecurvetype/cubed.md): A curve that increases at a rate that cubes its input.
- [PHASECurveTypeInverseCubed](phasecurvetype/inversecubed.md): A curve that increases at a rate of one divided by the input’s cube.
- [PHASECurveTypeSine](phasecurvetype/sine.md): A sine curve.
- [PHASECurveTypeInverseSine](phasecurvetype/inversesine.md): An inverse sine curve.
- [PHASECurveTypeSigmoid](phasecurvetype/sigmoid.md): A sigmoid curve.
- [PHASECurveTypeInverseSigmoid](phasecurvetype/inversesigmoid.md): An inverse sigmoid curve.
- [PHASECurveTypeHoldStartValue](phasecurvetype/holdstartvalue.md): A curve that equals its start value for the entire duration.
- [PHASECurveTypeJumpToEndValue](phasecurvetype/jumptoendvalue.md): A curve that equals its end value for the entire duration.

## See Also

### Dynamic Sound Control

- [PHASEEnvelope](phaseenvelope.md): A collection of segments that connect to graph a complex curve over a linear input.
- [PHASEEnvelopeSegment](phaseenvelopesegment.md): A curved portion of an envelope.
- [PHASENumericPair](phasenumericpair.md): An ordered pair that defines a bounding box for an envelope.
- [Playback Parameterization](playback-parameterization.md): Change the characteristics of in-flight audio by adjusting its properties at runtime.
