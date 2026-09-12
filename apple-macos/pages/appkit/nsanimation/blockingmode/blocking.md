> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/blockingmode/blocking](https://developer.apple.com/documentation/appkit/nsanimation/blockingmode/blocking)

# NSAnimation.BlockingMode.blocking (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.

## Declaration

```swift
case blocking
```

<a id="Discussion"></a>

## Discussion

This is the default.

## See Also

### Constants

- [NSAnimation.BlockingMode.nonblocking](nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.
- [NSAnimation.BlockingMode.nonblockingThreaded](nonblockingthreaded.md): Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.

# NSAnimationBlocking (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Requests the animation to run in the main thread in a custom run-loop mode that blocks user input.

## Declaration

```objectivec
NSAnimationBlocking
```

<a id="Discussion"></a>

## Discussion

This is the default.

## See Also

### Constants

- [NSAnimationNonblocking](nonblocking.md): Requests the animation to run in a standard or specified run-loop mode that allows user input.
- [NSAnimationNonblockingThreaded](nonblockingthreaded.md): Requests the animation to run in a separate thread that is spawned by the `NSAnimation` object.
