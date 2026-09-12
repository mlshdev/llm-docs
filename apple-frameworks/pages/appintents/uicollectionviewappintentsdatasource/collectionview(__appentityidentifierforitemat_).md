> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uicollectionviewappintentsdatasource/collectionview(_:appentityidentifierforitemat:)](https://developer.apple.com/documentation/appintents/uicollectionviewappintentsdatasource/collectionview(_:appentityidentifierforitemat:))

# collectionView(\_:appEntityIdentifierForItemAt:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

Asks the data source to return an app entity identifier for a cell at a particular location in the collection view.

## Declaration

```swift
@MainActor func collectionView(_ collectionView: UICollectionView, appEntityIdentifierForItemAt indexPath: IndexPath) -> EntityIdentifier?
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

## Default Implementations

### UICollectionViewAppIntentsDataSource Implementations

- [collectionView(\_:appEntityIdentifierForItemAt:)](collectionview%28__appentityidentifierforitemat_%29-7mbns.md): Asks the data source to return an app entity identifier for a cell at a particular location in the collection view.
