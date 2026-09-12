> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeycommand/allowsautomaticmirroring](https://developer.apple.com/documentation/uikit/uikeycommand/allowsautomaticmirroring)

# allowsAutomaticMirroring (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.

## Declaration

```swift
var allowsAutomaticMirroring: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a key command represents a direction-related action, it’s common to specify an input string that conveys that direction. For example, Safari uses Command-\[ to go back to the previous page, and Command-\] to go forward to the next page. Because directions are different in left-to-right and right-to-left interfaces, this property lets the system swap some input strings to match the current language direction.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), iOS 15 and later automatically swaps input strings that contain brackets `[]`, braces `{}`, parenthesis `()`, angle brackets `<>`, or arrow keys when the interface directionality changes. This behavior eliminates the need for you to create different key commands for left-to-right and right-to-left interfaces. Set this property to [false](https://developer.apple.com/documentation/swift/false) if you already change this item’s shortcut to support both left-to-right and right-to-left interfaces. You might also set it to [false](https://developer.apple.com/documentation/swift/false) to keep the same shortcut regardless of the interface’s directionality.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). However, if you set the [allowsAutomaticLocalization](allowsautomaticlocalization.md) property to [false](https://developer.apple.com/documentation/swift/false), the system disables this feature regardless of the property’s value.

## See Also

### Localizing keyboard shortcuts

- [allowsAutomaticLocalization](allowsautomaticlocalization.md): A Boolean value that determines whether the system automatically remaps keyboard shortcuts based on the keyboard layout.

# allowsAutomaticMirroring (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the system automatically swaps input strings for some keyboard shortcuts when the interface direction changes.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsAutomaticMirroring;
```

<a id="Discussion"></a>

## Discussion

When a key command represents a direction-related action, it’s common to specify an input string that conveys that direction. For example, Safari uses Command-\[ to go back to the previous page, and Command-\] to go forward to the next page. Because directions are different in left-to-right and right-to-left interfaces, this property lets the system swap some input strings to match the current language direction.

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), iOS 15 and later automatically swaps input strings that contain brackets `[]`, braces `{}`, parenthesis `()`, angle brackets `<>`, or arrow keys when the interface directionality changes. This behavior eliminates the need for you to create different key commands for left-to-right and right-to-left interfaces. Set this property to [false](https://developer.apple.com/documentation/swift/false) if you already change this item’s shortcut to support both left-to-right and right-to-left interfaces. You might also set it to [false](https://developer.apple.com/documentation/swift/false) to keep the same shortcut regardless of the interface’s directionality.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). However, if you set the [allowsAutomaticLocalization](allowsautomaticlocalization.md) property to [false](https://developer.apple.com/documentation/swift/false), the system disables this feature regardless of the property’s value.

## See Also

### Localizing keyboard shortcuts

- [allowsAutomaticLocalization](allowsautomaticlocalization.md): A Boolean value that determines whether the system automatically remaps keyboard shortcuts based on the keyboard layout.
