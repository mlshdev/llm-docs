> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/possibletitles](https://developer.apple.com/documentation/uikit/uibarbuttonitem/possibletitles)

# possibleTitles (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of possible titles to display on the bar button.

## Declaration

```swift
var possibleTitles: Set<String>? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a hint to the system on how to correctly size the bar button item to be wide enough to accommodate your widest title. Set the value of this property to an [NSSet](../../foundation/nsset.md) object containing all the titles you intend as possible titles for the bar button item. Use the actual text strings you intend to display.

This property applies to bar button items placed on navigation bars or toolbars.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItem.Style](style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](tintcolor.md): The tint color to apply to the button item.
- [isHidden](ishidden.md): A Boolean that determines the visibility of the item.
- [isSelected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](width.md): The width of the item.

# possibleTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of possible titles to display on the bar button.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSSet<NSString *> * possibleTitles;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a hint to the system on how to correctly size the bar button item to be wide enough to accommodate your widest title. Set the value of this property to an [NSSet](../../foundation/nsset.md) object containing all the titles you intend as possible titles for the bar button item. Use the actual text strings you intend to display.

This property applies to bar button items placed on navigation bars or toolbars.

## See Also

### Customizing item appearance

- [style](style-swift.property.md): The style of the item.
- [UIBarButtonItemStyle](style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](tintcolor.md): The tint color to apply to the button item.
- [hidden](ishidden.md): A Boolean that determines the visibility of the item.
- [selected](isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](width.md): The width of the item.
