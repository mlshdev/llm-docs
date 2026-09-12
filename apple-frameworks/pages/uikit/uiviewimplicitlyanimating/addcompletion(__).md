> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewimplicitlyanimating/addcompletion(_:)](https://developer.apple.com/documentation/uikit/uiviewimplicitlyanimating/addcompletion(_:))

# addCompletion(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified completion block to the animator.

## Declaration

```swift
optional func addCompletion(_ completion: @escaping (UIViewAnimatingPosition) -> Void)
```

```swift
optional func addCompletion() async -> UIViewAnimatingPosition
```

## Parameters

- `completion`: A block to execute when the animations finish. This block has no return value and takes the following parameter:

  - **finalPosition**: The position where the animations stopped. Use this value to specify whether the animations stopped at their starting point, their end point, or their current position.

<a id="Discussion"></a>

## Discussion

Use this method to add the completion blocks to your custom animator object. Completion blocks should execute after the animations finish successfully. If the [stopAnimation(\_:)](../uiviewanimating/stopanimation%28__%29.md) method is called, do not execute any completion blocks if the `withoutFinishing` parameter for that method contains the value [true](https://developer.apple.com/documentation/swift/true). If the parameter is [false](https://developer.apple.com/documentation/swift/false) and the client subsequent calls the [finishAnimation(at:)](../uiviewanimating/finishanimation%28at_%29.md) method, execute the completion blocks in your implementation of that method. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations(\_:)](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [continueAnimation(withTimingParameters:durationFactor:)](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.

# addCompletion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Adds the specified completion block to the animator.

## Declaration

```objectivec
- (void) addCompletion:(void (^)(UIViewAnimatingPosition finalPosition)) completion;
```

## Parameters

- `completion`: A block to execute when the animations finish. This block has no return value and takes the following parameter:

  - **finalPosition**: The position where the animations stopped. Use this value to specify whether the animations stopped at their starting point, their end point, or their current position.

<a id="Discussion"></a>

## Discussion

Use this method to add the completion blocks to your custom animator object. Completion blocks should execute after the animations finish successfully. If the [stopAnimation:](../uiviewanimating/stopanimation%28__%29.md) method is called, do not execute any completion blocks if the `withoutFinishing` parameter for that method contains the value [true](https://developer.apple.com/documentation/swift/true). If the parameter is [false](https://developer.apple.com/documentation/swift/false) and the client subsequent calls the [finishAnimationAtPosition:](../uiviewanimating/finishanimation%28at_%29.md) method, execute the completion blocks in your implementation of that method. Your implementation must be able to handle multiple calls to this method.

## See Also

### Modifying animations

- [addAnimations:](addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [continueAnimationWithTimingParameters:durationFactor:](continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.
