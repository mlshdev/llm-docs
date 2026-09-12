> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/showshiddenfiles](https://developer.apple.com/documentation/appkit/nssavepanel/showshiddenfiles)

# showsHiddenFiles (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays files that are normally hidden from the user.

## Declaration

```swift
var showsHiddenFiles: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel displays hidden files; if [false](https://developer.apple.com/documentation/swift/false), it does not. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Panel’s Behavior

- [canCreateDirectories](cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [canSelectHiddenExtension](canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [isExtensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [isExpanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.

# showsHiddenFiles (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel displays files that are normally hidden from the user.

## Declaration

```objectivec
@property BOOL showsHiddenFiles;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the panel displays hidden files; if [false](https://developer.apple.com/documentation/swift/false), it does not. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Panel’s Behavior

- [canCreateDirectories](cancreatedirectories.md): A Boolean value that indicates whether the panel displays UI for creating directories.
- [canSelectHiddenExtension](canselecthiddenextension.md): A Boolean value that indicates whether the panel displays UI for hiding or showing filename extensions.
- [extensionHidden](isextensionhidden.md): A Boolean value that indicates whether to display filename extensions.
- [expanded](isexpanded.md): A Boolean value that indicates whether whether the panel is expanded.
- [Button tags](../button-tags.md): Button tags that refer to items on the panel.
