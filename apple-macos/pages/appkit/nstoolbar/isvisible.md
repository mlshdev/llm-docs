> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/isvisible](https://developer.apple.com/documentation/appkit/nstoolbar/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar is visible.

## Declaration

```swift
var isVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar is visible; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false). Change the value to hide or show the toolbar.

## See Also

### Configuring the toolbar’s behavior

- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbar.DisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar is visible.

## Declaration

```objectivec
@property (getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar is visible; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false). Change the value to hide or show the toolbar.

## See Also

### Configuring the toolbar’s behavior

- [displayMode](displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbarDisplayMode](displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.
