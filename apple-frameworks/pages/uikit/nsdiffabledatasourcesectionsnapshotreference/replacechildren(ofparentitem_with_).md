> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/replacechildren(ofparentitem:with:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshotreference/replacechildren(ofparentitem:with:))

# replaceChildren(ofParentItem:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Replaces all child items of the specified parent item with the provided section snapshot.

## Declaration

```swift
func replaceChildren(ofParentItem parentItem: Any, with snapshot: NSDiffableDataSourceSectionSnapshotReference)
```

# replaceChildrenOfParentItem:withSnapshot: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Replaces all child items of the specified parent item with the provided section snapshot.

## Declaration

```objectivec
- (void) replaceChildrenOfParentItem:(ItemIdentifierType) parentItem withSnapshot:(NSDiffableDataSourceSectionSnapshot<id> *) snapshot;
```
