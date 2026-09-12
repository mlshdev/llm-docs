> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/isaccessoryviewdisclosed](https://developer.apple.com/documentation/appkit/nsopenpanel/isaccessoryviewdisclosed)

# isAccessoryViewDisclosed (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that indicates whether the panel’s accessory view is visible.

## Declaration

```swift
var isAccessoryViewDisclosed: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the accessory view is visible, and [false](https://developer.apple.com/documentation/swift/false) when it isn’t. Setting the value of this property programmatically changes the visibility of the accessory panel. If no accessory panel is present, setting this property does nothing.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.

# accessoryViewDisclosed (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean value that indicates whether the panel’s accessory view is visible.

## Declaration

```objectivec
@property (getter=isAccessoryViewDisclosed) BOOL accessoryViewDisclosed;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the accessory view is visible, and [false](https://developer.apple.com/documentation/swift/false) when it isn’t. Setting the value of this property programmatically changes the visibility of the accessory panel. If no accessory panel is present, setting this property does nothing.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [allowsMultipleSelection](allowsmultipleselection.md): A Boolean that indicates whether the user may select multiple files and directories.
