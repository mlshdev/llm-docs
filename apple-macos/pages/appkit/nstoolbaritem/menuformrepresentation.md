> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/menuformrepresentation](https://developer.apple.com/documentation/appkit/nstoolbaritem/menuformrepresentation)

# menuFormRepresentation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item to use when the toolbar item is in the overflow menu.

## Declaration

```swift
var menuFormRepresentation: NSMenuItem? { get set }
```

<a id="Discussion"></a>

## Discussion

The toolbar provides an initial default menu form representation that uses the toolbar item’s label as the menu item’s title. You can customize this menu item by changing the title or adding a submenu. When the toolbar is in text only mode, this menu item provides the text for the toolbar item. If the menu item in this property has a submenu and is visible, clicking the toolbar item displays that submenu. If the toolbar item isn’t visible because it’s in the overflow menu, the menu item and submenu appear there.

For more information, see [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md).

## See Also

### Configuring the item’s menu

- [itemMenuFormRepresentation](itemmenuformrepresentation.md): The menu item to use for the toolbar item is in the overflow menu in a Mac app built with Mac Catalyst.

# menuFormRepresentation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item to use when the toolbar item is in the overflow menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenuItem * menuFormRepresentation;
```

<a id="Discussion"></a>

## Discussion

The toolbar provides an initial default menu form representation that uses the toolbar item’s label as the menu item’s title. You can customize this menu item by changing the title or adding a submenu. When the toolbar is in text only mode, this menu item provides the text for the toolbar item. If the menu item in this property has a submenu and is visible, clicking the toolbar item displays that submenu. If the toolbar item isn’t visible because it’s in the overflow menu, the menu item and submenu appear there.

For more information, see [Integrating a Toolbar and Touch Bar into Your App](../integrating-a-toolbar-and-touch-bar-into-your-app.md).

## See Also

### Configuring the item’s menu

- [itemMenuFormRepresentation](itemmenuformrepresentation.md): The menu item to use for the toolbar item is in the overflow menu in a Mac app built with Mac Catalyst.
