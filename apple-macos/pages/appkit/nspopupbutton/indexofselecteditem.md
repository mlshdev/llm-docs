> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspopupbutton/indexofselecteditem

# indexOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the item that was last selected by the user.

## Declaration

```swift
var indexOfSelectedItem: Int { get }
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value in this property is `-1`.

## See Also

### Getting the user’s selection

- [selectedItem](selecteditem.md): The menu item that was last selected by the user.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item that was last selected by the user.

# indexOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The index of the item that was last selected by the user.

## Declaration

```objectivec
@property (readonly) NSInteger indexOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value in this property is `-1`.

## See Also

### Getting the user’s selection

- [selectedItem](selecteditem.md): The menu item that was last selected by the user.
- [titleOfSelectedItem](titleofselecteditem.md): The title of the item that was last selected by the user.
- [selectedTag](selectedtag.md): The tag of the menu item that was last selected by the user.
