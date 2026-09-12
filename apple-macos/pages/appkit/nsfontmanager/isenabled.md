> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/isenabled](https://developer.apple.com/documentation/appkit/nsfontmanager/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the font conversion system’s user interface items (the Font panel and Font menu items) are enabled; when the value is [false](https://developer.apple.com/documentation/swift/false), these items are not enabled.

## See Also

### Related Documentation

- [isEnabled](../nsfontpanel/isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.

### Managing the Font Panel and Font Menu

- [fontPanel(\_:)](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu(\_:)](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu(\_:)](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the font conversion system’s Font panel and Font menu items are enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the font conversion system’s user interface items (the Font panel and Font menu items) are enabled; when the value is [false](https://developer.apple.com/documentation/swift/false), these items are not enabled.

## See Also

### Related Documentation

- [enabled](../nsfontpanel/isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.

### Managing the Font Panel and Font Menu

- [fontPanel:](fontpanel%28__%29.md): Returns the application’s shared Font panel object, creating it if necessary.
- [setFontMenu:](setfontmenu%28__%29.md): Records the given menu as the application’s Font menu.
- [fontMenu:](fontmenu%28__%29.md): Returns the menu that’s connected to the font conversion system, creating it if necessary.
