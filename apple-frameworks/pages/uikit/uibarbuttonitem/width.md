> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/width](https://developer.apple.com/documentation/uikit/uibarbuttonitem/width)

# width (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The width of the item.

## Declaration

```swift
var width: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

If this property value is positive, the width of the combined image and title are fixed. If the value is `0.0` or negative, the item sets the width of the combined image and title to fit. This property is ignored if the style uses radio mode. The default value is `0.0`.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItem.Style](style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](tintcolor.md): The tint color to apply to the button item.
- [isHidden](ishidden.md): A Boolean that determines the visibility of the item.
- [isSelected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [possibleTitles](possibletitles.md): The set of possible titles to display on the bar button.

# width (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The width of the item.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) CGFloat width;
```

<a id="Discussion"></a>

## Discussion

If this property value is positive, the width of the combined image and title are fixed. If the value is `0.0` or negative, the item sets the width of the combined image and title to fit. This property is ignored if the style uses radio mode. The default value is `0.0`.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItemStyle](style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](tintcolor.md): The tint color to apply to the button item.
- [hidden](ishidden.md): A Boolean that determines the visibility of the item.
- [selected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [possibleTitles](possibletitles.md): The set of possible titles to display on the bar button.
