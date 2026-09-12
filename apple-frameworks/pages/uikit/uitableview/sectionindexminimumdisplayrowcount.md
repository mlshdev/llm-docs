> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/sectionindexminimumdisplayrowcount](https://developer.apple.com/documentation/uikit/uitableview/sectionindexminimumdisplayrowcount)

# sectionIndexMinimumDisplayRowCount (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of table rows at which to display the index list on the right edge of the table.

## Declaration

```swift
var sectionIndexMinimumDisplayRowCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This property is applicable only to table views in the [UITableView.Style.plain](style-swift.enum/plain.md) style. The default value is zero.

## See Also

### Configuring the table index

- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [indexSearch](indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.

# sectionIndexMinimumDisplayRowCount (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The number of table rows at which to display the index list on the right edge of the table.

## Declaration

```objectivec
@property (nonatomic) NSInteger sectionIndexMinimumDisplayRowCount;
```

<a id="Discussion"></a>

## Discussion

This property is applicable only to table views in the [UITableViewStylePlain](style-swift.enum/plain.md) style. The default value is zero.

## See Also

### Configuring the table index

- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [UITableViewIndexSearch](indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.
