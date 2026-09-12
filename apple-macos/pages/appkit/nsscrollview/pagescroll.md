> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/pagescroll](https://developer.apple.com/documentation/appkit/nsscrollview/pagescroll)

# pageScroll (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount of the document view kept visible when scrolling page by page.

## Declaration

```swift
var pageScroll: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount of the document view kept visible when scrolling page by page, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows while holding down the Option key. As part of its implementation, this property accesses [verticalPageScroll](verticalpagescroll.md).

This amount expresses the context that remains when the scroll view scrolls by one page, allowing the user to orient to the new display. It differs from the line scroll amount, which indicates how far the document view moves. The page scroll amount is the amount common to the content view before and after the document view is scrolled by one page. Thus, setting the page scroll amount to `0.0` implies that the entire visible portion of the document view is replaced when a page scroll occurs.

Note that a scroll view can have two different page scroll amounts: [verticalPageScroll](verticalpagescroll.md) and [horizontalPageScroll](horizontalpagescroll.md). Set this property only if you can be sure they’re both the same; setting this property sets both [verticalPageScroll](verticalpagescroll.md) and [horizontalPageScroll](horizontalpagescroll.md) to the same value.

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

# pageScroll (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount of the document view kept visible when scrolling page by page.

## Declaration

```objectivec
@property CGFloat pageScroll;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount of the document view kept visible when scrolling page by page, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows while holding down the Option key. As part of its implementation, this property accesses [verticalPageScroll](verticalpagescroll.md).

This amount expresses the context that remains when the scroll view scrolls by one page, allowing the user to orient to the new display. It differs from the line scroll amount, which indicates how far the document view moves. The page scroll amount is the amount common to the content view before and after the document view is scrolled by one page. Thus, setting the page scroll amount to `0.0` implies that the entire visible portion of the document view is replaced when a page scroll occurs.

Note that a scroll view can have two different page scroll amounts: [verticalPageScroll](verticalpagescroll.md) and [horizontalPageScroll](horizontalpagescroll.md). Set this property only if you can be sure they’re both the same; setting this property sets both [verticalPageScroll](verticalpagescroll.md) and [horizontalPageScroll](horizontalpagescroll.md) to the same value.

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [verticalLineScroll](verticallinescroll.md): The scroll view’s vertical line by line scroll amount.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel:](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.
