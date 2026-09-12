> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/stopanimation()](https://developer.apple.com/documentation/screensaver/screensaverview/stopanimation())

# stopAnimation() (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Deactivates the timer that advances the animation.

## Declaration

```swift
func stopAnimation()
```

<a id="Discussion"></a>

## Discussion

The system calls this method when it’s time for you to stop animating your screen saver’s content. The system calls this method only once at the end of animations. Use this method to unload expensive resources or to reset your screen saver to a known state. If you override this method, you must call the inherited implementation at some point.

## See Also

### Animating the screen saver

- [startAnimation()](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame()](animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [isAnimating](isanimating.md): A Boolean value that indicates whether the screen saver is animating.

# stopAnimation (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Deactivates the timer that advances the animation.

## Declaration

```objectivec
- (void) stopAnimation;
```

<a id="Discussion"></a>

## Discussion

The system calls this method when it’s time for you to stop animating your screen saver’s content. The system calls this method only once at the end of animations. Use this method to unload expensive resources or to reset your screen saver to a known state. If you override this method, you must call the inherited implementation at some point.

## See Also

### Animating the screen saver

- [startAnimation](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame](animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [animating](isanimating.md): A Boolean value that indicates whether the screen saver is animating.
