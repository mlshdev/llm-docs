> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/nstableviewappintentsdatasource/tableview(_:appentityidentifierfor:)](https://developer.apple.com/documentation/appintents/nstableviewappintentsdatasource/tableview(_:appentityidentifierfor:))

# tableView(\_:appEntityIdentifierFor:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asks the data source to return an app entity identifier for a particular row in the table view.

## Declaration

```swift
@MainActor func tableView(_ tableView: NSTableView, appEntityIdentifierFor row: Int) -> EntityIdentifier?
```

## Parameters

- `tableView`: The table-view object asking for the app entity identifier.
- `row`: The row of the item in the table view.

<a id="return-value"></a>

## Return Value

The app entity identifier for the item at the specified location in the table view.

## Default Implementations

### NSTableViewAppIntentsDataSource Implementations

- [tableView(\_:appEntityIdentifierFor:)](tableview%28__appentityidentifierfor_%29-495df.md): Asks the data source to return an app entity identifier for a particular row in the table view.
