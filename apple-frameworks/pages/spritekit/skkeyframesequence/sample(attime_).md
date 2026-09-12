> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/sample(attime:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/sample(attime:))

# sample(atTime:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calculates the sample at a particular time.

## Declaration

```swift
func sample(atTime time: CGFloat) -> Any?
```

## Parameters

- `time`: The time value to sample.

<a id="return-value"></a>

## Return Value

An object that contains the interpolated sample. The class of this object matches the class of the values stored in the keyframe sequence — either an [NSNumber](../../foundation/nsnumber.md) or an `SKColor`.

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)

# sampleAtTime: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Calculates the sample at a particular time.

## Declaration

```objectivec
- (id) sampleAtTime:(CGFloat) time;
```

## Parameters

- `time`: The time value to sample.

<a id="return-value"></a>

## Return Value

An object that contains the interpolated sample. The class of this object matches the class of the values stored in the keyframe sequence — either an [NSNumber](../../foundation/nsnumber.md) or an `SKColor`.

## Mentioned In

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md)
