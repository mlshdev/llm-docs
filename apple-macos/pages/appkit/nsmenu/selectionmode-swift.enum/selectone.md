> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/selectionmode-swift.enum/selectone](https://developer.apple.com/documentation/appkit/nsmenu/selectionmode-swift.enum/selectone)

# NSMenu.SelectionMode.selectOne (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 14.0+

A selection mode where someone can select at most one menu item in the same selection group at the same time.

## Declaration

```swift
case selectOne
```

<a id="Discussion"></a>

## Discussion

A change in selection deselects any previously selected item.

## See Also

### Defining the selection mode

- [NSMenu.SelectionMode.automatic](automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenu.SelectionMode.selectAny](selectany.md): A selection mode where someone can select multiple items in the menu.

# NSMenuSelectionModeSelectOne (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

A selection mode where someone can select at most one menu item in the same selection group at the same time.

## Declaration

```objectivec
NSMenuSelectionModeSelectOne
```

<a id="Discussion"></a>

## Discussion

A change in selection deselects any previously selected item.

## See Also

### Defining the selection mode

- [NSMenuSelectionModeAutomatic](automatic.md): A selection mode where the menu determines the appropriate selection mode based on the context and its constants.
- [NSMenuSelectionModeSelectAny](selectany.md): A selection mode where someone can select multiple items in the menu.
