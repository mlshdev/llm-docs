> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/fontmenu(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/fontmenu(_:))

# fontMenu(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu that’s connected to the font conversion system, creating it if necessary.

## Declaration

```swift
func fontMenu(_ create: Bool) -> NSMenu?
```

## Parameters

- `create`: If [true](https://developer.apple.com/documentation/swift/true), the menu object is created if necessary; if [false](https://developer.apple.com/documentation/swift/false), it is not.

<a id="return-value"></a>

## Return Value

The font conversion system menu.

## See Also

### Managing the Font Panel and Font Menu

- [isEnabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel(\_:)](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu(\_:)](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.

# fontMenu: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the menu that’s connected to the font conversion system, creating it if necessary.

## Declaration

```objectivec
- (NSMenu *) fontMenu:(BOOL) create;
```

## Parameters

- `create`: If [true](https://developer.apple.com/documentation/swift/true), the menu object is created if necessary; if [false](https://developer.apple.com/documentation/swift/false), it is not.

<a id="return-value"></a>

## Return Value

The font conversion system menu.

## See Also

### Managing the Font Panel and Font Menu

- [enabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [fontPanel:](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu:](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
