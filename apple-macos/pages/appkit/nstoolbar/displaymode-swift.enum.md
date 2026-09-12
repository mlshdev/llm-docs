> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/displaymode-swift.enum](https://developer.apple.com/documentation/appkit/nstoolbar/displaymode-swift.enum)

# NSToolbar.DisplayMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.

## Declaration

```swift
enum DisplayMode
```

## Topics

### Display modes

- [NSToolbar.DisplayMode.default](displaymode-swift.enum/default.md): The default display mode.
- [NSToolbar.DisplayMode.iconAndLabel](displaymode-swift.enum/iconandlabel.md): The toolbar displays an icon and label for each item.
- [NSToolbar.DisplayMode.iconOnly](displaymode-swift.enum/icononly.md): The toolbar displays only an icon for each item.
- [NSToolbar.DisplayMode.labelOnly](displaymode-swift.enum/labelonly.md): The toolbar displays only a label for each item.

### Initializers

- [init(rawValue:)](displaymode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the toolbar’s behavior

- [isVisible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

# NSToolbarDisplayMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ · macOS

Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.

## Declaration

```objectivec
enum NSToolbarDisplayMode : NSUInteger;
```

## Topics

### Display modes

- [NSToolbarDisplayModeDefault](displaymode-swift.enum/default.md): The default display mode.
- [NSToolbarDisplayModeIconAndLabel](displaymode-swift.enum/iconandlabel.md): The toolbar displays an icon and label for each item.
- [NSToolbarDisplayModeIconOnly](displaymode-swift.enum/icononly.md): The toolbar displays only an icon for each item.
- [NSToolbarDisplayModeLabelOnly](displaymode-swift.enum/labelonly.md): The toolbar displays only a label for each item.

## See Also

### Configuring the toolbar’s behavior

- [visible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.
