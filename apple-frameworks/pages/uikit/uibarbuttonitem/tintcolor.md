> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/tintcolor](https://developer.apple.com/documentation/uikit/uibarbuttonitem/tintcolor)

# tintColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the button item.

## Declaration

```swift
var tintColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, all subclasses of [UIView](../uiview.md) derive their behavior for [tintColor](../uiview/tintcolor.md) from the base class. Although [UIBarButtonItem](../uibarbuttonitem.md) isn’t a view, its [tintColor](tintcolor.md) property behaves the same as that of [UIView](../uiview.md). See the discussion of [tintColor](../uiview/tintcolor.md) in [UIView](../uiview.md) for more information.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItem.Style](style-swift.enum.md): Constants that specify the style of an item.
- [isHidden](ishidden.md): A Boolean that determines the visibility of the item.
- [isSelected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](width.md): The width of the item.
- [possibleTitles](possibletitles.md): The set of possible titles to display on the bar button.

# tintColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The tint color to apply to the button item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * tintColor;
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, all subclasses of [UIView](../uiview.md) derive their behavior for [tintColor](../uiview/tintcolor.md) from the base class. Although [UIBarButtonItem](../uibarbuttonitem.md) isn’t a view, its [tintColor](tintcolor.md) property behaves the same as that of [UIView](../uiview.md). See the discussion of [tintColor](../uiview/tintcolor.md) in [UIView](../uiview.md) for more information.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItemStyle](style-swift.enum.md): Constants that specify the style of an item.
- [hidden](ishidden.md): A Boolean that determines the visibility of the item.
- [selected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](width.md): The width of the item.
- [possibleTitles](possibletitles.md): The set of possible titles to display on the bar button.
