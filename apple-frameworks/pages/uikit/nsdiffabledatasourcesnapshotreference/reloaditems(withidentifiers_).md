> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/reloaditems(withidentifiers:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/reloaditems(withidentifiers:))

# reloadItems(withIdentifiers:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Reloads the data within the specified items in the snapshot.

## Declaration

```swift
func reloadItems(withIdentifiers identifiers: [Any])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to reload in the snapshot.

## See Also

### Reloading data

- [reconfigureItems(withIdentifiers:)](reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSections(withIdentifiers:)](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.

# reloadItemsWithIdentifiers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Reloads the data within the specified items in the snapshot.

## Declaration

```objectivec
- (void) reloadItemsWithIdentifiers:(NSArray<id> *) identifiers;
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to reload in the snapshot.

## See Also

### Reloading data

- [reconfigureItemsWithIdentifiers:](reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadedItemIdentifiers](reloadeditemidentifiers.md): Identifies the items reloaded by the changes to the snapshot.
- [reloadSectionsWithIdentifiers:](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.
