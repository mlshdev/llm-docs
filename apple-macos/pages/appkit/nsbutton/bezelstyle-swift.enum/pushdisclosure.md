> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/pushdisclosure](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/pushdisclosure)

# NSButton.BezelStyle.pushDisclosure (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A bezel style push button with a disclosure triangle.

## Declaration

```swift
case pushDisclosure
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you want your button to look like a disclosure button, commonly seen in toolbars on macOS.

**Swift**

```swift
let button = NSButton()
button.title = ""
button.bezelStyle = .pushDisclosure
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"";
button.bezelStyle = NSBezelStylePushDisclosure;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Disclosure

- [NSButton.BezelStyle.disclosure](disclosure.md): A bezel style button for use with a disclosure triangle.

# NSBezelStylePushDisclosure (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A bezel style push button with a disclosure triangle.

## Declaration

```objectivec
NSBezelStylePushDisclosure
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you want your button to look like a disclosure button, commonly seen in toolbars on macOS.

**Swift**

```swift
let button = NSButton()
button.title = ""
button.bezelStyle = .pushDisclosure
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"";
button.bezelStyle = NSBezelStylePushDisclosure;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Disclosure

- [NSBezelStyleDisclosure](disclosure.md): A bezel style button for use with a disclosure triangle.
