> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/flashscrollers()](https://developer.apple.com/documentation/appkit/nsscrollview/flashscrollers())

# flashScrollers() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Flash the overlay scroll bars.

## Declaration

```swift
func flashScrollers()
```

<a id="Discussion"></a>

## Discussion

This method only applies to scroll views that use overlay scrollers.

This method can be invoked to cause the overlay scroller knobs to be momentarily shown. This may be desirable when changing a document view’s size or swapping new content into the view, or to give the user a sense of the current position within the scrollable range at each step of an incremental search or similar operation.

# flashScrollers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Flash the overlay scroll bars.

## Declaration

```objectivec
- (void) flashScrollers;
```

<a id="Discussion"></a>

## Discussion

This method only applies to scroll views that use overlay scrollers.

This method can be invoked to cause the overlay scroller knobs to be momentarily shown. This may be desirable when changing a document view’s size or swapping new content into the view, or to give the user a sense of the current position within the scrollable range at each step of an incremental search or similar operation.
