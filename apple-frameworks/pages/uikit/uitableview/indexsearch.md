> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/indexsearch](https://developer.apple.com/documentation/uikit/uitableview/indexsearch)

# indexSearch (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A constant for adding the magnifying glass icon to the section index of a table view.

## Declaration

```swift
class let indexSearch: String
```

<a id="Discussion"></a>

## Discussion

If the data source includes this constant string in the array of strings it returns in [sectionIndexTitles(for:)](../uitableviewdatasource/sectionindextitles%28for_%29.md), the section index displays a magnifying glass icon at the corresponding index location. This location should generally be the first title in the index.

## See Also

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.

# UITableViewIndexSearch (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A constant for adding the magnifying glass icon to the section index of a table view.

## Declaration

```objectivec
extern NSString * const UITableViewIndexSearch;
```

<a id="Discussion"></a>

## Discussion

If the data source includes this constant string in the array of strings it returns in [sectionIndexTitlesForTableView:](../uitableviewdatasource/sectionindextitles%28for_%29.md), the section index displays a magnifying glass icon at the corresponding index location. This location should generally be the first title in the index.

## See Also

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexBackgroundColor](sectionindexbackgroundcolor.md): The color to use for the background of the table view’s section index.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
