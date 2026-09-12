> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/nscollectionviewappintentsdatasource/collectionview(_:appentityidentifierforitemat:)-8yba0](https://developer.apple.com/documentation/appintents/nscollectionviewappintentsdatasource/collectionview(_:appentityidentifierforitemat:)-8yba0)

# collectionView(\_:appEntityIdentifierForItemAt:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Asks the data source to return an app entity identifier for a cell at a particular location in the collection view.

## Declaration

```swift
@MainActor func collectionView(_ collectionView: NSCollectionView, appEntityIdentifierForItemAt indexPath: IndexPath) -> EntityIdentifier?
```

## Parameters

- `collectionView`: The collection view asking for the app entity identifier.
- `indexPath`: The index path that specifies the section and item number in the collection view.

<a id="return-value"></a>

## Return Value

The app entity identifier at the specified location in the collection view.

<a id="discussion"></a>

## Discussion

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](../../appintents.md).
