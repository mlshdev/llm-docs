> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/selectionmode-swift.enum/selectany](https://developer.apple.com/documentation/appkit/nsmenu/selectionmode-swift.enum/selectany)

# NSMenu.SelectionMode.selectAny (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 14.0+

A selection mode where someone can select multiple items in the menu.

## Declaration

```swift
case selectAny
```

<a id="Discussion"></a>

## Discussion

A change in selection doesn’t automatically deselect any previously selected item in the same selection group.

## See Also

### Defining the selection mode

- [NSMenu.SelectionMode.automatic](automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenu.SelectionMode.selectOne](selectone.md): A selection mode where someone can select at most one menu item in the same selection group at the same time.

# NSMenuSelectionModeSelectAny (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

A selection mode where someone can select multiple items in the menu.

## Declaration

```objectivec
NSMenuSelectionModeSelectAny
```

<a id="Discussion"></a>

## Discussion

A change in selection doesn’t automatically deselect any previously selected item in the same selection group.

## See Also

### Defining the selection mode

- [NSMenuSelectionModeAutomatic](automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenuSelectionModeSelectOne](selectone.md): A selection mode where someone can select at most one menu item in the same selection group at the same time.
