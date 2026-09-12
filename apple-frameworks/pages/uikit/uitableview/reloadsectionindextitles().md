> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/reloadsectionindextitles()](https://developer.apple.com/documentation/uikit/uitableview/reloadsectionindextitles())

# reloadSectionIndexTitles() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the items in the index bar along the right side of the table view.

## Declaration

```swift
func reloadSectionIndexTitles()
```

<a id="Discussion"></a>

## Discussion

This method gives you a way to update the section index after inserting or deleting sections without having to reload the whole table.

## See Also

### Related Documentation

- [sectionIndexTitles(for:)](../uitableviewdatasource/sectionindextitles%28for_%29.md): Asks the data source to return the titles for the sections of a table view.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRows(at:)](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData()](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.

# reloadSectionIndexTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the items in the index bar along the right side of the table view.

## Declaration

```objectivec
- (void) reloadSectionIndexTitles;
```

<a id="Discussion"></a>

## Discussion

This method gives you a way to update the section index after inserting or deleting sections without having to reload the whole table.

## See Also

### Related Documentation

- [sectionIndexTitlesForTableView:](../uitableviewdatasource/sectionindextitles%28for_%29.md): Asks the data source to return the titles for the sections of a table view.

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRowsAtIndexPaths:](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
