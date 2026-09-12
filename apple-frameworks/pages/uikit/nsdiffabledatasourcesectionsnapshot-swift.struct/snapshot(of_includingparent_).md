> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/snapshot(of:includingparent:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/snapshot(of:includingparent:))

# snapshot(of:includingParent:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a section snapshot that contains the child items of the specified parent item, optionally including the parent item.

## Declaration

```swift
func snapshot(of parent: ItemIdentifierType, includingParent: Bool = false) -> NSDiffableDataSourceSectionSnapshot<ItemIdentifierType>
```

## See Also

### Creating a section snapshot

- [init()](init%28%29.md): Creates an empty section snapshot.
- [init(\_:)](init%28__%29.md): Creates a copy of the provided section snapshot.
- [append(\_:to:)](append%28__to_%29.md): Adds the specified items as child items of the specified parent item in the section snapshot.
