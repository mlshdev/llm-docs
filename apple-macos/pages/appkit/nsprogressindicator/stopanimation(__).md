> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/stopanimation(_:)](https://developer.apple.com/documentation/appkit/nsprogressindicator/stopanimation(_:))

# stopAnimation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the animation of an indeterminate progress indicator.

## Declaration

```swift
func stopAnimation(_ sender: Any?)
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

Does nothing for a determinate progress indicator.

## See Also

### Animating the progress indicator

- [startAnimation(\_:)](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.

# stopAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Stops the animation of an indeterminate progress indicator.

## Declaration

```objectivec
- (void) stopAnimation:(id) sender;
```

## Parameters

- `sender`: The object sending the message.

<a id="Discussion"></a>

## Discussion

Does nothing for a determinate progress indicator.

## See Also

### Animating the progress indicator

- [startAnimation:](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.
- [animate:](animate_.md): Deprecated. This action method advances the progress animation of an indeterminate progress animator by one step.
- [animationDelay](animationdelay.md): Deprecated. Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.
- [setAnimationDelay:](setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.
