> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprogressindicator/animationdelay](https://developer.apple.com/documentation/appkit/nsprogressindicator/animationdelay)

# animationDelay

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the delay, in seconds, between animation steps for an indeterminate progress indicator.

> Progress indicators no longer allow the animation delay to be set.

## Declaration

```objectivec
- (NSTimeInterval) animationDelay;
```

<a id="return-value"></a>

## Return Value

The delay between animation steps. By default, the animation delay is set to 1/12 of a second (5.0/60.0). A determinate progress indicator does not use the animation delay value.

## See Also

### Animating the progress indicator

- [startAnimation:](startanimation%28__%29.md): Starts the animation of an indeterminate progress indicator.
- [stopAnimation:](stopanimation%28__%29.md): Stops the animation of an indeterminate progress indicator.
- [usesThreadedAnimation](usesthreadedanimation.md): A Boolean that indicates whether the progress indicator implements animation in a separate thread.
- [animate:](animate_.md): Deprecated. This action method advances the progress animation of an indeterminate progress animator by one step.
- [setAnimationDelay:](setanimationdelay_.md): Deprecated. Sets the delay, in seconds, between animation steps for an indeterminate progress indicator.
