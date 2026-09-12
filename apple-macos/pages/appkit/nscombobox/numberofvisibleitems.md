> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/numberofvisibleitems](https://developer.apple.com/documentation/appkit/nscombobox/numberofvisibleitems)

# numberOfVisibleItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of visible items to display in the pop-up list at one time.

## Declaration

```swift
var numberOfVisibleItems: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure how many items can be displayed at the same time. If the combo box has a scroller, the user can scroll to view additional items beyond the visible range.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

### Setting Display Attributes

- [hasVerticalScroller](hasverticalscroller.md): A Boolean value indicating whether the combo box has a vertical scroller.
- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [isButtonBordered](isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](itemheight.md): The height of each item in the pop-up list.

# numberOfVisibleItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum number of visible items to display in the pop-up list at one time.

## Declaration

```objectivec
@property NSInteger numberOfVisibleItems;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure how many items can be displayed at the same time. If the combo box has a scroller, the user can scroll to view additional items beyond the visible range.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The total number of items in the pop-up list.

### Setting Display Attributes

- [hasVerticalScroller](hasverticalscroller.md): A Boolean value indicating whether the combo box has a vertical scroller.
- [intercellSpacing](intercellspacing.md): The horizontal and vertical spacing between cells in the pop-up list.
- [buttonBordered](isbuttonbordered.md): A Boolean value indicating whether the combo box displays a border.
- [itemHeight](itemheight.md): The height of each item in the pop-up list.
