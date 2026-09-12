> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insert(_:beforeitem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insert(_:beforeitem:))

# insert(\_:beforeItem:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.

## Declaration

```swift
func insert(_ snapshot: NSDiffableDataSourceSectionSnapshotReference, beforeItem item: Any)
```

## See Also

### Inserting items

- [insert(\_:afterItem:)](insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insertItems(\_:afterItem:)](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.

# insertSnapshot:beforeItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.

## Declaration

```objectivec
- (void) insertSnapshot:(NSDiffableDataSourceSectionSnapshot<id> *) snapshot beforeItem:(ItemIdentifierType) item;
```

## See Also

### Inserting items

- [insertSnapshot:afterItem:](insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insertItems:afterItem:](insertitems%28__afteritem_%29.md): Inserts the provided items immediately after the item with the specified identifier in the section snapshot.
- [insertItems:beforeItem:](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.
