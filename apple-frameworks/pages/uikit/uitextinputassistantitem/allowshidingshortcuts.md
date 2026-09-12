> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputassistantitem/allowshidingshortcuts](https://developer.apple.com/documentation/uikit/uitextinputassistantitem/allowshidingshortcuts)

# allowsHidingShortcuts (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the user can hide the shortcuts bar.

## Declaration

```swift
var allowsHidingShortcuts: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user may hide the shortcuts bar when the keyboard is visible. When the value is [false](https://developer.apple.com/documentation/swift/false), the shortcuts bar remains visible while the keyboard is visible. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the shortcuts bar

- [leadingBarButtonGroups](leadingbarbuttongroups.md): The array of button item groups to display before the typing suggestions.
- [trailingBarButtonGroups](trailingbarbuttongroups.md): The array of button item groups to display after the typing suggestions.

# allowsHidingShortcuts (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether the user can hide the shortcuts bar.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL allowsHidingShortcuts;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the user may hide the shortcuts bar when the keyboard is visible. When the value is [false](https://developer.apple.com/documentation/swift/false), the shortcuts bar remains visible while the keyboard is visible. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the shortcuts bar

- [leadingBarButtonGroups](leadingbarbuttongroups.md): The array of button item groups to display before the typing suggestions.
- [trailingBarButtonGroups](trailingbarbuttongroups.md): The array of button item groups to display after the typing suggestions.
