> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uitableviewappintentsdatasource/tableview(_:appentityidentifierforrowat:)-8jkr9](https://developer.apple.com/documentation/appintents/uitableviewappintentsdatasource/tableview(_:appentityidentifierforrowat:)-8jkr9)

# tableView(\_:appEntityIdentifierForRowAt:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

Asks the data source to return an app entity identifier for a cell at a particular location in the table view.

## Declaration

```swift
@MainActor func tableView(_ tableView: UITableView, appEntityIdentifierForRowAt indexPath: IndexPath) -> EntityIdentifier?
```

## Parameters

- `tableView`: The table-view object asking for the app entity identifier.
- `indexPath`: An index path locating a row in the table view.

<a id="return-value"></a>

## Return Value

The app entity identifier for the item at the specified location in the table view.

<a id="discussion"></a>

## Discussion

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](../../appintents.md).
