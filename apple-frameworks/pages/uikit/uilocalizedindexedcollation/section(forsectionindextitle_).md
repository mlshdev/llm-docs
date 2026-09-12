> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalizedindexedcollation/section(forsectionindextitle:)](https://developer.apple.com/documentation/uikit/uilocalizedindexedcollation/section(forsectionindextitle:))

# section(forSectionIndexTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the section that the table view should scroll to for the given index title.

## Declaration

```swift
func section(forSectionIndexTitle indexTitleIndex: Int) -> Int
```

## Parameters

- `indexTitleIndex`: An integer identifying a section-index title by its position in the array of such titles.

<a id="return-value"></a>

## Return Value

An integer identifying the table-view section associated with `indexTitleIndex`.

<a id="Discussion"></a>

## Discussion

This method allows the table view to map between a given item in the section index and a given section even when there isn’t a one-to-one mapping. In its implementation of [tableView(\_:sectionForSectionIndexTitle:at:)](../uitableviewdatasource/tableview%28__sectionforsectionindextitle_at_%29.md), the data source can call this method on the indexed-collation object specifying as an argument the passed-in index integer; it then returns the result to the table view.

## See Also

### Providing section index data to the table view

- [sectionTitles](sectiontitles.md): Returns the list of section titles for the table view.
- [sectionIndexTitles](sectionindextitles.md): Returns the list of section-index titles for the table view.

# sectionForSectionIndexTitleAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the section that the table view should scroll to for the given index title.

## Declaration

```objectivec
- (NSInteger) sectionForSectionIndexTitleAtIndex:(NSInteger) indexTitleIndex;
```

## Parameters

- `indexTitleIndex`: An integer identifying a section-index title by its position in the array of such titles.

<a id="return-value"></a>

## Return Value

An integer identifying the table-view section associated with `indexTitleIndex`.

<a id="Discussion"></a>

## Discussion

This method allows the table view to map between a given item in the section index and a given section even when there isn’t a one-to-one mapping. In its implementation of [tableView:sectionForSectionIndexTitle:atIndex:](../uitableviewdatasource/tableview%28__sectionforsectionindextitle_at_%29.md), the data source can call this method on the indexed-collation object specifying as an argument the passed-in index integer; it then returns the result to the table view.

## See Also

### Providing section index data to the table view

- [sectionTitles](sectiontitles.md): Returns the list of section titles for the table view.
- [sectionIndexTitles](sectionindextitles.md): Returns the list of section-index titles for the table view.
