> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/automatic](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/automatic)

# NSButton.BezelStyle.automatic (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 14.0+

The default button style based on the button’s contents and position within the window.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

The system picks which style of button to display automatically based on context and content. This ensures the button displays correctly in toolbars, forms, and touch bar.

In a normal window context, the system picks the [NSButton.BezelStyle.push](push.md) button style. If the system detects that the button has a title that spans multiple lines, or the image content is too tall, it uses [NSButton.BezelStyle.flexiblePush](flexiblepush.md).

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

# NSBezelStyleAutomatic (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

The default button style based on the button’s contents and position within the window.

## Declaration

```objectivec
NSBezelStyleAutomatic
```

<a id="Discussion"></a>

## Discussion

The system picks which style of button to display automatically based on context and content. This ensures the button displays correctly in toolbars, forms, and touch bar.

In a normal window context, the system picks the [NSBezelStylePush](push.md) button style. If the system detects that the button has a title that spans multiple lines, or the image content is too tall, it uses [NSBezelStyleFlexiblePush](flexiblepush.md).

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).
