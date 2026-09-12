> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation/sectionindextitles](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation/sectionindextitles)

# sectionIndexTitles (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the list of section-index titles for the table view.

## Declaration

```swift
var sectionIndexTitles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the localized list of section-index titles sorted according to the specified ordering (for example, A through Z in US English). In its implementation of [sectionIndexTitles(for:)](../uitableviewdatasource/sectionindextitles%28for_%29.md), the data source can call this method on the indexed-collation object and pass back the result.

## See Also

### Providing section index data to the table view

- [sectionTitles](sectiontitles.md): Returns the list of section titles for the table view.
- [section(forSectionIndexTitle:)](section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.

# sectionIndexTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the list of section-index titles for the table view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * sectionIndexTitles;
```

<a id="Discussion"></a>

## Discussion

This property contains the localized list of section-index titles sorted according to the specified ordering (for example, A through Z in US English). In its implementation of [sectionIndexTitlesForTableView:](../uitableviewdatasource/sectionindextitles%28for_%29.md), the data source can call this method on the indexed-collation object and pass back the result.

## See Also

### Providing section index data to the table view

- [sectionTitles](sectiontitles.md): Returns the list of section titles for the table view.
- [sectionForSectionIndexTitleAtIndex:](section%28forsectionindextitle_%29.md): Returns the section that the table view should scroll to for the given index title.
