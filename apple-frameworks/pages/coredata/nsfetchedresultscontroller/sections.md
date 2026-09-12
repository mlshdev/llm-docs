> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/sections](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/sections)

# sections (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The sections for the fetch results.

## Declaration

```swift
var sections: [any NSFetchedResultsSectionInfo]? { get }
```

<a id="Discussion"></a>

## Discussion

The objects in the sections array implement the [NSFetchedResultsSectionInfo](../nsfetchedresultssectioninfo.md) protocol.

You typically use the sections array when implementing `UITableViewDataSource` methods, such as [numberOfSections(in:)](../../uikit/uitableviewdatasource/numberofsections%28in_%29.md) and [tableView(\_:titleForHeaderInSection:)](../../uikit/uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md).

## See Also

### Querying Section Information

- [section(forSectionIndexTitle:at:)](section%28forsectionindextitle_at_%29.md): Returns the section number for a given section title and index in the section index.

# sections (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The sections for the fetch results.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<id<NSFetchedResultsSectionInfo>> * sections;
```

<a id="Discussion"></a>

## Discussion

The objects in the sections array implement the [NSFetchedResultsSectionInfo](../nsfetchedresultssectioninfo.md) protocol.

You typically use the sections array when implementing `UITableViewDataSource` methods, such as [numberOfSectionsInTableView:](../../uikit/uitableviewdatasource/numberofsections%28in_%29.md) and [tableView:titleForHeaderInSection:](../../uikit/uitableviewdatasource/tableview%28__titleforheaderinsection_%29.md).

## See Also

### Querying Section Information

- [sectionForSectionIndexTitle:atIndex:](section%28forsectionindextitle_at_%29.md): Returns the section number for a given section title and index in the section index.
