> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/appendsections(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/appendsections(_:))

# appendSections(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Adds the sections with the specified identifiers to the snapshot.

## Declaration

```swift
mutating func appendSections(_ identifiers: [SectionIdentifierType])
```

## Parameters

- `identifiers`: An array of identifiers specifying the sections to add to the snapshot.

## See Also

### Creating a snapshot

- [init()](init%28%29.md): Creates an empty snapshot.
- [appendItems(\_:toSection:)](appenditems%28__tosection_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
