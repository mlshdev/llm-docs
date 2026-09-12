> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/toolbar](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/toolbar)

# NSButton.BezelStyle.toolbar (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A button style that’s appropriate for a toolbar item.

## Declaration

```swift
case toolbar
```

<a id="Discussion"></a>

## Discussion

Use this case for displaying a button in an [NSToolbar](../../nstoolbar.md).

**Swift**

```swift
let button = NSButton()
button.title = "Toolbar"
button.bezelStyle = .toolbar
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Toolbar";
button.bezelStyle = NSBezelStyleToolbar;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSButton.BezelStyle.accessoryBar](accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.
- [NSButton.BezelStyle.accessoryBarAction](accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.

# NSBezelStyleToolbar (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A button style that’s appropriate for a toolbar item.

## Declaration

```objectivec
NSBezelStyleToolbar
```

<a id="Discussion"></a>

## Discussion

Use this case for displaying a button in an [NSToolbar](../../nstoolbar.md).

**Swift**

```swift
let button = NSButton()
button.title = "Toolbar"
button.bezelStyle = .toolbar
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Toolbar";
button.bezelStyle = NSBezelStyleToolbar;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSBezelStyleAccessoryBar](accessorybar.md): A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.
- [NSBezelStyleAccessoryBarAction](accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.
