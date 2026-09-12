> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/indicatorstyle-swift.enum](https://developer.apple.com/documentation/uikit/uiscrollview/indicatorstyle-swift.enum)

# UIScrollView.IndicatorStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Defines constants that represent the styles of the scroll indicators.

## Declaration

```swift
enum IndicatorStyle
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [indicatorStyle](indicatorstyle-swift.property.md) style.

## Topics

### Constants

- [UIScrollView.IndicatorStyle.default](indicatorstyle-swift.enum/default.md): The default style of scroll indicator, which is black with a white border.
- [UIScrollView.IndicatorStyle.black](indicatorstyle-swift.enum/black.md): A style of indicator which is black and smaller than the default style.
- [UIScrollView.IndicatorStyle.white](indicatorstyle-swift.enum/white.md): A style of indicator is white and smaller than the default style.

### Initializers

- [init(rawValue:)](indicatorstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators()](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShown(forContentOffsetChanges:)](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.

# UIScrollViewIndicatorStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Defines constants that represent the styles of the scroll indicators.

## Declaration

```objectivec
enum UIScrollViewIndicatorStyle : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [indicatorStyle](indicatorstyle-swift.property.md) style.

## Topics

### Constants

- [UIScrollViewIndicatorStyleDefault](indicatorstyle-swift.enum/default.md): The default style of scroll indicator, which is black with a white border.
- [UIScrollViewIndicatorStyleBlack](indicatorstyle-swift.enum/black.md): A style of indicator which is black and smaller than the default style.
- [UIScrollViewIndicatorStyleWhite](indicatorstyle-swift.enum/white.md): A style of indicator is white and smaller than the default style.

## See Also

### Managing the scroll indicator and refresh control

- [indicatorStyle](indicatorstyle-swift.property.md): The style of the scroll indicators.
- [showsHorizontalScrollIndicator](showshorizontalscrollindicator.md): A Boolean value that controls whether the horizontal scroll indicator is visible.
- [showsVerticalScrollIndicator](showsverticalscrollindicator.md): A Boolean value that controls whether the vertical scroll indicator is visible.
- [horizontalScrollIndicatorInsets](horizontalscrollindicatorinsets.md): The horizontal distance the scroll indicators are inset from the edge of the scroll view.
- [verticalScrollIndicatorInsets](verticalscrollindicatorinsets.md): The vertical distance the scroll indicators are inset from the edge of the scroll view.
- [automaticallyAdjustsScrollIndicatorInsets](automaticallyadjustsscrollindicatorinsets.md): A Boolean value that indicates whether the system automatically adjusts the scroll indicator insets.
- [flashScrollIndicators](flashscrollindicators%28%29.md): Displays the scroll indicators momentarily.
- [withScrollIndicatorsShownForContentOffsetChanges:](withscrollindicatorsshown%28forcontentoffsetchanges_%29.md): Displays the scroll indicators during updates to the scroll view’s content offset.
- [refreshControl](refreshcontrol.md): The refresh control associated with the scroll view.
- [UIRefreshControl](../uirefreshcontrol.md): A standard control that can initiate the refreshing of a scroll view’s contents.
