> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/setfontmenu(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/setfontmenu(_:))

# setFontMenu(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Records the given menu as the application’s Font menu.

## Declaration

```swift
func setFontMenu(_ newMenu: NSMenu)
```

## Parameters

- `newMenu`: The new Font menu.

## See Also

### Managing the Font Panel and Font Menu

- [isEnabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel(\_:)](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [fontMenu(\_:)](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.

# setFontMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Records the given menu as the application’s Font menu.

## Declaration

```objectivec
- (void) setFontMenu:(NSMenu *) newMenu;
```

## Parameters

- `newMenu`: The new Font menu.

## See Also

### Managing the Font Panel and Font Menu

- [enabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel:](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [fontMenu:](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.
