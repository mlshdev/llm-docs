> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemstateappearance/badgetextattributes](https://developer.apple.com/documentation/uikit/uitabbaritemstateappearance/badgetextattributes)

# badgeTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of the item’s badge.

## Declaration

```swift
var badgeTextAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit supplies appropriate default values. For a list of possible keys, see [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the badge appearance

- [badgeBackgroundColor](badgebackgroundcolor.md): The background color of the badge.
- [badgeTitlePositionAdjustment](badgetitlepositionadjustment.md): The additional amount by which to offset the badge’s title horizontally and vertically.
- [badgePositionAdjustment](badgepositionadjustment.md): The additional amount by which to offset the badge horizontally and vertically.

# badgeTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of the item’s badge.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * badgeTextAttributes;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit supplies appropriate default values. For a list of possible keys, see [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the badge appearance

- [badgeBackgroundColor](badgebackgroundcolor.md): The background color of the badge.
- [badgeTitlePositionAdjustment](badgetitlepositionadjustment.md): The additional amount by which to offset the badge’s title horizontally and vertically.
- [badgePositionAdjustment](badgepositionadjustment.md): The additional amount by which to offset the badge horizontally and vertically.
