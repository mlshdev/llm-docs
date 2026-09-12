> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbarappearance/largetitletextattributes](https://developer.apple.com/documentation/uikit/uinavigationbarappearance/largetitletextattributes)

# largeTitleTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of a large-size title.

## Declaration

```swift
var largeTitleTextAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit applies default font and color values. For a list of possible keys, see [NSAttributedString.Key](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): String attributes to apply to the text of a standard-size title.
- [titlePositionAdjustment](titlepositionadjustment.md): The distance, in points, by which to offset the title horizontally and vertically.

# largeTitleTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

String attributes to apply to the text of a large-size title.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDictionary<NSString *,id> * largeTitleTextAttributes;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify font or color attributes for the text, UIKit applies default font and color values. For a list of possible keys, see [NSAttributedStringKey](../../foundation/nsattributedstring/key.md).

## See Also

### Configuring the title

- [titleTextAttributes](titletextattributes.md): String attributes to apply to the text of a standard-size title.
- [titlePositionAdjustment](titlepositionadjustment.md): The distance, in points, by which to offset the title horizontally and vertically.
