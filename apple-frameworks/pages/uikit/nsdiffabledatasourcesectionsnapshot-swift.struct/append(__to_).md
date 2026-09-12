> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/append(_:to:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/append(_:to:))

# append(\_:to:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Adds the specified items as child items of the specified parent item in the section snapshot.

## Declaration

```swift
mutating func append(_ items: [ItemIdentifierType], to parent: ItemIdentifierType? = nil)
```

## Parameters

- `items`: The identifiers of the items to append to the parent item in the section snapshot.
- `parent`: The parent item to append the items to. If you don’t specify a parent, the section snapshot appends the items to its root level.

## See Also

### Creating a section snapshot

- [init()](init%28%29.md): Creates an empty section snapshot.
- [init(\_:)](init%28__%29.md): Creates a copy of the provided section snapshot.
- [snapshot(of:includingParent:)](snapshot%28of_includingparent_%29.md): Creates a section snapshot that contains the child items of the specified parent item, optionally including the parent item.
