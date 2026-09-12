> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/animationbehavior-swift.property](https://developer.apple.com/documentation/appkit/nswindow/animationbehavior-swift.property)

# animationBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The window’s automatic animation behavior.

## Declaration

```swift
var animationBehavior: NSWindow.AnimationBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

This property controls the automatic window animation behavior used when the [orderFront(\_:)](orderfront%28__%29.md) or [orderOut(\_:)](orderout%28__%29.md) methods are called. See [NSWindow.AnimationBehavior](animationbehavior-swift.enum.md) for the possible values of this property.

By default, a window’s animation behavior is set to [NSWindow.AnimationBehavior.default](animationbehavior-swift.enum/default.md), which causes AppKit to determine the style of animation to use automatically based on its inference of a window’s “type” from various window properties. A window’s animation behavior can be set to [NSWindow.AnimationBehavior.none](animationbehavior-swift.enum/none.md) to disable AppKit’s automatic animations for the window, which may be useful if that animation interferes with an animation that your application implements.

The animation behavior can also be set to one of the other non-default [NSWindow.AnimationBehavior](animationbehavior-swift.enum.md) values to override AppKit’s automatic inference of appropriate animation behavior based on the window’s apparent type, although this is not recommended.

# animationBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The window’s automatic animation behavior.

## Declaration

```objectivec
@property NSWindowAnimationBehavior animationBehavior;
```

<a id="Discussion"></a>

## Discussion

This property controls the automatic window animation behavior used when the [orderFront:](orderfront%28__%29.md) or [orderOut:](orderout%28__%29.md) methods are called. See [NSWindowAnimationBehavior](animationbehavior-swift.enum.md) for the possible values of this property.

By default, a window’s animation behavior is set to [NSWindowAnimationBehaviorDefault](animationbehavior-swift.enum/default.md), which causes AppKit to determine the style of animation to use automatically based on its inference of a window’s “type” from various window properties. A window’s animation behavior can be set to [NSWindowAnimationBehaviorNone](animationbehavior-swift.enum/none.md) to disable AppKit’s automatic animations for the window, which may be useful if that animation interferes with an animation that your application implements.

The animation behavior can also be set to one of the other non-default [NSWindowAnimationBehavior](animationbehavior-swift.enum.md) values to override AppKit’s automatic inference of appropriate animation behavior based on the window’s apparent type, although this is not recommended.
