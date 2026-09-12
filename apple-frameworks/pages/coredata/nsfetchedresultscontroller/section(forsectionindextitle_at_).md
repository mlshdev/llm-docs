> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/section(forsectionindextitle:at:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/section(forsectionindextitle:at:))

# section(forSectionIndexTitle:at:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the section number for a given section title and index in the section index.

## Declaration

```swift
func section(forSectionIndexTitle title: String, at sectionIndex: Int) -> Int
```

## Parameters

- `title`: The title of a section
- `sectionIndex`: The index of a section.

<a id="return-value"></a>

## Return Value

The section number for the given section title and index in the section index

<a id="Discussion"></a>

## Discussion

You would typically call this method when executing `UITableViewDataSource`’s [tableView(\_:sectionForSectionIndexTitle:at:)](../../uikit/uitableviewdatasource/tableview%28__sectionforsectionindextitle_at_%29.md) method.

## See Also

### Querying Section Information

- [sections](sections.md): The sections for the fetch results.

# sectionForSectionIndexTitle:atIndex: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the section number for a given section title and index in the section index.

## Declaration

```objectivec
- (NSInteger) sectionForSectionIndexTitle:(NSString *) title atIndex:(NSInteger) sectionIndex;
```

## Parameters

- `title`: The title of a section
- `sectionIndex`: The index of a section.

<a id="return-value"></a>

## Return Value

The section number for the given section title and index in the section index

<a id="Discussion"></a>

## Discussion

You would typically call this method when executing `UITableViewDataSource`’s [tableView:sectionForSectionIndexTitle:atIndex:](../../uikit/uitableviewdatasource/tableview%28__sectionforsectionindextitle_at_%29.md) method.

## See Also

### Querying Section Information

- [sections](sections.md): The sections for the fetch results.
