> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insertitems(_:afteritem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/insertitems(_:afteritem:))

# insertItems(\_:afterItem:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided items immediately after the item with the specified identifier in the section snapshot.

## Declaration

```swift
func insertItems(_ items: [Any], afterItem afterIdentifier: Any)
```

## See Also

### Inserting items

- [insert(\_:afterItem:)](insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insert(\_:beforeItem:)](insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems(\_:beforeItem:)](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.

# insertItems:afterItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Inserts the provided items immediately after the item with the specified identifier in the section snapshot.

## Declaration

```objectivec
- (void) insertItems:(NSArray<id> *) items afterItem:(ItemIdentifierType) afterIdentifier;
```

## See Also

### Inserting items

- [insertSnapshot:afterItem:](insert%28__afteritem_%29.md): Inserts the provided section snapshot immediately after the item with the specified identifier in the section snapshot.
- [insertSnapshot:beforeItem:](insert%28__beforeitem_%29.md): Inserts the provided section snapshot immediately before the item with the specified identifier in the section snapshot.
- [insertItems:beforeItem:](insertitems%28__beforeitem_%29.md): Inserts the provided items immediately before the item with the specified identifier in the section snapshot.
