> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/synchronizetitleandselecteditem()](https://developer.apple.com/documentation/appkit/nspopupbutton/synchronizetitleandselecteditem())

# synchronizeTitleAndSelectedItem() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ensures that the item being displayed by the receiver agrees with the selected item.

## Declaration

```swift
func synchronizeTitleAndSelectedItem()
```

<a id="Discussion"></a>

## Discussion

If there’s no selected item, this method selects the first item in the item menu and sets the receiver’s item to match. For pull-down menus, this method makes sure that the first item is being displayed (the `NSPopUpButtonCell` object must be set to use the selected menu item, which happens by default).

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.

# synchronizeTitleAndSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Ensures that the item being displayed by the receiver agrees with the selected item.

## Declaration

```objectivec
- (void) synchronizeTitleAndSelectedItem;
```

<a id="Discussion"></a>

## Discussion

If there’s no selected item, this method selects the first item in the item menu and sets the receiver’s item to match. For pull-down menus, this method makes sure that the first item is being displayed (the `NSPopUpButtonCell` object must be set to use the selected menu item, which happens by default).

## See Also

### Related Documentation

- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.
- [itemArray](itemarray.md): The array of menu item objects associated with the button.
