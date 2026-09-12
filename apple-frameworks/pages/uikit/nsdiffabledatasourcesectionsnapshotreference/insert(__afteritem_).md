> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insert(_:afteritem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insert(_:afteritem:))

# insert(\_:afterItem:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.

## Declaration

```swift
func insert(_ snapshot: NSDiffableDataSourceSectionSnapshotReference, afterItem item: Any) -> Any
```

## See Also

### Inserting items

- [insertItems(\_:afterItem:)](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insert(\_:beforeItem:)](insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.

# insertSnapshot:afterItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.

## Declaration

```objectivec
- (ItemIdentifierType) insertSnapshot:(NSDiffableDataSourceSectionSnapshot<id> *) snapshot afterItem:(ItemIdentifierType) item;
```

## See Also

### Inserting items

- [insertItems:afterItem:](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insertSnapshot:beforeItem:](insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems:beforeItem:](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.
