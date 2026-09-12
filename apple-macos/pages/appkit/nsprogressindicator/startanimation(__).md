> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/startanimation(_:)](https://developer.apple.com/documentation/appkit/nsprogressindicator/startanimation(_:))

# startAnimation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the animation of an indeterminate progress indicator.

## Declaration

```swift
func startAnimation(_ sender: Any?)
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

Does nothing for a determinate progress indicator.

## See Also

### Related Documentation

- [Progress Indicator Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgIndic/ProgIndic.html#//apple_ref/doc/uid/10000024i)

### Animating the progress indicator

- [stopAnimation(\_:)](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.

# startAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Starts the animation of an indeterminate progress indicator.

## Declaration

```objectivec
- (void) startAnimation:(id) sender;
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

Does nothing for a determinate progress indicator.

## See Also

### Related Documentation

- [Progress Indicator Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgIndic/ProgIndic.html#//apple_ref/doc/uid/10000024i)

### Animating the progress indicator

- [stopAnimation:](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.
- [animate:](animate_.md): Deprecated. This action method advances the progress animation of an indeterminate progress animator by one step.
- [animationDelay](animationdelay.md): Deprecated. Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.
- [setAnimationDelay:](setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.
