> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdatasource/tableview(_:numberofrowsinsection:)](https://developer.apple.com/documentation/uikit/uitableviewdatasource/tableview(_:numberofrowsinsection:))

# tableView(\_:numberOfRowsInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the data source to return the number of rows in a given section of a table view.

## Declaration

```swift
func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `section`: An index number identifying a section in `tableView`.

<a id="return-value"></a>

## Return Value

The number of rows in `section`.

## See Also

### Providing the number of rows and sections

- [numberOfSections(in:)](numberofsections%28in_%29.md): Asks the data source to return the number of sections in the table view.

# tableView:numberOfRowsInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the data source to return the number of rows in a given section of a table view.

## Declaration

```objectivec
- (NSInteger) tableView:(UITableView *) tableView numberOfRowsInSection:(NSInteger) section;
```

## Parameters

- `tableView`: The table-view object requesting this information.
- `section`: An index number identifying a section in `tableView`.

<a id="return-value"></a>

## Return Value

The number of rows in `section`.

## See Also

### Providing the number of rows and sections

- [numberOfSectionsInTableView:](numberofsections%28in_%29.md): Asks the data source to return the number of sections in the table view.
