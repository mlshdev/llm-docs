> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/scrollsdynamically](https://developer.apple.com/documentation/appkit/nsscrollview/scrollsdynamically)

# scrollsDynamically (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.

## Declaration

```swift
var scrollsDynamically: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view redraws its document view while scrolling. When the value of this property is[false](https://developer.apple.com/documentation/swift/false), the scroll view redraws only when the scroller knob is released. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

# scrollsDynamically (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.

## Declaration

```objectivec
@property BOOL scrollsDynamically;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the scroll view redraws its document view while scrolling. When the value of this property is[false](https://developer.apple.com/documentation/swift/false), the scroll view redraws only when the scroller knob is released. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollWheel:](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.
