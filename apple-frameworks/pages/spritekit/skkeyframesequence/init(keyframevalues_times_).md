> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/init(keyframevalues:times:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/init(keyframevalues:times:))

# init(keyframeValues:times:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a keyframe sequence with an initial set of values and times.

## Declaration

```swift
init(keyframeValues values: [Any], times: [NSNumber])
```

## Parameters

- `values`: An array of value objects that define the keyframe values for the sequence.
- `times`: An array of [NSNumber](../../foundation/nsnumber.md) objects containing floating-point values that specify the time values for the keyframes.

<a id="return-value"></a>

## Return Value

A newly initialized sequence.

<a id="Discussion"></a>

## Discussion

The two arrays must have an identical number of elements. The keyframes in the new sequence are stored in the same order as the input arrays.

## See Also

### First Steps

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md): See a few examples of what keyframe sequence can do.
- [init(capacity:)](init%28capacity_%29.md): Initializes a new keyframe sequence.
- [init(coder:)](init%28coder_%29.md)

# initWithKeyframeValues:times: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a keyframe sequence with an initial set of values and times.

## Declaration

```objectivec
- (instancetype) initWithKeyframeValues:(NSArray *) values times:(NSArray<NSNumber *> *) times;
```

## Parameters

- `values`: An array of value objects that define the keyframe values for the sequence.
- `times`: An array of [NSNumber](../../foundation/nsnumber.md) objects containing floating-point values that specify the time values for the keyframes.

<a id="return-value"></a>

## Return Value

A newly initialized sequence.

<a id="Discussion"></a>

## Discussion

The two arrays must have an identical number of elements. The keyframes in the new sequence are stored in the same order as the input arrays.

## See Also

### First Steps

- [Using Keyframe Sequence to effect Custom Interpolation](../using-keyframe-sequence-to-effect-custom-interpolation.md): See a few examples of what keyframe sequence can do.
- [initWithCapacity:](init%28capacity_%29.md): Initializes a new keyframe sequence.
- [initWithCoder:](init%28coder_%29.md)
