> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/accessorybar](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/accessorybar)

# NSButton.BezelStyle.accessoryBar (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.

## Declaration

```swift
case accessoryBar
```

<a id="Discussion"></a>

## Discussion

Use this style of button to display some kind of toggle or selection state, like a favorites bar or search scope.

**Swift**

```swift
// Create an accessory bar style button.
let rankButton = NSButton()
rankButton.title = "Search Rank"
rankButton.bezelStyle = .accessoryBar
rankButton.setButtonType(.pushOnPushOff)

// Create an accessory bar style button.
let orderButton = NSButton()
orderButton.title = "Page Order"
orderButton.bezelStyle = .accessoryBar
orderButton.setButtonType(.pushOnPushOff)
```

**Objective-C**

```objc
// Create an accessory bar style button.
NSButton *rankButton = [[NSButton alloc] init];
rankButton.title = @"Search Rank";
rankButton.bezelStyle = NSBezelStyleAccessoryBar;
[rankButton setButtonType:NSButtonTypePushOnPushOff];

// Create an accessory bar style button.
NSButton *orderButton = [[NSButton alloc] init];
orderButton.title = @"Page Order";
orderButton.bezelStyle = NSBezelStyleAccessoryBar;
[orderButton setButtonType:NSButtonTypePushOnPushOff];
```

![A screenshot of a label, and two accessory bar buttons that display side-by-side. The label on the left says sort by. The buttons that follow on the right side say search rank and page order.](https://developer.apple.com/images/com.apple.appkit/media-4307818@2x.png)

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSButton.BezelStyle.toolbar](toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSButton.BezelStyle.accessoryBarAction](accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.

# NSBezelStyleAccessoryBar (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A button style that’s typically used in the context of an accessory toolbar for buttons that narrow the focus of a search or other operation.

## Declaration

```objectivec
NSBezelStyleAccessoryBar
```

<a id="Discussion"></a>

## Discussion

Use this style of button to display some kind of toggle or selection state, like a favorites bar or search scope.

**Swift**

```swift
// Create an accessory bar style button.
let rankButton = NSButton()
rankButton.title = "Search Rank"
rankButton.bezelStyle = .accessoryBar
rankButton.setButtonType(.pushOnPushOff)

// Create an accessory bar style button.
let orderButton = NSButton()
orderButton.title = "Page Order"
orderButton.bezelStyle = .accessoryBar
orderButton.setButtonType(.pushOnPushOff)
```

**Objective-C**

```objc
// Create an accessory bar style button.
NSButton *rankButton = [[NSButton alloc] init];
rankButton.title = @"Search Rank";
rankButton.bezelStyle = NSBezelStyleAccessoryBar;
[rankButton setButtonType:NSButtonTypePushOnPushOff];

// Create an accessory bar style button.
NSButton *orderButton = [[NSButton alloc] init];
orderButton.title = @"Page Order";
orderButton.bezelStyle = NSBezelStyleAccessoryBar;
[orderButton setButtonType:NSButtonTypePushOnPushOff];
```

![A screenshot of a label, and two accessory bar buttons that display side-by-side. The label on the left says sort by. The buttons that follow on the right side say search rank and page order.](https://developer.apple.com/images/com.apple.appkit/media-4307818@2x.png)

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Toolbar

- [NSBezelStyleToolbar](toolbar.md): A button style that’s appropriate for a toolbar item.
- [NSBezelStyleAccessoryBarAction](accessorybaraction.md): A button style that you use for extra actions in an accessory toolbar.
