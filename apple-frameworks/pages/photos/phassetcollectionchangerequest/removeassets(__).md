> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/removeassets(_:)](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/removeassets(_:))

# removeAssets(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified assets from the asset collection.

## Declaration

```swift
func removeAssets(_ assets: any NSFastEnumeration)
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be removed from the asset collection.

<a id="Discussion"></a>

## Discussion

This method removes assets from the collection based on their identity (determined by the [localIdentifier](../phobject/localidentifier.md) property of each asset). To remove objects at specified indexes, use the [removeAssets(at:)](removeassets%28at_%29.md) method.

> **Note**

>  Transient asset collections (such as those created with the [transientAssetCollection(with:title:)](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [init(for:assets:)](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [addAssets(\_:)](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets(\_:at:)](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets(at:)](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssets(at:withAssets:)](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssets(at:to:)](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

# removeAssets: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified assets from the asset collection.

## Declaration

```objectivec
- (void) removeAssets:(id<NSFastEnumeration>) assets;
```

## Parameters

- `assets`: An array of [PHAsset](../phasset.md) objects to be removed from the asset collection.

<a id="Discussion"></a>

## Discussion

This method removes assets from the collection based on their identity (determined by the [localIdentifier](../phobject/localidentifier.md) property of each asset). To remove objects at specified indexes, use the [removeAssetsAtIndexes:](removeassets%28at_%29.md) method.

> **Note**

>  Transient asset collections (such as those created with the [transientAssetCollectionWithAssets:title:](../phassetcollection/transientassetcollection%28with_title_%29.md) method) do not support adding or removing content.

## See Also

### Modifying Asset Collections

- [changeRequestForAssetCollection:](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [changeRequestForAssetCollection:assets:](init%28for_assets_%29.md): Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.
- [title](title.md): The displayed name of the asset collection.
- [addAssets:](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets:atIndexes:](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssetsAtIndexes:](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssetsAtIndexes:withAssets:](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssetsAtIndexes:toIndex:](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.
