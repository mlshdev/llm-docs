> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewimplicitlyanimating](https://developer.apple.com/documentation/uikit/uiviewimplicitlyanimating)

# UIViewImplicitlyAnimating (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An interface for modifying an animation while it’s running.

## Declaration

```swift
@MainActor protocol UIViewImplicitlyAnimating : UIViewAnimating
```

<a id="overview"></a>

## Overview

Animator objects used in interruptible view controller transitions adopt the [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md) protocol to modify in-flight transition animations. This protocol also conforms to the [UIViewAnimating](uiviewanimating.md) protocol, which specifies methods for starting and stopping animations and for updating their state.

The [UIViewPropertyAnimator](uiviewpropertyanimator.md) class adopts this protocol and implements all of its methods. You can adopt this protocol in your own classes to implement custom animator objects. When adopting this protocol, it’s recommended that you implement all of the methods.

## Topics

### Modifying animations

- [addAnimations(\_:)](uiviewimplicitlyanimating/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations(\_:delayFactor:)](uiviewimplicitlyanimating/addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion(\_:)](uiviewimplicitlyanimating/addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimation(withTimingParameters:durationFactor:)](uiviewimplicitlyanimating/continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIViewAnimating](uiviewanimating.md)

### Conforming Types

- [UIViewPropertyAnimator](uiviewpropertyanimator.md)

# UIViewImplicitlyAnimating (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An interface for modifying an animation while it’s running.

## Declaration

```objectivec
@protocol UIViewImplicitlyAnimating <UIViewAnimating>
```

<a id="overview"></a>

## Overview

Animator objects used in interruptible view controller transitions adopt the [UIViewImplicitlyAnimating](uiviewimplicitlyanimating.md) protocol to modify in-flight transition animations. This protocol also conforms to the [UIViewAnimating](uiviewanimating.md) protocol, which specifies methods for starting and stopping animations and for updating their state.

The [UIViewPropertyAnimator](uiviewpropertyanimator.md) class adopts this protocol and implements all of its methods. You can adopt this protocol in your own classes to implement custom animator objects. When adopting this protocol, it’s recommended that you implement all of the methods.

## Topics

### Modifying animations

- [addAnimations:](uiviewimplicitlyanimating/addanimations%28__%29.md): Adds the specified animation block to the animator.
- [addAnimations:delayFactor:](uiviewimplicitlyanimating/addanimations%28__delayfactor_%29.md): Adds the specified animation block to the animator with a delay.
- [addCompletion:](uiviewimplicitlyanimating/addcompletion%28__%29.md): Adds the specified completion block to the animator.
- [continueAnimationWithTimingParameters:durationFactor:](uiviewimplicitlyanimating/continueanimation%28withtimingparameters_durationfactor_%29.md): Adjusts the final timing and duration of a paused animation.

## Relationships

### Inherits From

- [UIViewAnimating](uiviewanimating.md)

### Conforming Types

- [UIViewPropertyAnimator](uiviewpropertyanimator.md)
