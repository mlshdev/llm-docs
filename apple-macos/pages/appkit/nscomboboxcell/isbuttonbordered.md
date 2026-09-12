> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/isbuttonbordered](https://developer.apple.com/documentation/appkit/nscomboboxcell/isbuttonbordered)

# isButtonBordered (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the combo box button displays a border.

## Declaration

```swift
var isButtonBordered: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button has a border; when it is [false](https://developer.apple.com/documentation/swift/false), the button is borderless. For example, it is often useful when using a combo box in an [NSTableView](../nstableview.md) to display the button without a border.

## See Also

### Setting Display Attributes

- [hasVerticalScroller](hasverticalscroller.md): A Boolean value that indicates if the combo box displays a vertical scroller.
- [intercellSpacing](intercellspacing.md): The spacing between cells in the combo box’s pop-up list.
- [itemHeight](itemheight.md): The height of each item in the combo box’s pop-up list.
- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.

# buttonBordered (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the combo box button displays a border.

## Declaration

```objectivec
@property (getter=isButtonBordered) BOOL buttonBordered;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the button has a border; when it is [false](https://developer.apple.com/documentation/swift/false), the button is borderless. For example, it is often useful when using a combo box in an [NSTableView](../nstableview.md) to display the button without a border.

## See Also

### Setting Display Attributes

- [hasVerticalScroller](hasverticalscroller.md): A Boolean value that indicates if the combo box displays a vertical scroller.
- [intercellSpacing](intercellspacing.md): The spacing between cells in the combo box’s pop-up list.
- [itemHeight](itemheight.md): The height of each item in the combo box’s pop-up list.
- [numberOfVisibleItems](numberofvisibleitems.md): The maximum number of items visible in the pop-up list at any one time.
