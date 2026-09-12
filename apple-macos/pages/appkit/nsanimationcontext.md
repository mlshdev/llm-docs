> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimationcontext](https://developer.apple.com/documentation/appkit/nsanimationcontext)

# NSAnimationContext (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An animation context, which contains information about environment and state.

## Declaration

```swift
class NSAnimationContext
```

<a id="overview"></a>

## Overview

[NSAnimationContext](nsanimationcontext.md) is analogous to [CATransaction](https://developer.apple.com/documentation/quartzcore/catransaction) and is similar in overall concept to [NSGraphicsContext](nsgraphicscontext.md). Each thread maintains its own stack of nestable [NSAnimationContext](nsanimationcontext.md) instances, with each new instance initialized as a copy of the instance below (so, inheriting its current properties).

Multiple [NSAnimationContext](nsanimationcontext.md) instances can be nested, allowing a given block of code to initiate animations using its own specified duration without affecting animations initiated by surrounding code.

```objc
[NSAnimationContext beginGrouping];
// Animate enclosed operations with a duration of 1 second
[[NSAnimationContext currentContext] setDuration:1.0];
[[aView animator] setFrame:newFrame];
...
    [NSAnimationContext beginGrouping];
    // Animate alpha fades with half-second duration
    [[NSAnimationContext currentContext] setDuration:0.5];
    [[aView animator] setAlphaValue:0.75];
    [[bView animator] setAlphaValue:0.75];
    [NSAnimationContext endGrouping];
...
// Will animate with a duration of 1 second
[[bView animator] setFrame:secondFrame];
[NSAnimationContext endGrouping];
```

## Topics

### Grouping Transactions

- [beginGrouping()](nsanimationcontext/begingrouping%28%29.md): Creates a new animation grouping.
- [endGrouping()](nsanimationcontext/endgrouping%28%29.md): Ends the current animation grouping.

### Getting the Current Animation Context

- [current](nsanimationcontext/current.md): Returns the current animation context.

### Animation Completion Handlers

- [completionHandler](nsanimationcontext/completionhandler.md): A completion Block that is called when the animations in the grouping are completed.
- [runAnimationGroup(\_:completionHandler:)](nsanimationcontext/runanimationgroup%28__completionhandler_%29.md): Allows you to specify a completion block body after the set of animation actions whose completion will trigger the completion block.

### Modifying the Animation Duration

- [duration](nsanimationcontext/duration.md): The duration used by animations created as a result of setting new values for an animatable property.
- [timingFunction](nsanimationcontext/timingfunction.md): The timing function used for all animations within this animation proxy group.

### Implicit Animation

- [allowsImplicitAnimation](nsanimationcontext/allowsimplicitanimation.md): Determine if animations are enabled or not for animations that occur as a result of another property change.

### Type Methods

- [runAnimationGroup(\_:)](nsanimationcontext/runanimationgroup%28__%29.md)
- [animate(\_:changes:completion:)](nsanimationcontext/animate%28__changes_completion_%29.md): Animate changes to one or more views using the specified SwiftUI animation.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimation.Progress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.

# NSAnimationContext (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.5+

An animation context, which contains information about environment and state.

## Declaration

```objectivec
@interface NSAnimationContext : NSObject
```

<a id="overview"></a>

## Overview

[NSAnimationContext](nsanimationcontext.md) is analogous to [CATransaction](https://developer.apple.com/documentation/quartzcore/catransaction) and is similar in overall concept to [NSGraphicsContext](nsgraphicscontext.md). Each thread maintains its own stack of nestable [NSAnimationContext](nsanimationcontext.md) instances, with each new instance initialized as a copy of the instance below (so, inheriting its current properties).

Multiple [NSAnimationContext](nsanimationcontext.md) instances can be nested, allowing a given block of code to initiate animations using its own specified duration without affecting animations initiated by surrounding code.

```objc
[NSAnimationContext beginGrouping];
// Animate enclosed operations with a duration of 1 second
[[NSAnimationContext currentContext] setDuration:1.0];
[[aView animator] setFrame:newFrame];
...
    [NSAnimationContext beginGrouping];
    // Animate alpha fades with half-second duration
    [[NSAnimationContext currentContext] setDuration:0.5];
    [[aView animator] setAlphaValue:0.75];
    [[bView animator] setAlphaValue:0.75];
    [NSAnimationContext endGrouping];
...
// Will animate with a duration of 1 second
[[bView animator] setFrame:secondFrame];
[NSAnimationContext endGrouping];
```

## Topics

### Grouping Transactions

- [beginGrouping](nsanimationcontext/begingrouping%28%29.md): Creates a new animation grouping.
- [endGrouping](nsanimationcontext/endgrouping%28%29.md): Ends the current animation grouping.

### Getting the Current Animation Context

- [currentContext](nsanimationcontext/current.md): Returns the current animation context.

### Animation Completion Handlers

- [completionHandler](nsanimationcontext/completionhandler.md): A completion Block that is called when the animations in the grouping are completed.
- [runAnimationGroup:completionHandler:](nsanimationcontext/runanimationgroup%28__completionhandler_%29.md): Allows you to specify a completion block body after the set of animation actions whose completion will trigger the completion block.

### Modifying the Animation Duration

- [duration](nsanimationcontext/duration.md): The duration used by animations created as a result of setting new values for an animatable property.
- [timingFunction](nsanimationcontext/timingfunction.md): The timing function used for all animations within this animation proxy group.

### Implicit Animation

- [allowsImplicitAnimation](nsanimationcontext/allowsimplicitanimation.md): Determine if animations are enabled or not for animations that occur as a result of another property change.

### Type Methods

- [runAnimationGroup:](nsanimationcontext/runanimationgroup%28__%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### View-Based Animations

- [NSViewAnimation](nsviewanimation.md): An animation of an app’s views, limited to changes in frame location and size, and to fade-in and fade-out effects.
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md): A set of methods that defines a way to add animation to an existing class with a minimum of API impact.
- [NSAnimationProgress](nsanimation/progress.md): The animation progress, as a floating-point number between `0.0` and `1.0`.
- [NSAnimationEffect](nsanimationeffect.md): Deprecated. The type for standard system animation effects, which include both display and sound.
