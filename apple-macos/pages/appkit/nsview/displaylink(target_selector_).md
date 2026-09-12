> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/displaylink(target:selector:)](https://developer.apple.com/documentation/appkit/nsview/displaylink(target:selector:))

# displayLink(target:selector:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the view is on.

## Declaration

```swift
func displayLink(target: Any, selector: Selector) -> CADisplayLink
```

<a id="discussion"></a>

## Discussion

If the view is hidden, or not on any display, the callback will not be invoked.

# displayLinkWithTarget:selector: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns a new display link whose callback will be invoked in-sync with the display the view is on.

## Declaration

```objectivec
- (CADisplayLink *) displayLinkWithTarget:(id) target selector:(SEL) selector;
```

<a id="discussion"></a>

## Discussion

If the view is hidden, or not on any display, the callback will not be invoked.
