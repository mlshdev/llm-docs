> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/allowsextensionitems](https://developer.apple.com/documentation/appkit/nstoolbar/allowsextensionitems)

# allowsExtensionItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the toolbar can add items for Action extensions.

## Declaration

```swift
var allowsExtensionItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar can dynamically create toolbar items for Action extensions in the toolbar configuration panel. The toolbar can only add an Action extension if its `Info.plist` file contains the [NSExtensionServiceAllowsToolbarItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowstoolbaritem) key with the value [true](https://developer.apple.com/documentation/swift/true). The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the toolbar’s behavior

- [isVisible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbar.DisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.

# allowsExtensionItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the toolbar can add items for Action extensions.

## Declaration

```objectivec
@property BOOL allowsExtensionItems;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar can dynamically create toolbar items for Action extensions in the toolbar configuration panel. The toolbar can only add an Action extension if its `Info.plist` file contains the [NSExtensionServiceAllowsToolbarItem](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/nsextensionserviceallowstoolbaritem) key with the value [true](https://developer.apple.com/documentation/swift/true). The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the toolbar’s behavior

- [visible](isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbarDisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
