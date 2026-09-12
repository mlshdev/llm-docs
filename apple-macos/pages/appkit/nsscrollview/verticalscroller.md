> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/verticalscroller](https://developer.apple.com/documentation/appkit/nsscrollview/verticalscroller)

# verticalScroller (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical scroller.

## Declaration

```swift
var verticalScroller: NSScroller? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scroll view has no vertical scroller.

You can access the vertical scroller using this property even if the scroll view isn’t currently displaying it. To make sure the scroller is visible, set [hasVerticalScroller](hasverticalscroller.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Scrollers

- [horizontalScroller](horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

# verticalScroller (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical scroller.

## Declaration

```objectivec
@property (strong, nullable) NSScroller * verticalScroller;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the scroll view has no vertical scroller.

You can access the vertical scroller using this property even if the scroll view isn’t currently displaying it. To make sure the scroller is visible, set [hasVerticalScroller](hasverticalscroller.md) to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Scrollers

- [horizontalScroller](horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
- [autohidesScrollers](autohidesscrollers.md): A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.
