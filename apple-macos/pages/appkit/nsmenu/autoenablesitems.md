> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/autoenablesitems](https://developer.apple.com/documentation/appkit/nsmenu/autoenablesitems)

# autoenablesItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Indicates whether the menu automatically enables and disables its menu items.

## Declaration

```swift
var autoenablesItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a Boolean value, indicating whether the menu automatically enables and disables its menu items. If set to [true](https://developer.apple.com/documentation/swift/true), menu items of the menu are automatically enabled and disabled according to rules computed by the NSMenuValidation informal protocol. By default, `NSMenu` objects autoenable their menu items.

## See Also

### Enabling and Disabling Menu Items

- [update()](update%28%29.md): Enables or disables the menu items of the menu based on the NSMenuValidation informal protocol and sizes the menu to fit its current menu items if necessary.

# autoenablesItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Indicates whether the menu automatically enables and disables its menu items.

## Declaration

```objectivec
@property BOOL autoenablesItems;
```

<a id="Discussion"></a>

## Discussion

This property contains a Boolean value, indicating whether the menu automatically enables and disables its menu items. If set to [true](https://developer.apple.com/documentation/swift/true), menu items of the menu are automatically enabled and disabled according to rules computed by the NSMenuValidation informal protocol. By default, `NSMenu` objects autoenable their menu items.

## See Also

### Enabling and Disabling Menu Items

- [update](update%28%29.md): Enables or disables the menu items of the menu based on the NSMenuValidation informal protocol and sizes the menu to fit its current menu items if necessary.
