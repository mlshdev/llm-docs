> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/verticallinescroll](https://developer.apple.com/documentation/appkit/nsscrollview/verticallinescroll)

# verticalLineScroll (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical line by line scroll amount.

## Declaration

```swift
var verticalLineScroll: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount by which the scroll view scrolls itself vertically when scrolling line by line, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows on the vertical scroll bar without holding down a modifier key.

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel(with:)](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.

# verticalLineScroll (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The scroll view’s vertical line by line scroll amount.

## Declaration

```objectivec
@property CGFloat verticalLineScroll;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the amount by which the scroll view scrolls itself vertically when scrolling line by line, expressed in the content view’s coordinate system. This value is used when the user clicks the scroll arrows on the vertical scroll bar without holding down a modifier key.

## See Also

### Setting Scrolling Behavior

- [lineScroll](linescroll.md): The scroll view’s line by line scroll amount.
- [horizontalLineScroll](horizontallinescroll.md): The scroll view’s horizontal line by line scroll amount.
- [pageScroll](pagescroll.md): The amount of the document view kept visible when scrolling page by page.
- [horizontalPageScroll](horizontalpagescroll.md): The amount of the document view kept visible when scrolling horizontally page by page.
- [verticalPageScroll](verticalpagescroll.md): The amount of the document view kept visible when scrolling vertically page by page.
- [scrollsDynamically](scrollsdynamically.md): A Boolean that indicates whether the scroll view redraws its document view while scrolling continuously.
- [scrollWheel:](scrollwheel%28with_%29.md): Scrolls the receiver up or down, in response to the user moving the mouse’s scroll wheel specified by `theEvent`.
