> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspopupbutton/titleofselecteditem

# titleOfSelectedItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the item that was last selected by the user.

## Declaration

```swift
var titleOfSelectedItem: String? { get }
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value in this property is `nil`.

## See Also

### Getting the user’s selection

- [selectedItem](selecteditem.md): The menu item that was last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.

# titleOfSelectedItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title of the item that was last selected by the user.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * titleOfSelectedItem;
```

<a id="Discussion"></a>

## Discussion

If no item is selected, the value in this property is `nil`.

## See Also

### Getting the user’s selection

- [selectedItem](selecteditem.md): The menu item that was last selected by the user.
- [indexOfSelectedItem](indexofselecteditem.md): The index of the item that was last selected by the user.
- [selectedTag](selectedtag.md): The tag of the menu item that was last selected by the user.
