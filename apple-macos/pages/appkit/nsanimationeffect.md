> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationeffect](https://developer.apple.com/documentation/appkit/nsanimationeffect)

# NSAnimationEffect (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The type for standard system animation effects, which include both display and sound.

> Use +\[NSCursor disappearingItemCursor\] instead

## Declaration

```swift
enum NSAnimationEffect
```

<a id="overview"></a>

## Overview

These effects are used to indicate that an item was removed from a collection, such as a toolbar, without deleting the underlying data. See [NSShowAnimationEffect](nsshowanimationeffect.md).

## Topics

### Constants

- [NSAnimationEffect.disappearingItemDefault](nsanimationeffect/disappearingitemdefault.md): Deprecated. The default effect.
- [NSAnimationEffect.poof](nsanimationeffect/poof.md): Deprecated. An effect showing a puff of smoke.

### Instance Methods

- [show(centeredAt:size:completionHandler:)](nsanimationeffect/show%28centeredat_size_completionhandler_%29.md): Deprecated.

### Initializers

- [init(rawValue:)](nsanimationeffect/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimation.Progress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.

# NSAnimationEffect (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.3+ (deprecated in 14.0)

The type for standard system animation effects, which include both display and sound.

> Use +\[NSCursor disappearingItemCursor\] instead

## Declaration

```objectivec
enum NSAnimationEffect : NSUInteger;
```

<a id="overview"></a>

## Overview

These effects are used to indicate that an item was removed from a collection, such as a toolbar, without deleting the underlying data. See [NSShowAnimationEffect](nsshowanimationeffect.md).

## Topics

### Constants

- [NSAnimationEffectDisappearingItemDefault](nsanimationeffect/disappearingitemdefault.md): Deprecated. The default effect.
- [NSAnimationEffectPoof](nsanimationeffect/poof.md): Deprecated. An effect showing a puff of smoke.

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationContext](nsanimationcontext.md): An animation context, which contains information about environment and state.
- [NSAnimationProgress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
