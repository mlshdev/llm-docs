> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscell/defaultmenu

# defaultMenu (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default menu for instances of the cell.

## Declaration

```swift
class var defaultMenu: NSMenu? { get }
```

<a id="return-value"></a>

## Return Value

The default menu. The `NSCell` implementation of this method returns `nil`.

## See Also

### Managing Menus

- [menu](menu.md): The cell’s contextual menu.
- [menu(for:in:of:)](menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.

# defaultMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the default menu for instances of the cell.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSMenu * defaultMenu;
```

<a id="return-value"></a>

## Return Value

The default menu. The `NSCell` implementation of this method returns `nil`.

## See Also

### Managing Menus

- [menu](menu.md): The cell’s contextual menu.
- [menuForEvent:inRect:ofView:](menu%28for_in_of_%29.md): Returns the menu associated with the cell and related to the specified event and frame.
