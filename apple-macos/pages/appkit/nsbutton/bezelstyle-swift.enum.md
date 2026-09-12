> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum)

# NSButton.BezelStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The set of bezel styles to style buttons in your app.

## Declaration

```swift
enum BezelStyle
```

<a id="overview"></a>

## Overview

For design guidance on buttons, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## Topics

### Default

- [NSButton.BezelStyle.automatic](bezelstyle-swift.enum/automatic.md): The default button style based on the button’s contents and position within the window.

### Push

- [NSButton.BezelStyle.push](bezelstyle-swift.enum/push.md): A standard push style button.
- [NSButton.BezelStyle.flexiblePush](bezelstyle-swift.enum/flexiblepush.md): A push button with a flexible height to accommodate longer text labels or an image.

### Disclosure

- [NSButton.BezelStyle.disclosure](bezelstyle-swift.enum/disclosure.md): A bezel style button for use with a disclosure triangle.
- [NSButton.BezelStyle.pushDisclosure](bezelstyle-swift.enum/pushdisclosure.md): A bezel style push button with a disclosure triangle.

### Toolbar

- [NSButton.BezelStyle.toolbar](bezelstyle-swift.enum/toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSButton.BezelStyle.accessoryBar](bezelstyle-swift.enum/accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.
- [NSButton.BezelStyle.accessoryBarAction](bezelstyle-swift.enum/accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.

### Informational

- [NSButton.BezelStyle.helpButton](bezelstyle-swift.enum/helpbutton.md): A round button with a question mark, providing the standard help button look.
- [NSButton.BezelStyle.badge](bezelstyle-swift.enum/badge.md): A button style suitable for displaying additional information.
- [NSButton.BezelStyle.circular](bezelstyle-swift.enum/circular.md): A round button that can contain either a single character or an icon.

### Other

- [NSButton.BezelStyle.smallSquare](bezelstyle-swift.enum/smallsquare.md): A simple square bezel style that can scale to any size.

### Deprecated

- [Deprecated Symbols](../bezelstyle-deprecated-symbols.md)

### Enumeration Cases

- [NSButton.BezelStyle.glass](bezelstyle-swift.enum/glass.md): A bezel style with a glass effect

### Initializers

- [init(rawValue:)](bezelstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSButton.ButtonType](buttontype.md): Button types that you can specify using [setButtonType(\_:)](../nsbuttoncell/setbuttontype%28__%29.md).
- [NSButton.GradientType](gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.

# NSBezelStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The set of bezel styles to style buttons in your app.

## Declaration

```objectivec
enum NSBezelStyle : NSUInteger;
```

<a id="overview"></a>

## Overview

For design guidance on buttons, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## Topics

### Default

- [NSBezelStyleAutomatic](bezelstyle-swift.enum/automatic.md): The default button style based on the button’s contents and position within the window.

### Push

- [NSBezelStylePush](bezelstyle-swift.enum/push.md): A standard push style button.
- [NSBezelStyleFlexiblePush](bezelstyle-swift.enum/flexiblepush.md): A push button with a flexible height to accommodate longer text labels or an image.

### Disclosure

- [NSBezelStyleDisclosure](bezelstyle-swift.enum/disclosure.md): A bezel style button for use with a disclosure triangle.
- [NSBezelStylePushDisclosure](bezelstyle-swift.enum/pushdisclosure.md): A bezel style push button with a disclosure triangle.

### Toolbar

- [NSBezelStyleToolbar](bezelstyle-swift.enum/toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSBezelStyleAccessoryBar](bezelstyle-swift.enum/accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.
- [NSBezelStyleAccessoryBarAction](bezelstyle-swift.enum/accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.

### Informational

- [NSBezelStyleHelpButton](bezelstyle-swift.enum/helpbutton.md): A round button with a question mark, providing the standard help button look.
- [NSBezelStyleBadge](bezelstyle-swift.enum/badge.md): A button style suitable for displaying additional information.
- [NSBezelStyleCircular](bezelstyle-swift.enum/circular.md): A round button that can contain either a single character or an icon.

### Other

- [NSBezelStyleSmallSquare](bezelstyle-swift.enum/smallsquare.md): A simple square bezel style that can scale to any size.

### Deprecated

- [Deprecated Symbols](../bezelstyle-deprecated-symbols.md)

### Enumeration Cases

- [NSBezelStyleGlass](bezelstyle-swift.enum/glass.md): A bezel style with a glass effect

## See Also

### Constants

- [NSButtonType](buttontype.md): Button types that you can specify using [setButtonType:](../nsbuttoncell/setbuttontype%28__%29.md).
- [NSGradientType](gradienttype.md): Deprecated. Specify the gradients used by the [gradientType](../nsbuttoncell/gradienttype.md) property.
