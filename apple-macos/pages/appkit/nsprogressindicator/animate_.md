> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/animate:](https://developer.apple.com/documentation/appkit/nsprogressindicator/animate:)

# animate:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

This action method advances the progress animation of an indeterminate progress animator by one step.

> `NSProgressIndicator` no longer supports incrementing the animation using this method. Use the [startAnimation:](startanimation%28__%29.md) and [stopAnimation:](stopanimation%28__%29.md) methods to perform animation of the progress indicator.

## Declaration

```objectivec
- (void) animate:(id) sender;
```

## Parameters

- `sender`: The object sending the message.

## See Also

### Animating the progress indicator

- [startAnimation:](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.
- [animationDelay](animationdelay.md): Deprecated. Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.
- [setAnimationDelay:](setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.
