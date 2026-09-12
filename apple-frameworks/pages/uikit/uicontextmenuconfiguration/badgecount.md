> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration/badgecount](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration/badgecount)

# badgeCount (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The number of items in a multiple-item interaction.

## Declaration

```swift
var badgeCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The system uses this value to generate a badge for the stack of selected items to indicate how many items the menu is acting on. A value below `2` hides the badge. If you don’t set this value, the system determines it automatically.

## See Also

### Handling multiple-item interactions

- [secondaryItemIdentifiers](secondaryitemidentifiers.md): A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.

# badgeCount (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The number of items in a multiple-item interaction.

## Declaration

```objectivec
@property (nonatomic) NSInteger badgeCount;
```

<a id="Discussion"></a>

## Discussion

The system uses this value to generate a badge for the stack of selected items to indicate how many items the menu is acting on. A value below `2` hides the badge. If you don’t set this value, the system determines it automatically.

## See Also

### Handling multiple-item interactions

- [secondaryItemIdentifiers](secondaryitemidentifiers.md): A set of identifiers corresponding to each item other than the primary item in a multiple-item interaction.
