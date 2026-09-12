> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/reloadsections(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/reloadsections(_:))

# reloadSections(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Reloads the data within the specified sections of the snapshot.

## Declaration

```swift
mutating func reloadSections(_ identifiers: [SectionIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the sections to reload in the snapshot.

## See Also

### Reloading data

- [reconfigureItems(\_:)](reconfigureitems%28__%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItems(\_:)](reloaditems%28__%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.
