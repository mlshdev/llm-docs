> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewpropertyanimator/addcompletion(_:)](https://developer.apple.com/documentation/uikit/uiviewpropertyanimator/addcompletion(_:))

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```swift
func addCompletion(_ completion: @escaping (UIViewAnimatingPosition) -> Void)
```

```swift
func addCompletion() async -> UIViewAnimatingPosition
```

## Parameters

- `completion`: A block to execute when the animations finish. This block has no return value and takes the following parameter:

  - **finalPosition**: The ending position of the animations. Use this value to determine whether the animations stopped at the beginning, end, or somewhere in the middle.

<a id="Discussion"></a>

## Discussion

Completion blocks are executed after the animations finish normally. If you call the [stopAnimation(\_:)](../uiviewanimating/stopanimation%28__%29.md) method, the completion blocks are not called if you specify [true](https://developer.apple.com/documentation/swift/true) for the method’s parameter. If you specify [false](https://developer.apple.com/documentation/swift/false) for the parameter, the animator executes the completion blocks normally after you call its [finishAnimation(at:)](../uiviewanimating/finishanimation%28at_%29.md) method.

You may add completion blocks to an animator at any time, including while it is stopped.

## See Also

### Modifying animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [continueAnimation(withTimingParameters:durationFactor:)](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```objectivec
- (void) addCompletion:(void (^)(UIViewAnimatingPosition finalPosition)) completion;
```

## Parameters

- `completion`: A block to execute when the animations finish. This block has no return value and takes the following parameter:

  - **finalPosition**: The ending position of the animations. Use this value to determine whether the animations stopped at the beginning, end, or somewhere in the middle.

<a id="Discussion"></a>

## Discussion

Completion blocks are executed after the animations finish normally. If you call the [stopAnimation:](../uiviewanimating/stopanimation%28__%29.md) method, the completion blocks are not called if you specify [true](https://developer.apple.com/documentation/swift/true) for the method’s parameter. If you specify [false](https://developer.apple.com/documentation/swift/false) for the parameter, the animator executes the completion blocks normally after you call its [finishAnimationAtPosition:](../uiviewanimating/finishanimation%28at_%29.md) method.

You may add completion blocks to an animator at any time, including while it is stopped.

## See Also

### Modifying animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block with a delay.
- [continueAnimationWithTimingParameters:durationFactor:](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the timing and duration of a paused animation.
