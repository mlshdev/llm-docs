> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/appendsections(_:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/appendsections(_:))

# appendSections(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Adds the sections with the specified identifiers to the snapshot.

## Declaration

```swift
mutating func appendSections(_ identifiers: [SectionIdentifierType])
```

## Parameters

- `identifiers`: An array of identifiers specifying the sections to add to the snapshot.

## See Also

### Creating a Snapshot

- [init()](init%28%29.md): Creates an empty snapshot.
- [appendItems(\_:toSection:)](appenditems%28__tosection_%29.md): Adds the items with the specified identifiers to the specified section of the snapshot.
