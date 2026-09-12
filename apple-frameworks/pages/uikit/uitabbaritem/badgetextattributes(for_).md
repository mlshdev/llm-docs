> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/badgetextattributes(for:)](https://developer.apple.com/documentation/uikit/uitabbaritem/badgetextattributes(for:))

# badgeTextAttributes(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the badge’s text attributes for the specified state.

## Declaration

```swift
func badgeTextAttributes(for state: UIControl.State) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `state`: The item’s state. For possible values, see [UIControl.State](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the attributes the item applies to its badge’s value for the specified state. For a list of attributes, see [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes(\_:for:)](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.

# badgeTextAttributesForState: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Returns the badge’s text attributes for the specified state.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) badgeTextAttributesForState:(UIControlState) state;
```

## Parameters

- `state`: The item’s state. For possible values, see [UIControlState](../uicontrol/state-swift.struct.md).

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the attributes the item applies to its badge’s value for the specified state. For a list of attributes, see [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the item’s badge

- [badgeValue](badgevalue.md): The text that the item’s badge displays.
- [badgeColor](badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes:forState:](setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
