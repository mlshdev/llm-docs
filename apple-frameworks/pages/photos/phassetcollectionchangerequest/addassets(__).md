> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/addassets(_:)](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/addassets(_:))

# addAssets(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified assets to the asset collection.

## Declaration

```swift
func addAssets(_ assets: any NSFastEnumeration)
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be added to the asset collection.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

If you created the change request with a snapshot of the asset collection’s contents using the [init(for:assets:)](init%28for_assets_%29.md) method, Photos inserts the new assets after the existing assets in the collection. Otherwise, the arrangement of the new assets relative to others in the collection is undefined.

> **Note**

>  Assets from My Photo Stream or iCloud Shared Albums and assets synced to the device through iTunes cannot be added to collections. Transient asset collections (such as those created with the [transientAssetCollection(with:title:)](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [init(for:assets:)](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [insertAssets(\_:at:)](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets(\_:)](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssets(at:)](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssets(at:withAssets:)](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssets(at:to:)](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

# addAssets: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Adds the specified assets to the asset collection.

## Declaration

```objectivec
- (void) addAssets:(id<NSFastEnumeration>) assets;
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be added to the asset collection.

## Mentioned In

- [Requesting Changes to the Photo Library](../../photokit/requesting-changes-to-the-photo-library.md)

<a id="Discussion"></a>

## Discussion

If you created the change request with a snapshot of the asset collection’s contents using the [changeRequestForAssetCollection:assets:](init%28for_assets_%29.md) method, Photos inserts the new assets after the existing assets in the collection. Otherwise, the arrangement of the new assets relative to others in the collection is undefined.

> **Note**

>  Assets from My Photo Stream or iCloud Shared Albums and assets synced to the device through iTunes cannot be added to collections. Transient asset collections (such as those created with the [transientAssetCollectionWithAssets:title:](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [changeRequestForAssetCollection:](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [changeRequestForAssetCollection:assets:](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [insertAssets:atIndexes:](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets:](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssetsAtIndexes:](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssetsAtIndexes:withAssets:](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssetsAtIndexes:toIndex:](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.
