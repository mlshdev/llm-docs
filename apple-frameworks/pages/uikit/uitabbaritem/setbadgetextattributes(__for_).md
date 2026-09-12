> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/setbadgetextattributes(_:for:)](https://developer.apple.com/documentation/uikit/uitabbaritem/setbadgetextattributes(_:for:))

# setBadgeTextAttributes(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Registers text attributes that the badge uses for the specified state.

## Declaration

```swift
func setBadgeTextAttributes(_ textAttributes: [NSAttributedString.Key : Any]?, for state: UIControl.State)
```

## Parameters

- `textAttributes`: A dictionary of text attributes. For a list of possible attributes, see [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).
- `state`: The item’s state. For possible values, see [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

The [setTitleTextAttributes(\_:for:)](../uibaritem/settitletextattributes%28__for_%29.md) method allows you to customize the appearance of the item’s title. Use this method to apply similar customizations to the badge’s value to achieve a consistent appearance.

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [badgeTextAttributes(for:)](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.

# setBadgeTextAttributes:forState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Registers text attributes that the badge uses for the specified state.

## Declaration

```objectivec
- (void) setBadgeTextAttributes:(NSDictionary<NSString *,id> *) textAttributes forState:(UIControlState) state;
```

## Parameters

- `textAttributes`: A dictionary of text attributes. For a list of possible attributes, see [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).
- `state`: The item’s state. For possible values, see [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

The [setTitleTextAttributes:forState:](../uibaritem/settitletextattributes%28__for_%29.md) method allows you to customize the appearance of the item’s title. Use this method to apply similar customizations to the badge’s value to achieve a consistent appearance.

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [badgeTextAttributesForState:](badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.
