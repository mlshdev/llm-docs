> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/allowsusercustomization](https://developer.apple.com/documentation/appkit/nstoolbar/allowsusercustomization)

# allowsUserCustomization (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether users can modify the contents of the toolbar.

## Declaration

```swift
var allowsUserCustomization: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar enables the Customize Toolbar… menu item. If the value is [false](https://developer.apple.com/documentation/swift/false), the toolbar disables this menu item. The Customize Toolbar… menu item lets people change the items on the toolbar, rearrange their positions, and change the toolbar’s display mode. This attribute does not affect someone’s ability to show or hide the toolbar. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

You can change the value of this property at any time to change your toolbar’s customization behavior. For example, you might prevent toolbar customizations while your app processes some other event. If you set this property to [true](https://developer.apple.com/documentation/swift/true), set the [autosavesConfiguration](autosavesconfiguration.md) property to true to persist any customizations.

## See Also

### Configuring the toolbar’s behavior

- [isVisible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbar.DisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

# allowsUserCustomization (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether users can modify the contents of the toolbar.

## Declaration

```objectivec
@property BOOL allowsUserCustomization;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar enables the Customize Toolbar… menu item. If the value is [false](https://developer.apple.com/documentation/swift/false), the toolbar disables this menu item. The Customize Toolbar… menu item lets people change the items on the toolbar, rearrange their positions, and change the toolbar’s display mode. This attribute does not affect someone’s ability to show or hide the toolbar. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

You can change the value of this property at any time to change your toolbar’s customization behavior. For example, you might prevent toolbar customizations while your app processes some other event. If you set this property to [true](https://developer.apple.com/documentation/swift/true), set the [autosavesConfiguration](autosavesconfiguration.md) property to true to persist any customizations.

## See Also

### Configuring the toolbar’s behavior

- [visible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbarDisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.
