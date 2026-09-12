> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritemstateappearance/titletextattributes](https://developer.apple.com/documentation/uikit/uitabbaritemstateappearance/titletextattributes)

# titleTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of the tab bar item’s title.

## Declaration

```swift
var titleTextAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit supplies appropriate default values. For a list of possible keys, see [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the item’s title

- [titlePositionAdjustment](titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.

# titleTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of the tab bar item’s title.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * titleTextAttributes;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit supplies appropriate default values. For a list of possible keys, see [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the item’s title

- [titlePositionAdjustment](titlepositionadjustment.md): The additional amount by which to offset the title horizontally and vertically.
