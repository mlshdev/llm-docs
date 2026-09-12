> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/usesuserkeyequivalents](https://developer.apple.com/documentation/appkit/nsmenuitem/usesuserkeyequivalents)

# usesUserKeyEquivalents (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.

## Declaration

```swift
class var usesUserKeyEquivalents: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if menu items conform to user preferences for key equivalents; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing user key equivalents

- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsAutomaticKeyEquivalentMirroring](allowsautomatickeyequivalentmirroring.md): A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.
- [allowsKeyEquivalentWhenHidden](allowskeyequivalentwhenhidden.md)

# usesUserKeyEquivalents (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a Boolean value that indicates whether menu items conform to user preferences for key equivalents.

## Declaration

```objectivec
@property (class) BOOL usesUserKeyEquivalents;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if menu items conform to user preferences for key equivalents; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing user key equivalents

- [userKeyEquivalent](userkeyequivalent.md): The user-assigned key equivalent for the menu item.
- [allowsAutomaticKeyEquivalentLocalization](allowsautomatickeyequivalentlocalization.md): A Boolean value that determines whether the system automatically remaps the keyboard shortcut to support localized keyboards.
- [allowsAutomaticKeyEquivalentMirroring](allowsautomatickeyequivalentmirroring.md): A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.
- [allowsKeyEquivalentWhenHidden](allowskeyequivalentwhenhidden.md)
