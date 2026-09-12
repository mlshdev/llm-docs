> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspathcelldelegate/pathcell(_:willpopup:)](https://developer.apple.com/documentation/appkit/nspathcelldelegate/pathcell(_:willpopup:))

# pathCell(\_:willPopUp:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Implement this method to customize the menu of a pop-up–style path.

## Declaration

```swift
@MainActor optional func pathCell(_ pathCell: NSPathCell, willPopUp menu: NSMenu)
```

## Parameters

- `pathCell`: The path cell that sent the message.
- `menu`: The pop-up menu to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the pop-up menu is shown. At this time, you can further customize the menu as required, adding and removing items. This method is called only when the style is set to `NSPathStylePopUp`.

Implementation of this method is optional.

# pathCell:willPopUpMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Implement this method to customize the menu of a pop-up–style path.

## Declaration

```objectivec
- (void) pathCell:(NSPathCell *) pathCell willPopUpMenu:(NSMenu *) menu;
```

## Parameters

- `pathCell`: The path cell that sent the message.
- `menu`: The pop-up menu to be displayed.

<a id="Discussion"></a>

## Discussion

This method is called before the pop-up menu is shown. At this time, you can further customize the menu as required, adding and removing items. This method is called only when the style is set to `NSPathStylePopUp`.

Implementation of this method is optional.
