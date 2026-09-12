> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/autohidesscrollers](https://developer.apple.com/documentation/appkit/nsscrollview/autohidesscrollers)

# autohidesScrollers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

## Declaration

```swift
var autohidesScrollers: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The horizontal and vertical scroll bars are hidden independently of each other. When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the content of the scroll view doesn’t extend beyond the size of the clip view on a given axis, the scroller on that axis is removed to leave more room for the content.

> **Note**

>  The `autohidesScrollers` property introduced in OS X v10.3, while still relevant for legacy-style scrollers, does not apply to the automatic hiding behavior of overlay-style scrollers. The property may still be set, but is ignored by a scroll view that’s using overlay scrollers.

## See Also

### Related Documentation

- [scrollerStyle](scrollerstyle.md): The scroller style used by the scroll view.

### Managing Scrollers

- [horizontalScroller](horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.

# autohidesScrollers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view automatically hides its scroll bars when they are not needed.

## Declaration

```objectivec
@property BOOL autohidesScrollers;
```

<a id="Discussion"></a>

## Discussion

The horizontal and vertical scroll bars are hidden independently of each other. When the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the content of the scroll view doesn’t extend beyond the size of the clip view on a given axis, the scroller on that axis is removed to leave more room for the content.

> **Note**

>  The `autohidesScrollers` property introduced in OS X v10.3, while still relevant for legacy-style scrollers, does not apply to the automatic hiding behavior of overlay-style scrollers. The property may still be set, but is ignored by a scroll view that’s using overlay scrollers.

## See Also

### Related Documentation

- [scrollerStyle](scrollerstyle.md): The scroller style used by the scroll view.

### Managing Scrollers

- [horizontalScroller](horizontalscroller.md): The scroll view’s horizontal scroller.
- [hasHorizontalScroller](hashorizontalscroller.md): A Boolean that indicates whether the scroll view has a horizontal scroller.
- [verticalScroller](verticalscroller.md): The scroll view’s vertical scroller.
- [hasVerticalScroller](hasverticalscroller.md): A Boolean that indicates whether the scroll view has a vertical scroller.
