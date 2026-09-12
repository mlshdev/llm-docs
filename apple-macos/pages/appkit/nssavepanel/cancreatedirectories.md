> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/cancreatedirectories](https://developer.apple.com/documentation/appkit/nssavepanel/cancreatedirectories)

# canCreateDirectories (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays UI for creating directories.

## Declaration

```swift
var canCreateDirectories: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel includes UI to create new directories. When the value is [false](https://developer.apple.com/documentation/swift/false), the panel does not expose that UI.

## See Also

### Configuring the Panel’s Behavior

- [canSelectHiddenExtension](canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [showsHiddenFiles](showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [isExtensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [isExpanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.

# canCreateDirectories (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays UI for creating directories.

## Declaration

```objectivec
@property BOOL canCreateDirectories;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel includes UI to create new directories. When the value is [false](https://developer.apple.com/documentation/swift/false), the panel does not expose that UI.

## See Also

### Configuring the Panel’s Behavior

- [canSelectHiddenExtension](canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [showsHiddenFiles](showshiddenfiles.md): A Boolean value that indicates whether the panel displays files that are normally hidden from the user.
- [extensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [expanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.
