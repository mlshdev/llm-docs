> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/horizontalscroller](https://developer.apple.com/documentation/appkit/nsscrollview/horizontalscroller)

# horizontalScroller (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s horizontal scroller.

## Declaration

```swift
var horizontalScroller: NSScroller? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scroll view has no horizontal scroller.

You can access the horizontal scroller using this property even if the scroll view isn’t currently displaying it. To make sure the scroller is visible, set [hasHorizontalScroller](hashorizontalscroller.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Scrollers

- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

# horizontalScroller (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s horizontal scroller.

## Declaration

```objectivec
@property (strong, nullable) NSScroller * horizontalScroller;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scroll view has no horizontal scroller.

You can access the horizontal scroller using this property even if the scroll view isn’t currently displaying it. To make sure the scroller is visible, set [hasHorizontalScroller](hashorizontalscroller.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Scrollers

- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.
