> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/allowsautomatickeyequivalentmirroring](https://developer.apple.com/documentation/appkit/nsmenuitem/allowsautomatickeyequivalentmirroring)

# allowsAutomaticKeyEquivalentMirroring (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.

## Declaration

```swift
var allowsAutomaticKeyEquivalentMirroring: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a menu item represents a direction-related action, it’s common to specify an input string that conveys that direction. For example, Finder uses Command-\[ to go back to the previous page, and Command-\] to go forward to the next page. Because directions are different in left-to-right and right-to-left interfaces, this property lets the system swap some input strings to match the current language direction.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), macOS 12 and later automatically swaps input strings that contain brackets `[]`, braces `{}`, parenthesis `()`, angle brackets `<>`, or arrow keys when the interface directionality changes. This behavior eliminates the need for you to create different menu items for left-to-right and right-to-left interfaces. Set this property to [false](https://developer.apple.com/documentation/swift/false) if you already change this item’s shortcut to support both left-to-right and right-to-left interfaces. You might also set it to [false](https://developer.apple.com/documentation/swift/false) to keep the same shortcut regardless of the interface’s directionality.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). However, if you set the [allowsAutomaticLocalization](https://developer.apple.com/documentation/uikit/uikeycommand/allowsautomaticlocalization) property to [false](https://developer.apple.com/documentation/swift/false), the system disables this feature regardless of the property’s value.

## See Also

### Managing user key equivalents

- [usesUserKeyEquivalents](usesuserkeyequivalents.md): Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.
- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsKeyEquivalentWhenHidden](allowskeyequivalentwhenhidden.md)

# allowsAutomaticKeyEquivalentMirroring (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.

## Declaration

```objectivec
@property BOOL allowsAutomaticKeyEquivalentMirroring;
```

<a id="Discussion"></a>

## Discussion

When a menu item represents a direction-related action, it’s common to specify an input string that conveys that direction. For example, Finder uses Command-\[ to go back to the previous page, and Command-\] to go forward to the next page. Because directions are different in left-to-right and right-to-left interfaces, this property lets the system swap some input strings to match the current language direction.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), macOS 12 and later automatically swaps input strings that contain brackets `[]`, braces `{}`, parenthesis `()`, angle brackets `<>`, or arrow keys when the interface directionality changes. This behavior eliminates the need for you to create different menu items for left-to-right and right-to-left interfaces. Set this property to [false](https://developer.apple.com/documentation/swift/false) if you already change this item’s shortcut to support both left-to-right and right-to-left interfaces. You might also set it to [false](https://developer.apple.com/documentation/swift/false) to keep the same shortcut regardless of the interface’s directionality.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). However, if you set the [allowsAutomaticLocalization](https://developer.apple.com/documentation/uikit/uikeycommand/allowsautomaticlocalization) property to [false](https://developer.apple.com/documentation/swift/false), the system disables this feature regardless of the property’s value.

## See Also

### Managing user key equivalents

- [usesUserKeyEquivalents](usesuserkeyequivalents.md): Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.
- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsKeyEquivalentWhenHidden](allowskeyequivalentwhenhidden.md)
