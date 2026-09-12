> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/numberofsections(in:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/numberofsections(in:))

# numberOfSections(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the data source to return the number of sections in the table view.

## Declaration

```swift
optional func numberOfSections(in tableView: UITableView) -> Int
```

## Parameters

- `tableView`: An object representing the table view requesting this information.

<a id="return-value"></a>

## Return Value

The number of sections in `tableView`.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the table configures the table with one section.

## See Also

### Providing the number of rows and sections

- [tableView(\_:numberOfRowsInSection:)](tableview%28__numberofrowsinsection_%29.md): Tells the data source to return the number of rows in a given section of a table view.

# numberOfSectionsInTableView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks the data source to return the number of sections in the table view.

## Declaration

```objectivec
- (NSInteger) numberOfSectionsInTableView:(UITableView *) tableView;
```

## Parameters

- `tableView`: An object representing the table view requesting this information.

<a id="return-value"></a>

## Return Value

The number of sections in `tableView`.

<a id="Discussion"></a>

## Discussion

If you don’t implement this method, the table configures the table with one section.

## See Also

### Providing the number of rows and sections

- [tableView:numberOfRowsInSection:](tableview%28__numberofrowsinsection_%29.md): Tells the data source to return the number of rows in a given section of a table view.
