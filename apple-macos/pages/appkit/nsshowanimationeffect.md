> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsshowanimationeffect](https://developer.apple.com/documentation/appkit/nsshowanimationeffect)

# NSShowAnimationEffect

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 14.0)

Runs a system animation effect.

> Use [disappearingItemCursor](nscursor/disappearingitem.md) instead.

## Declaration

```objectivec
extern void NSShowAnimationEffect(NSAnimationEffect animationEffect, NSPoint centerLocation, NSSize size, id animationDelegate, SEL didEndSelector, void *contextInfo);
```

## Parameters

- `animationEffect`: The type of animation you want to apply.
- `centerLocation`: The location at which to show the animated image, specified in screen coordinates. The animation is centered on the point you specify.
- `size`: The desired size of the animated image. Specify [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) to perform the animation at the default size.
- `animationDelegate`: The object to notify when the animation completes. Specify `nil` if you do not need to be notified when the animation completes.
- `didEndSelector`: The selector of `animationDelegate` to call when the animation completes. Specify `nil` if you do not need to be notified when the animation completes. If you specify a selector, the corresponding method should have the following signature:

  ```objc
      - (void)animationEffectDidEnd:(void *)contextInfo;
  ```
- `contextInfo`: A pointer to any optional information you want passed as a parameter to the selector in the `didEndSelector` parameter.

<a id="Discussion"></a>

## Discussion

This function runs one of the standard system animation effects, which includes display and sound. For example, you can use this function to display the puff of smoke effect. For a complete list of animation effects, see [NSAnimationEffect](nsanimationeffect.md).
