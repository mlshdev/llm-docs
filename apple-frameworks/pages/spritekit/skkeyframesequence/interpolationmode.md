> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skkeyframesequence/interpolationmode

# interpolationMode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode used to determine how values for times between the keyframes are calculated.

## Declaration

```swift
var interpolationMode: SKInterpolationMode { get set }
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The possible values are defined in [SKInterpolationMode](../skinterpolationmode.md). The default value is [SKInterpolationMode.linear](../skinterpolationmode/linear.md).

## See Also

### Interpolation Modifiers

- [repeatMode](repeatmode.md): The mode used to determine how the keyframe sequence repeats.

# interpolationMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode used to determine how values for times between the keyframes are calculated.

## Declaration

```objectivec
@property (nonatomic) SKInterpolationMode interpolationMode;
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The possible values are defined in [SKInterpolationMode](../skinterpolationmode.md). The default value is [SKInterpolationModeLinear](../skinterpolationmode/linear.md).

## See Also

### Interpolation Modifiers

- [repeatMode](repeatmode.md): The mode used to determine how the keyframe sequence repeats.
