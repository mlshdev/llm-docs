> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/flashscrollindicators()](https://developer.apple.com/documentation/uikit/uiscrollview/flashscrollindicators())

# flashScrollIndicators() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Displays the scroll indicators momentarily.

## Declaration

```swift
func flashScrollIndicators()
```

<a id="Discussion"></a>

## Discussion

You should call this method whenever you bring the scroll view to front.

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [UIScrollView.IndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [withScrollIndicatorsShown(forContentOffsetChanges:)](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.

# flashScrollIndicators (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Displays the scroll indicators momentarily.

## Declaration

```objectivec
- (void) flashScrollIndicators;
```

<a id="Discussion"></a>

## Discussion

You should call this method whenever you bring the scroll view to front.

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [UIScrollViewIndicatorStyle](indicatorstyle-swift.enum.md): Defines constants that represent the styles of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [withScrollIndicatorsShownForContentOffsetChanges:](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
