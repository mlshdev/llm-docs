> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenpanel/allowsmultipleselection](https://developer.apple.com/documentation/appkit/nsopenpanel/allowsmultipleselection)

# allowsMultipleSelection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user may select multiple files and directories.

## Declaration

```swift
var allowsMultipleSelection: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user may select multiple items from the browser. When the selection contains multiple items, use the [urls](urls.md) property to retrieve those items instead of the inherited [url](../nssavepanel/url.md) property.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [isAccessoryViewDisclosed](isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.

# allowsMultipleSelection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the user may select multiple files and directories.

## Declaration

```objectivec
@property BOOL allowsMultipleSelection;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user may select multiple items from the browser. When the selection contains multiple items, use the [URLs](urls.md) property to retrieve those items instead of the inherited [URL](../nssavepanel/url.md) property.

## See Also

### Configuring the Open Panel

- [canChooseFiles](canchoosefiles.md): A Boolean that indicates whether the user can choose files in the panel.
- [canChooseDirectories](canchoosedirectories.md): A Boolean that indicates whether the user can choose directories in the panel.
- [resolvesAliases](resolvesaliases.md): A Boolean that indicates whether the panel resolves aliases.
- [accessoryViewDisclosed](isaccessoryviewdisclosed.md): A Boolean value that indicates whether the panel’s accessory view is visible.
