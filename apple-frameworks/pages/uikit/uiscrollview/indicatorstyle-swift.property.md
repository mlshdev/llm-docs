> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/indicatorstyle-swift.property](https://developer.apple.com/documentation/uikit/uiscrollview/indicatorstyle-swift.property)

# indicatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of the scroll indicators.

## Declaration

```swift
var indicatorStyle: UIScrollView.IndicatorStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The default style is [UIScrollView.IndicatorStyle.default](indicatorstyle-swift.enum/default.md). See [UIScrollView.IndicatorStyle](indicatorstyle-swift.enum.md) for descriptions of these constants.

## See Also

### Managing the scroll indicator and refresh control

- [UIScrollView.IndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators()](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShown(forContentOffsetChanges:)](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.

# indicatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style of the scroll indicators.

## Declaration

```objectivec
@property (nonatomic) UIScrollViewIndicatorStyle indicatorStyle;
```

<a id="Discussion"></a>

## Discussion

The default style is [UIScrollViewIndicatorStyleDefault](indicatorstyle-swift.enum/default.md). See [UIScrollViewIndicatorStyle](indicatorstyle-swift.enum.md) for descriptions of these constants.

## See Also

### Managing the scroll indicator and refresh control

- [UIScrollViewIndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShownForContentOffsetChanges:](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
