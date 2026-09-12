> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/verticalscrollindicatorinsets](https://developer.apple.com/documentation/uikit/uiscrollview/verticalscrollindicatorinsets)

# verticalScrollIndicatorInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 13.1+ · tvOS 11.1+ · visionOS 1.0+

The vertical distance the scroll indicators are inset from the edge of the scroll view.

## Declaration

```swift
var verticalScrollIndicatorInsets: UIEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [zero](../uiedgeinsets/zero.md).

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [UIScrollView.IndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators()](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShown(forContentOffsetChanges:)](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.

# verticalScrollIndicatorInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 13.1+ · tvOS 11.1+ · visionOS 1.0+

The vertical distance the scroll indicators are inset from the edge of the scroll view.

## Declaration

```objectivec
@property (nonatomic) UIEdgeInsets verticalScrollIndicatorInsets;
```

<a id="Discussion"></a>

## Discussion

The default value is [UIEdgeInsetsZero](../uiedgeinsets/zero.md).

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [UIScrollViewIndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShownForContentOffsetChanges:](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
