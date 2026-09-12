> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/blockingmode/nonblockingthreaded](https://developer.apple.com/documentation/appkit/nsanimation/blockingmode/nonblockingthreaded)

# NSAnimation.BlockingMode.nonblockingThreaded (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.

## Declaration

```swift
case nonblockingThreaded
```

<a id="Discussion"></a>

## Discussion

The secondary thread has its own run loop.

## See Also

### Constants

- [NSAnimation.BlockingMode.blocking](blocking.md): Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.
- [NSAnimation.BlockingMode.nonblocking](nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.

# NSAnimationNonblockingThreaded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.

## Declaration

```objectivec
NSAnimationNonblockingThreaded
```

<a id="Discussion"></a>

## Discussion

The secondary thread has its own run loop.

## See Also

### Constants

- [NSAnimationBlocking](blocking.md): Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.
- [NSAnimationNonblocking](nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.
