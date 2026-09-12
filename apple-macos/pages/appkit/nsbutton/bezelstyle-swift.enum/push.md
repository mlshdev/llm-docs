> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbutton/bezelstyle-swift.enum/push](https://developer.apple.com/documentation/appkit/nsbutton/bezelstyle-swift.enum/push)

# NSButton.BezelStyle.push (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

A standard push style button.

## Declaration

```swift
case push
```

<a id="Discussion"></a>

## Discussion

Use this style when you want the default button style.

**Swift**

```swift
// Create a push style button.
let cancelButton = NSButton()
cancelButton.title = "Cancel"
cancelButton.bezelStyle = .push

// Create a push style button.
let saveButton = NSButton()
saveButton.title = "Save"
saveButton.bezelStyle = .push
// Make this the default button.
saveButton.keyEquivalent = "\r"
```

**Objective-C**

```objc
// Create a push style button.
NSButton *cancelButton = [[NSButton alloc] init];
cancelButton.title = @"Cancel";
cancelButton.bezelStyle = NSBezelStylePush;

// Create a push style button.
NSButton *saveButton = [[NSButton alloc] init];
saveButton.title = @"Save";
saveButton.bezelStyle = NSBezelStylePush;
// Make this the default button.
saveButton.keyEquivalent = @"/r";
```

![A screenshot of two push buttons side-by-side. The  button on the left is titled cancel. The  button on the right is active and is titled save.](https://developer.apple.com/images/com.apple.appkit/media-4307817@2x.png)

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Push

- [NSButton.BezelStyle.flexiblePush](flexiblepush.md): A push button with a flexible height to accommodate longer text labels or an image.

# NSBezelStylePush (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

A standard push style button.

## Declaration

```objectivec
NSBezelStylePush
```

<a id="Discussion"></a>

## Discussion

Use this style when you want the default button style.

**Swift**

```swift
// Create a push style button.
let cancelButton = NSButton()
cancelButton.title = "Cancel"
cancelButton.bezelStyle = .push

// Create a push style button.
let saveButton = NSButton()
saveButton.title = "Save"
saveButton.bezelStyle = .push
// Make this the default button.
saveButton.keyEquivalent = "\r"
```

**Objective-C**

```objc
// Create a push style button.
NSButton *cancelButton = [[NSButton alloc] init];
cancelButton.title = @"Cancel";
cancelButton.bezelStyle = NSBezelStylePush;

// Create a push style button.
NSButton *saveButton = [[NSButton alloc] init];
saveButton.title = @"Save";
saveButton.bezelStyle = NSBezelStylePush;
// Make this the default button.
saveButton.keyEquivalent = @"/r";
```

![A screenshot of two push buttons side-by-side. The  button on the left is titled cancel. The  button on the right is active and is titled save.](https://developer.apple.com/images/com.apple.appkit/media-4307817@2x.png)

For design guidance, see [Human Interface Guidelines \> Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons).

## See Also

### Push

- [NSBezelStyleFlexiblePush](flexiblepush.md): A push button with a flexible height to accommodate longer text labels or an image.
