> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/hasverticalscroller](https://developer.apple.com/documentation/appkit/nscombobox/hasverticalscroller)

# hasVerticalScroller (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box has a vertical scroller.

## Declaration

```swift
var hasVerticalScroller: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box displays a vertical scroller even when the pop-up list contains few enough items that a scroller is not needed. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) and the combo box has more list items (either in its internal item list or from its data source) than are allowed by [numberOfVisibleItems](numberofvisibleitems.md), only a subset of items are displayed. The `NSComboBox` class’ `scroll...` methods can be used to position this subset within the pop-up list.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
- [scrollItemAtIndexToTop(\_:)](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible(\_:)](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [isButtonBordered](isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](itemheight.md): The height of each item in the pop-up list.
- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of visible items to display in the pop-up list at one time.

# hasVerticalScroller (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box has a vertical scroller.

## Declaration

```objectivec
@property BOOL hasVerticalScroller;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box displays a vertical scroller even when the pop-up list contains few enough items that a scroller is not needed. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the value of this property is [false](https://developer.apple.com/documentation/swift/false) and the combo box has more list items (either in its internal item list or from its data source) than are allowed by [numberOfVisibleItems](numberofvisibleitems.md), only a subset of items are displayed. The `NSComboBox` class’ `scroll...` methods can be used to position this subset within the pop-up list.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.
- [scrollItemAtIndexToTop:](scrollitematindextotop%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is as close to the top as possible.
- [scrollItemAtIndexToVisible:](scrollitematindextovisible%28__%29.md): Scrolls the receiver’s pop-up list vertically so that the item at the specified index is visible.

### Setting Display Attributes

- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [buttonBordered](isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](itemheight.md): The height of each item in the pop-up list.
- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of visible items to display in the pop-up list at one time.
