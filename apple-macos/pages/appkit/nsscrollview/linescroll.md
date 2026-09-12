> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/linescroll](https://developer.apple.com/documentation/appkit/nsscrollview/linescroll)

# lineScroll (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s line by line scroll amount.

## Declaration

```swift
var lineScroll: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount by which the scroll view scrolls itself when scrolling line by line, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows without holding down a modifier key. When displaying text in a scroll view, for example, you might set this value to the height of a single line of text in the default font. As part of its implementation, this property accesses [verticalLineScroll](verticallinescroll.md).

Note that a scroll view can have two different line scroll amounts: [verticalLineScroll](verticallinescroll.md) and [horizontalLineScroll](horizontallinescroll.md). Set this property only if you can be sure they’re both the same; setting this property sets both [verticalLineScroll](verticallinescroll.md) and [horizontalLineScroll](horizontallinescroll.md) to the same value.

## See Also

### Setting Scrolling Behavior

- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

# lineScroll (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s line by line scroll amount.

## Declaration

```objectivec
@property CGFloat lineScroll;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount by which the scroll view scrolls itself when scrolling line by line, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows without holding down a modifier key. When displaying text in a scroll view, for example, you might set this value to the height of a single line of text in the default font. As part of its implementation, this property accesses [verticalLineScroll](verticallinescroll.md).

Note that a scroll view can have two different line scroll amounts: [verticalLineScroll](verticallinescroll.md) and [horizontalLineScroll](horizontallinescroll.md). Set this property only if you can be sure they’re both the same; setting this property sets both [verticalLineScroll](verticallinescroll.md) and [horizontalLineScroll](horizontallinescroll.md) to the same value.

## See Also

### Setting Scrolling Behavior

- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel:](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.
