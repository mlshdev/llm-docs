> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/flexiblepush](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/flexiblepush)

# NSButton.BezelStyle.flexiblePush (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A push button with a flexible height to accommodate longer text labels or an image.

## Declaration

```swift
case flexiblePush
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you need to accommodate tall or variable height content.

Tall or variable height content includes text with newlines (\`n\`) as well as buttons you constrain the width of through Auto Layout. This style automatically wraps text based on button width and available space.

**Swift**

```swift
let button = NSButton()
button.title = "Flexible\n push"
button.bezelStyle = .flexiblePush
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Flexible\n push";
button.bezelStyle = NSBezelStyleFlexiblePush;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Push

- [NSButton.BezelStyle.push](push.md): A standard push style button.

# NSBezelStyleFlexiblePush (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A push button with a flexible height to accommodate longer text labels or an image.

## Declaration

```objectivec
NSBezelStyleFlexiblePush
```

<a id="Discussion"></a>

## Discussion

Use this style of button when you need to accommodate tall or variable height content.

Tall or variable height content includes text with newlines (\`n\`) as well as buttons you constrain the width of through Auto Layout. This style automatically wraps text based on button width and available space.

**Swift**

```swift
let button = NSButton()
button.title = "Flexible\n push"
button.bezelStyle = .flexiblePush
```

**Objective-C**

```objc
NSButton *button = [[NSButton alloc] init];
button.title = @"Flexible\n push";
button.bezelStyle = NSBezelStyleFlexiblePush;
```

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Push

- [NSBezelStylePush](push.md): A standard push style button.
