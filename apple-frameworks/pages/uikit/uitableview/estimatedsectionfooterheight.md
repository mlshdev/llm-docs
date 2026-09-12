> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/estimatedsectionfooterheight](https://developer.apple.com/documentation/uikit/uitableview/estimatedsectionfooterheight)

# estimatedSectionFooterHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The estimated height of section footers in the table view.

## Declaration

```swift
var estimatedSectionFooterHeight: CGFloat { get set }
```

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing a nonnegative estimate of the height of section footers can improve the performance of loading the table view. If the table contains variable height section footers, it might be expensive to calculate all their heights when the table loads. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

The default value is [automaticDimension](automaticdimension.md), which means that the table view selects an estimated height to use on your behalf. Setting the value to `0` disables estimated heights, which causes the table view to request the actual height for each footer. If your table uses self-sizing footers, the value of this property must not be `0`.

When using height estimates, the table view actively manages the [contentOffset](../uiscrollview/contentoffset.md) and [contentSize](../uiscrollview/contentsize.md) properties inherited from its scroll view. Don’t attempt to read or modify those properties directly.

## See Also

### Related Documentation

- [estimatedRowHeight](estimatedrowheight.md): The estimated height of rows in the table view.

### Configuring header and footer appearance

- [sectionHeaderHeight](sectionheaderheight.md): The height of section headers in the table view.
- [sectionFooterHeight](sectionfooterheight.md): The height of section footers in the table view.
- [estimatedSectionHeaderHeight](estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [sectionHeaderTopPadding](sectionheadertoppadding.md): The amount of padding above each section header.

# estimatedSectionFooterHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The estimated height of section footers in the table view.

## Declaration

```objectivec
@property (nonatomic) CGFloat estimatedSectionFooterHeight;
```

## Mentioned In

- [Estimating the height of a table’s scrolling area](../estimating-the-height-of-a-table-s-scrolling-area.md)

<a id="Discussion"></a>

## Discussion

Providing a nonnegative estimate of the height of section footers can improve the performance of loading the table view. If the table contains variable height section footers, it might be expensive to calculate all their heights when the table loads. Using estimation allows you to defer some of the cost of geometry calculation from load time to scrolling time.

The default value is [UITableViewAutomaticDimension](automaticdimension.md), which means that the table view selects an estimated height to use on your behalf. Setting the value to `0` disables estimated heights, which causes the table view to request the actual height for each footer. If your table uses self-sizing footers, the value of this property must not be `0`.

When using height estimates, the table view actively manages the [contentOffset](../uiscrollview/contentoffset.md) and [contentSize](../uiscrollview/contentsize.md) properties inherited from its scroll view. Don’t attempt to read or modify those properties directly.

## See Also

### Related Documentation

- [estimatedRowHeight](estimatedrowheight.md): The estimated height of rows in the table view.

### Configuring header and footer appearance

- [sectionHeaderHeight](sectionheaderheight.md): The height of section headers in the table view.
- [sectionFooterHeight](sectionfooterheight.md): The height of section footers in the table view.
- [estimatedSectionHeaderHeight](estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [sectionHeaderTopPadding](sectionheadertoppadding.md): The amount of padding above each section header.
