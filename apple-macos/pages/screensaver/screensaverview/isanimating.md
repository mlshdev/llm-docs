> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/screensaver/screensaverview/isanimating](https://developer.apple.com/documentation/screensaver/screensaverview/isanimating)

# isAnimating (Swift)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver is animating.

## Declaration

```swift
var isAnimating: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the screen saver is animating, and [false](https://developer.apple.com/documentation/swift/false) when it isn’t.

## See Also

### Animating the screen saver

- [startAnimation()](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame()](animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [stopAnimation()](stopanimation%28%29.md): Deactivates the timer that advances the animation.

# animating (Objective-C)

**Framework:** Screen Saver  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A Boolean value that indicates whether the screen saver is animating.

## Declaration

```objectivec
@property (atomic, readonly, getter=isAnimating) BOOL animating;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the screen saver is animating, and [false](https://developer.apple.com/documentation/swift/false) when it isn’t.

## See Also

### Animating the screen saver

- [startAnimation](startanimation%28%29.md): Activates the periodic timer that animates the screen saver.
- [animateOneFrame](animateoneframe%28%29.md): Advances the screen saver’s animation by a single frame.
- [stopAnimation](stopanimation%28%29.md): Deactivates the timer that advances the animation.
