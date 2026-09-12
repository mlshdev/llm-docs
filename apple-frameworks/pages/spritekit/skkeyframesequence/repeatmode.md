> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/repeatmode](https://developer.apple.com/documentation/spritekit/skkeyframesequence/repeatmode)

# repeatMode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode used to determine how the keyframe sequence repeats.

## Declaration

```swift
var repeatMode: SKRepeatMode { get set }
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The possible values are defined in [SKRepeatMode](../skrepeatmode.md). The default value is [SKRepeatMode.clamp](../skrepeatmode/clamp.md).

## See Also

### Interpolation Modifiers

- [interpolationMode](interpolationmode.md): The mode used to determine how values for times between the keyframes are calculated.

# repeatMode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The mode used to determine how the keyframe sequence repeats.

## Declaration

```objectivec
@property (nonatomic) SKRepeatMode repeatMode;
```

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

<a id="Discussion"></a>

## Discussion

The possible values are defined in [SKRepeatMode](../skrepeatmode.md). The default value is [SKRepeatModeClamp](../skrepeatmode/clamp.md).

## See Also

### Interpolation Modifiers

- [interpolationMode](interpolationmode.md): The mode used to determine how values for times between the keyframes are calculated.
