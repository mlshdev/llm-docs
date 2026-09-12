> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation/sectiontitles](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation/sectiontitles)

# sectionTitles (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the list of section titles for the table view.

## Declaration

```swift
var sectionTitles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the localized list of section titles sorted according to the specified ordering (for example, A through Z in US English). In its implementation of [tableView(\_:titleForHeaderInSection:)](../uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md), the data source can call this method on the indexed-collation object, passing in the section index and returning the result.

## See Also

### Providing section index data to the table view

- [sectionIndexTitles](sectionindextitles.md): Returns the list of section-index titles for the table view.
- [section(forSectionIndexTitle:)](section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.

# sectionTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the list of section titles for the table view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * sectionTitles;
```

<a id="Discussion"></a>

## Discussion

This property contains the localized list of section titles sorted according to the specified ordering (for example, A through Z in US English). In its implementation of [tableView:titleForHeaderInSection:](../uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md), the data source can call this method on the indexed-collation object, passing in the section index and returning the result.

## See Also

### Providing section index data to the table view

- [sectionIndexTitles](sectionindextitles.md): Returns the list of section-index titles for the table view.
- [sectionForSectionIndexTitleAtIndex:](section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.
