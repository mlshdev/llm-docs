> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/rounded](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/rounded)

# rounded (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A rounded rectangle button, designed for text.

## Declaration

```swift
static var rounded: NSButton.BezelStyle { get }
```

<a id="Discussion"></a>

## Discussion

Rounded buttons are common within the body of a window or alert. To configure a button as the default button, set the [keyEquivalent](../keyequivalent.md) property to the carriage return character (`\r`, ASCII `0xd`). The system draws the default button prominently using the accent color to indicate that the user can press the return key to invoke the button’s action.

## See Also

### Properties

- [inline](inline.md): Deprecated. A button that has a solid round-rectangle border background.
- [recessed](recessed.md): Deprecated. A bezel style appropriate for use in scope bars and title bar accessories, similar to the bookmarks bar in Safari.
- [regularSquare](regularsquare.md): Deprecated. A rectangular button with a two-point border, designed for icons.
- [roundedDisclosure](roundeddisclosure.md): Deprecated. A bezel style for use with a vertically expanding and collapsing disclosure button.
- [roundRect](roundrect.md): Deprecated. A bezel style appropriate for use as an action or auxiliary button in scope bars and title bar accessories.
- [texturedRounded](texturedrounded.md): Deprecated. A bezel style appropriate for use in the toolbar or title bar regions of a window.

# NSBezelStyleRounded (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 27.0)

A rounded rectangle button, designed for text.

## Declaration

```objectivec
NSBezelStyleRounded
```

<a id="Discussion"></a>

## Discussion

Rounded buttons are common within the body of a window or alert. To configure a button as the default button, set the [keyEquivalent](../keyequivalent.md) property to the carriage return character (`\r`, ASCII `0xd`). The system draws the default button prominently using the accent color to indicate that the user can press the return key to invoke the button’s action.

## See Also

### Properties

- [NSBezelStyleInline](inline.md): Deprecated. A button that has a solid round-rectangle border background.
- [NSBezelStyleRecessed](recessed.md): Deprecated. A bezel style appropriate for use in scope bars and title bar accessories, similar to the bookmarks bar in Safari.
- [NSBezelStyleRegularSquare](regularsquare.md): Deprecated. A rectangular button with a two-point border, designed for icons.
- [NSBezelStyleRoundedDisclosure](roundeddisclosure.md): Deprecated. A bezel style for use with a vertically expanding and collapsing disclosure button.
- [NSBezelStyleRoundRect](roundrect.md): Deprecated. A bezel style appropriate for use as an action or auxiliary button in scope bars and title bar accessories.
- [NSBezelStyleTexturedRounded](texturedrounded.md): Deprecated. A bezel style appropriate for use in the toolbar or title bar regions of a window.
