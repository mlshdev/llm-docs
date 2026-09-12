> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/accessorybaraction](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/accessorybaraction)

# NSButton.BezelStyle.accessoryBarAction (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A button style that you use for extra actions in an accessory toolbar.

## Declaration

```swift
case accessoryBarAction
```

<a id="Discussion"></a>

## Discussion

Use this style when you need to perform an action on a button that appears in an accessory or scope bar.

**Swift**

```swift
let button = NSButton()
button.title = "Accessory bar action"
button.bezelStyle = .accessoryBarAction
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Accessory bar action";
button.bezelStyle = NSBezelStyleAccessoryBarAction;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSButton.BezelStyle.toolbar](toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSButton.BezelStyle.accessoryBar](accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.

# NSBezelStyleAccessoryBarAction (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A button style that you use for extra actions in an accessory toolbar.

## Declaration

```objectivec
NSBezelStyleAccessoryBarAction
```

<a id="Discussion"></a>

## Discussion

Use this style when you need to perform an action on a button that appears in an accessory or scope bar.

**Swift**

```swift
let button = NSButton()
button.title = "Accessory bar action"
button.bezelStyle = .accessoryBarAction
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Accessory bar action";
button.bezelStyle = NSBezelStyleAccessoryBarAction;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSBezelStyleToolbar](toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSBezelStyleAccessoryBar](accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.
