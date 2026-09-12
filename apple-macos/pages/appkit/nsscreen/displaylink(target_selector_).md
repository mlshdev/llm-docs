> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/displaylink(target:selector:)](https://developer.apple.com/documentation/appkit/nsscreen/displaylink(target:selector:))

# displayLink(target:selector:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the screen is on.

## Declaration

```swift
func displayLink(target: Any, selector: Selector) -> CADisplayLink
```

<a id="discussion"></a>

## Discussion

Note that views and windows can move between screens and you may want to get a display link directly from `NSView` or `NSWindow` which will track those changes automatically.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the screen is on.

## Declaration

```objectivec
- (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) selector;
```

<a id="discussion"></a>

## Discussion

Note that views and windows can move between screens and you may want to get a display link directly from `NSView` or `NSWindow` which will track those changes automatically.
