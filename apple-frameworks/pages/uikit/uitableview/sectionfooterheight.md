> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitableview/sectionfooterheight

# sectionFooterHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The height of section footers in the table view.

## Declaration

```swift
var sectionFooterHeight: CGFloat { get set }
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The default value is [automaticDimension](automaticdimension.md). If the delegate doesn’t implement [tableView(\_:heightForFooterInSection:)](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md), the table view calculates the height automatically. To override automatic height calculation, set this property to a positive value.

## See Also

### Related Documentation

- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.

### Configuring header and footer appearance

- [sectionHeaderHeight](sectionheaderheight.md): The height of section headers in the table view.
- [estimatedSectionHeaderHeight](estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [estimatedSectionFooterHeight](estimatedsectionfooterheight.md): The estimated height of section footers in the table view.
- [sectionHeaderTopPadding](sectionheadertoppadding.md): The amount of padding above each section header.

# sectionFooterHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The height of section footers in the table view.

## Declaration

```objectivec
@property (nonatomic) CGFloat sectionFooterHeight;
```

## Mentioned In

- [Adding headers and footers to table sections](../adding-headers-and-footers-to-table-sections.md)

<a id="Discussion"></a>

## Discussion

The default value is [UITableViewAutomaticDimension](automaticdimension.md). If the delegate doesn’t implement [tableView:heightForFooterInSection:](../uitableviewdelegate/tableview%28__heightforfooterinsection_%29.md), the table view calculates the height automatically. To override automatic height calculation, set this property to a positive value.

## See Also

### Related Documentation

- [tableFooterView](tablefooterview.md): The view that displays below the table’s content.

### Configuring header and footer appearance

- [sectionHeaderHeight](sectionheaderheight.md): The height of section headers in the table view.
- [estimatedSectionHeaderHeight](estimatedsectionheaderheight.md): The estimated height of section headers in the table view.
- [estimatedSectionFooterHeight](estimatedsectionfooterheight.md): The estimated height of section footers in the table view.
- [sectionHeaderTopPadding](sectionheadertoppadding.md): The amount of padding above each section header.
