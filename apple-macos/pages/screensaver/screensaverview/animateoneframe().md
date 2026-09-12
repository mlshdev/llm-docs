> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/animateoneframe()](https://developer.apple.com/documentation/screensaver/screensaverview/animateoneframe())

# animateOneFrame() (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Advances the screen saver’s animation by a single frame.

## Declaration

```swift
func animateOneFrame()
```

<a id="Discussion"></a>

## Discussion

The system calls this method each time the timer animating the screen saver fires. The time between calls to this method is always at least [animationTimeInterval](animationtimeinterval.md). The system locks focus on your view before it calls this method, so you can use this method to draw content. You can also let [draw(\_:)](draw%28__%29.md) perform the drawing, in which case you use this method to call [setNeedsDisplay(\_:)](../../appkit/nsview/setneedsdisplay%28__%29.md) to mark your view as dirty. The default implementation of this method does nothing.

## See Also

### Animating the screen saver

- [startAnimation()](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [stopAnimation()](stopanimation%28%29.md): Deactivates the timer that advances the animation.
- [isAnimating](isanimating.md): A Boolean value that indicates whether the screen saver is animating.

# animateOneFrame (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Advances the screen saver’s animation by a single frame.

## Declaration

```objectivec
- (void) animateOneFrame;
```

<a id="Discussion"></a>

## Discussion

The system calls this method each time the timer animating the screen saver fires. The time between calls to this method is always at least [animationTimeInterval](animationtimeinterval.md). The system locks focus on your view before it calls this method, so you can use this method to draw content. You can also let [drawRect:](draw%28__%29.md) perform the drawing, in which case you use this method to call [setNeedsDisplayInRect:](../../appkit/nsview/setneedsdisplay%28__%29.md) to mark your view as dirty. The default implementation of this method does nothing.

## See Also

### Animating the screen saver

- [startAnimation](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [stopAnimation](stopanimation%28%29.md): Deactivates the timer that advances the animation.
- [animating](isanimating.md): A Boolean value that indicates whether the screen saver is animating.
