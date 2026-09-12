> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/sectionindextitles(for:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/sectionindextitles(for:))

# sectionIndexTitles(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the data source to return the titles for the sections of a table view.

## Declaration

```swift
optional func sectionIndexTitles(for tableView: UITableView) -> [String]?
```

## Parameters

- `tableView`: The table-view object requesting this information.

<a id="return-value"></a>

## Return Value

An array of strings that serve as the title of sections in the table view and appear in the index list on the right side of the table view. The table view must be in the plain style (`UITableViewStylePlain`). For example, for an alphabetized list, you could return an array containing strings “A” through “Z”.

## See Also

### Configuring an index

- [tableView(\_:sectionForSectionIndexTitle:at:)](tableview%28__sectionforsectionindextitle_at_%29.md): Asks the data source to return the index of the section having the given title and section title index.

# sectionIndexTitlesForTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source to return the titles for the sections of a table view.

## Declaration

```objectivec
- (NSArray<NSString *> *) sectionIndexTitlesForTableView:(UITableView *) tableView;
```

## Parameters

- `tableView`: The table-view object requesting this information.

<a id="return-value"></a>

## Return Value

An array of strings that serve as the title of sections in the table view and appear in the index list on the right side of the table view. The table view must be in the plain style (`UITableViewStylePlain`). For example, for an alphabetized list, you could return an array containing strings “A” through “Z”.

## See Also

### Configuring an index

- [tableView:sectionForSectionIndexTitle:atIndex:](tableview%28__sectionforsectionindextitle_at_%29.md): Asks the data source to return the index of the section having the given title and section title index.
