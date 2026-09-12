> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/reloadedsectionidentifiers](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/reloadedsectionidentifiers)

# reloadedSectionIdentifiers

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Identifies the sections reloaded by the changes to the snapshot.

## Declaration

```swift
var reloadedSectionIdentifiers: [SectionIdentifierType] { get }
```

<a id="Discussion"></a>

## Discussion

After you make updates to the snapshot, this method returns an array of identifiers corresponding to the sections that the view reloads when you apply the snapshot to your data source.

## See Also

### Reloading data

- [reconfigureItems(\_:)](reconfigureitems%28__%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItems(\_:)](reloaditems%28__%29.md): Reloads the data within the specified items in the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data within the specified sections of the snapshot.
