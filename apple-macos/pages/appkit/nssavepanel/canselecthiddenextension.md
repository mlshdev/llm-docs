> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/canselecthiddenextension](https://developer.apple.com/documentation/appkit/nssavepanel/canselecthiddenextension)

# canSelectHiddenExtension (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.

## Declaration

```swift
var canSelectHiddenExtension: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property before displaying the panel. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the Finder preference “Show all extensions” is [false](https://developer.apple.com/documentation/swift/false), the panel displays the Hide Extension menu item. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Use the [isExtensionHidden](isextensionhidden.md) property to hide or shows extensions.

## See Also

### Configuring the Panel’s Behavior

- [canCreateDirectories](cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [showsHiddenFiles](showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [isExtensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [isExpanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.

# canSelectHiddenExtension (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.

## Declaration

```objectivec
@property BOOL canSelectHiddenExtension;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property before displaying the panel. When the value of this property is [true](https://developer.apple.com/documentation/swift/true), and the Finder preference “Show all extensions” is [false](https://developer.apple.com/documentation/swift/false), the panel displays the Hide Extension menu item. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

Use the [extensionHidden](isextensionhidden.md) property to hide or shows extensions.

## See Also

### Configuring the Panel’s Behavior

- [canCreateDirectories](cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [showsHiddenFiles](showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [extensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [expanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.
