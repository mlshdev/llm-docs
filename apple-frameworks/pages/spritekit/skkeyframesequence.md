> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence](https://developer.apple.com/documentation/spritekit/skkeyframesequence)

# SKKeyframeSequence (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that performs interpolation between values specified at different times (keyframes).

## Declaration

```swift
class SKKeyframeSequence
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md)
- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md)

<a id="overview"></a>

## Overview

The primary use for an [SKKeyframeSequence](skkeyframesequence.md) object is to animate properties on particles emitted by an [SKEmitterNode](skemitternode.md) object, but it can also be used for your general interpolation needs across a discrete set of inputs.

When a keyframe sequence is used with an emitter node, particles determine their values by sampling the keyframe sequence. The sequence replaces the normal simulation performed by the emitter node.

## Topics

### First Steps

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md): See a few examples of what keyframe sequence can do.
- [init(keyframeValues:times:)](skkeyframesequence/init%28keyframevalues_times_%29.md): Initializes a keyframe sequence with an initial set of values and times.
- [init(capacity:)](skkeyframesequence/init%28capacity_%29.md): Initializes a new keyframe sequence.
- [init(coder:)](skkeyframesequence/init%28coder_%29.md)

### Sequence Building

Define the composition of the keyframe sequence.

- [addKeyframeValue(\_:time:)](skkeyframesequence/addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframe(at:)](skkeyframesequence/removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe()](skkeyframesequence/removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime(\_:for:)](skkeyframesequence/setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue(\_:for:)](skkeyframesequence/setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue(\_:time:for:)](skkeyframesequence/setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.

### Sequence Running

You run the sequence by sampling its output at a given time.

- [sample(atTime:)](skkeyframesequence/sample%28attime_%29.md): Calculates the sample at a particular time.

### Sequence Information

- [count()](skkeyframesequence/count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeTime(for:)](skkeyframesequence/getkeyframetime%28for_%29.md): Gets the time for a keyframe in the sequence.
- [getKeyframeValue(for:)](skkeyframesequence/getkeyframevalue%28for_%29.md): Gets the value for a keyframe in the sequence.

### Interpolation Modifiers

Modify sample output by defining a mode or repeat options.

- [interpolationMode](skkeyframesequence/interpolationmode.md): The mode used to determine how values for times between the keyframes are calculated.
- [repeatMode](skkeyframesequence/repeatmode.md): The mode used to determine how the keyframe sequence repeats.

### Constants

- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

## See Also

### Mathematical Tools

- [SKRange](skrange.md): A definition of a range of floating-point values.
- [SKRegion](skregion.md): The definition of an arbitrary area.

# SKKeyframeSequence (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that performs interpolation between values specified at different times (keyframes).

## Declaration

```objectivec
@interface SKKeyframeSequence : NSObject
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md)
- [Animating Particle Properties Across Disparate Values](animating-particle-properties-across-disparate-values.md)

<a id="overview"></a>

## Overview

The primary use for an [SKKeyframeSequence](skkeyframesequence.md) object is to animate properties on particles emitted by an [SKEmitterNode](skemitternode.md) object, but it can also be used for your general interpolation needs across a discrete set of inputs.

When a keyframe sequence is used with an emitter node, particles determine their values by sampling the keyframe sequence. The sequence replaces the normal simulation performed by the emitter node.

## Topics

### First Steps

- [Using Keyframe Sequence to effect Custom Interpolation](using-keyframe-sequence-to-effect-custom-interpolation.md): See a few examples of what keyframe sequence can do.
- [initWithKeyframeValues:times:](skkeyframesequence/init%28keyframevalues_times_%29.md): Initializes a keyframe sequence with an initial set of values and times.
- [initWithCapacity:](skkeyframesequence/init%28capacity_%29.md): Initializes a new keyframe sequence.
- [initWithCoder:](skkeyframesequence/init%28coder_%29.md)

### Sequence Building

Define the composition of the keyframe sequence.

- [addKeyframeValue:time:](skkeyframesequence/addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframeAtIndex:](skkeyframesequence/removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe](skkeyframesequence/removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime:forIndex:](skkeyframesequence/setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue:forIndex:](skkeyframesequence/setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue:time:forIndex:](skkeyframesequence/setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.

### Sequence Running

You run the sequence by sampling its output at a given time.

- [sampleAtTime:](skkeyframesequence/sample%28attime_%29.md): Calculates the sample at a particular time.

### Sequence Information

- [count](skkeyframesequence/count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeTimeForIndex:](skkeyframesequence/getkeyframetime%28for_%29.md): Gets the time for a keyframe in the sequence.
- [getKeyframeValueForIndex:](skkeyframesequence/getkeyframevalue%28for_%29.md): Gets the value for a keyframe in the sequence.

### Interpolation Modifiers

Modify sample output by defining a mode or repeat options.

- [interpolationMode](skkeyframesequence/interpolationmode.md): The mode used to determine how values for times between the keyframes are calculated.
- [repeatMode](skkeyframesequence/repeatmode.md): The mode used to determine how the keyframe sequence repeats.

### Constants

- [SKInterpolationMode](skinterpolationmode.md): The modes used to interpolate between keyframes in the sequence.
- [SKRepeatMode](skrepeatmode.md): The modes used to determine how the sequence repeats.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Mathematical Tools

- [SKRange](skrange.md): A definition of a range of floating-point values.
- [SKRegion](skregion.md): The definition of an arbitrary area.
