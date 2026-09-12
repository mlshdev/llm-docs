> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/replaceassets(at:withassets:)](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/replaceassets(at:withassets:))

# replaceAssets(at:withAssets:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Replaces the assets at the specified indexes in the asset collection with the specified assets.

## Declaration

```swift
func replaceAssets(at indexes: IndexSet, withAssets assets: any NSFastEnumeration)
```

## Parameters

- `indexes`: The indexes of the assets to be replaced in the asset collection.
- `assets`: An array of [PHAsset](../phasset.md) objects to be inserted into (or moved within) the asset collection.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the asset collection has changed since you fetched it, create a change request with a snapshot of the asset collection’s contents using the [init(for:assets:)](init%28for_assets_%29.md) method before rearranging assets.

> **Note**

>  Assets from My Photo Stream or iCloud Shared Albums and assets synced to the device through iTunes cannot be added to collections. Transient asset collections (such as those created with the [transientAssetCollection(with:title:)](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [init(for:assets:)](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [addAssets(\_:)](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets(\_:at:)](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets(\_:)](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssets(at:)](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [moveAssets(at:to:)](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

# replaceAssetsAtIndexes:withAssets: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Replaces the assets at the specified indexes in the asset collection with the specified assets.

## Declaration

```objectivec
- (void) replaceAssetsAtIndexes:(NSIndexSet *) indexes withAssets:(id<NSFastEnumeration>) assets;
```

## Parameters

- `indexes`: The indexes of the assets to be replaced in the asset collection.
- `assets`: An array of [PHAsset](../phasset.md) objects to be inserted into (or moved within) the asset collection.

<a id="Discussion"></a>

## Discussion

To ensure that the index set you specify is valid even if the asset collection has changed since you fetched it, create a change request with a snapshot of the asset collection’s contents using the [changeRequestForAssetCollection:assets:](init%28for_assets_%29.md) method before rearranging assets.

> **Note**

>  Assets from My Photo Stream or iCloud Shared Albums and assets synced to the device through iTunes cannot be added to collections. Transient asset collections (such as those created with the [transientAssetCollectionWithAssets:title:](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [changeRequestForAssetCollection:](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [changeRequestForAssetCollection:assets:](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [addAssets:](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets:atIndexes:](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets:](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssetsAtIndexes:](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [moveAssetsAtIndexes:toIndex:](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.
