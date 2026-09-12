> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/menu](https://developer.apple.com/documentation/appkit/nscell/menu)

# menu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s contextual menu.

## Declaration

```swift
var menu: NSMenu? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a menu containing contextual commands associated with the cell. If the cell does not have a menu, set this property to `nil`.

## See Also

### Managing Menus

- [defaultMenu](defaultmenu.md): Returns the default menu for instances of the cell.
- [menu(for:in:of:)](menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.

# menu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The cell’s contextual menu.

## Declaration

```objectivec
@property (strong, nullable) NSMenu * menu;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify a menu containing contextual commands associated with the cell. If the cell does not have a menu, set this property to `nil`.

## See Also

### Managing Menus

- [defaultMenu](defaultmenu.md): Returns the default menu for instances of the cell.
- [menuForEvent:inRect:ofView:](menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.
