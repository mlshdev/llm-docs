> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/resolvesaliases](https://developer.apple.com/documentation/appkit/nsopenpanel/resolvesaliases)

# resolvesAliases (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the panel resolves aliases.

## Declaration

```swift
var resolvesAliases: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), dropping an alias on the panel or asking for filenames or URLs returns the resolved aliases. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When this value is [false](https://developer.apple.com/documentation/swift/false), selecting an alias returns the alias instead of the file or directory it represents.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.
- [isAccessoryViewDisclosed](isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.

# resolvesAliases (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the panel resolves aliases.

## Declaration

```objectivec
@property BOOL resolvesAliases;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), dropping an alias on the panel or asking for filenames or URLs returns the resolved aliases. The default value of this property is [true](https://developer.apple.com/documentation/swift/true). When this value is [false](https://developer.apple.com/documentation/swift/false), selecting an alias returns the alias instead of the file or directory it represents.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.
- [accessoryViewDisclosed](isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.
