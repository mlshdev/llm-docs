> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/reloadeditemidentifiers](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/reloadeditemidentifiers)

# reloadedItemIdentifiers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Identifies the items reloaded by the changes to the snapshot.

## Declaration

```swift
var reloadedItemIdentifiers: [Any] { get }
```

<a id="Discussion"></a>

## Discussion

After you make updates to the snapshot, this method returns an array of identifiers corresponding to the items that the view reloads when you apply the snapshot to your data source.

## See Also

### Reloading data

- [reconfigureItems(withIdentifiers:)](reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItems(withIdentifiers:)](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadSections(withIdentifiers:)](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.

# reloadedItemIdentifiers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Identifies the items reloaded by the changes to the snapshot.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id> * reloadedItemIdentifiers;
```

<a id="Discussion"></a>

## Discussion

After you make updates to the snapshot, this method returns an array of identifiers corresponding to the items that the view reloads when you apply the snapshot to your data source.

## See Also

### Reloading data

- [reconfigureItemsWithIdentifiers:](reconfigureitems%28withidentifiers_%29.md): Updates the data for the items you specify in the snapshot, preserving the existing cells for the items.
- [reconfiguredItemIdentifiers](reconfigureditemidentifiers.md): Identifies the items reconfigured by the changes to the snapshot.
- [reloadItemsWithIdentifiers:](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.
- [reloadSectionsWithIdentifiers:](reloadsections%28withidentifiers_%29.md): Reloads the data within the specified sections of the snapshot.
- [reloadedSectionIdentifiers](reloadedsectionidentifiers.md): Identifies the sections reloaded by the changes to the snapshot.
