> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/displaymode-swift.property](https://developer.apple.com/documentation/appkit/nstoolbar/displaymode-swift.property)

# displayMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.

## Declaration

```swift
var displayMode: NSToolbar.DisplayMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSToolbar.DisplayMode.default](displaymode-swift.enum/default.md). For a list of possible values, see [NSToolbar.DisplayMode](displaymode-swift.enum.md).

## See Also

### Configuring the toolbar’s behavior

- [isVisible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [NSToolbar.DisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

# displayMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.

## Declaration

```objectivec
@property NSToolbarDisplayMode displayMode;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSToolbarDisplayModeDefault](displaymode-swift.enum/default.md). For a list of possible values, see [NSToolbarDisplayMode](displaymode-swift.enum.md).

## See Also

### Configuring the toolbar’s behavior

- [visible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [NSToolbarDisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.
