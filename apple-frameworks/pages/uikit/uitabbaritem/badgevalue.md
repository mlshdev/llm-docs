> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/badgevalue](https://developer.apple.com/documentation/uikit/uitabbaritem/badgevalue)

# badgeValue (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the item’s badge displays.

## Declaration

```swift
var badgeValue: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the item’s badge

- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes(\_:for:)](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributes(for:)](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.

# badgeValue (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the item’s badge displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * badgeValue;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the item’s badge

- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes:forState:](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributesForState:](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.
