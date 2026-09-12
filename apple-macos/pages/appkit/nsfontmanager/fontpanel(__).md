> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/fontpanel(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/fontpanel(_:))

# fontPanel(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the application’s shared Font panel object, creating it if necessary.

## Declaration

```swift
func fontPanel(_ create: Bool) -> NSFontPanel?
```

## Parameters

- `create`: If [true](https://developer.apple.com/documentation/swift/true), the Font panel object is created if necessary; if [false](https://developer.apple.com/documentation/swift/false), it is not.

<a id="return-value"></a>

## Return Value

The application’s shared Font panel object.

## See Also

### Related Documentation

- [shared](../nsfontpanel/shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.
- [setFontPanelFactory(\_:)](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.
- [sharedFontPanelExists](../nsfontpanel/sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.

### Managing the Font Panel and Font Menu

- [isEnabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [setFontMenu(\_:)](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu(\_:)](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.

# fontPanel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the application’s shared Font panel object, creating it if necessary.

## Declaration

```objectivec
- (NSFontPanel *) fontPanel:(BOOL) create;
```

## Parameters

- `create`: If [true](https://developer.apple.com/documentation/swift/true), the Font panel object is created if necessary; if [false](https://developer.apple.com/documentation/swift/false), it is not.

<a id="return-value"></a>

## Return Value

The application’s shared Font panel object.

## See Also

### Related Documentation

- [sharedFontPanel](../nsfontpanel/shared.md): Returns the single `NSFontPanel` instance for the application, creating it if necessary.
- [setFontPanelFactory:](setfontpanelfactory%28__%29.md): Sets the class that creates the shared Font panel object.
- [sharedFontPanelExists](../nsfontpanel/sharedfontpanelexists.md): A Boolean value that indicates whether the shared Font panel has been created.

### Managing the Font Panel and Font Menu

- [enabled](isenabled.md): A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.
- [setFontMenu:](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu:](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.
