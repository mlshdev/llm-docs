> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/badge](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/badge)

# NSButton.BezelStyle.badge (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.7+

A button style suitable for displaying additional information.

## Declaration

```swift
case badge
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you need to provide additional information about something. For example, the count of an item.

**Swift**

```swift
let button = NSButton()
button.title = "Badge"
button.bezelStyle = .badge
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Badge";
button.bezelStyle = NSBezelStyleBadge;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Informational

- [NSButton.BezelStyle.helpButton](helpbutton.md): A round button with a question mark, providing the standard help button look.
- [NSButton.BezelStyle.circular](circular.md): A round button that can contain either a single character or an icon.

# NSBezelStyleBadge (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A button style suitable for displaying additional information.

## Declaration

```objectivec
NSBezelStyleBadge
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you need to provide additional information about something. For example, the count of an item.

**Swift**

```swift
let button = NSButton()
button.title = "Badge"
button.bezelStyle = .badge
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Badge";
button.bezelStyle = NSBezelStyleBadge;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Informational

- [NSBezelStyleHelpButton](helpbutton.md): A round button with a question mark, providing the standard help button look.
- [NSBezelStyleCircular](circular.md): A round button that can contain either a single character or an icon.
