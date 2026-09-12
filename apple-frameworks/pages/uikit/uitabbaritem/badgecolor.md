> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/badgecolor](https://developer.apple.com/documentation/uikit/uitabbaritem/badgecolor)

# badgeColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The background color of the item’s badge.

## Declaration

```swift
@NSCopying var badgeColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If you don’t specify a value, the item uses [systemRed](../uicolor/systemred.md).

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [setBadgeTextAttributes(\_:for:)](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributes(for:)](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.

# badgeColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The background color of the item’s badge.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIColor * badgeColor;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. If you don’t specify a value, the item uses [systemRedColor](../uicolor/systemred.md).

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [setBadgeTextAttributes:forState:](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributesForState:](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.
