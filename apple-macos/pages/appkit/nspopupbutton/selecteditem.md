> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopupbutton/selecteditem](https://developer.apple.com/documentation/appkit/nspopupbutton/selecteditem)

# selectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item that was last selected by the user.

## Declaration

```swift
var selectedItem: NSMenuItem? { get }
```

<a id="Discussion"></a>

## Discussion

The last selected menu item is the one that was highlighted when the user released the mouse button. It is possible for a pull-down menu’s selected item to be its first item. If no item is selected, the value in this property is `nil`.

## See Also

### Getting the user’s selection

- [titleOfSelectedItem](titleofselecteditem.md): The title of the item that was last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.

# selectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item that was last selected by the user.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSMenuItem * selectedItem;
```

<a id="Discussion"></a>

## Discussion

The last selected menu item is the one that was highlighted when the user released the mouse button. It is possible for a pull-down menu’s selected item to be its first item. If no item is selected, the value in this property is `nil`.

## See Also

### Getting the user’s selection

- [titleOfSelectedItem](titleofselecteditem.md): The title of the item that was last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.
- [selectedTag](selectedtag.md): The tag of the menu item that was last selected by the user.
