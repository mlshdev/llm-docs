> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcollectionchangerequest/init(for:assets:)](https://developer.apple.com/documentation/photos/phassetcollectionchangerequest/init(for:assets:))

# init(for:assets:) (Swift)

**Framework:** Photos  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.

## Declaration

```swift
convenience init?(for assetCollection: PHAssetCollection, assets: PHFetchResult<PHAsset>?)
```

## Parameters

- `assetCollection`: The asset collection to be modified.
- `assets`: A fetch result listing the assets in the collection.

<a id="return-value"></a>

## Return Value

An asset collection change request.

<a id="Discussion"></a>

## Discussion

After you create a change request within a photo library change block, you propose changes to the collection’s title or list of member assets with the properties and instance methods of the change request. After Photos runs your change block, the asset collection reflects your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

Use this method when you need to insert, remove, or rearrange assets at specified indexes in the asset collection’s list of member assets. By passing in a fetch result reflecting what your app sees as the current state of the collection’s membership, the Photos framework can ensure that the indexes you specify are valid even if the collection has changed since you last fetched it. If you don’t need to work with indexes in the list of member assets, you can use the [init(for:)](init%28for_%29.md) method instead.

## See Also

### Modifying Asset Collections

- [init(for:)](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [title](title.md): The displayed name of the asset collection.
- [addAssets(\_:)](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets(\_:at:)](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets(\_:)](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssets(at:)](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssets(at:withAssets:)](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssets(at:to:)](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.

# changeRequestForAssetCollection:assets: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Creates a request for modifying the specified asset collection, with a fetch result for tracking changes.

## Declaration

```objectivec
+ (instancetype) changeRequestForAssetCollection:(PHAssetCollection *) assetCollection assets:(PHFetchResult<PHAsset *> *) assets;
```

## Parameters

- `assetCollection`: The asset collection to be modified.
- `assets`: A fetch result listing the assets in the collection.

<a id="return-value"></a>

## Return Value

An asset collection change request.

<a id="Discussion"></a>

## Discussion

After you create a change request within a photo library change block, you propose changes to the collection’s title or list of member assets with the properties and instance methods of the change request. After Photos runs your change block, the asset collection reflects your changes. For details on change blocks, see [PHPhotoLibrary](../phphotolibrary.md).

Use this method when you need to insert, remove, or rearrange assets at specified indexes in the asset collection’s list of member assets. By passing in a fetch result reflecting what your app sees as the current state of the collection’s membership, the Photos framework can ensure that the indexes you specify are valid even if the collection has changed since you last fetched it. If you don’t need to work with indexes in the list of member assets, you can use the [changeRequestForAssetCollection:](init%28for_%29.md) method instead.

## See Also

### Modifying Asset Collections

- [changeRequestForAssetCollection:](init%28for_%29.md): Creates a request for modifying the specified asset collection.
- [title](title.md): The displayed name of the asset collection.
- [addAssets:](addassets%28__%29.md): Adds the specified assets to the asset collection.
- [insertAssets:atIndexes:](insertassets%28__at_%29.md): Inserts the specified assets into the collection at the specified indexes.
- [removeAssets:](removeassets%28__%29.md): Removes the specified assets from the asset collection.
- [removeAssetsAtIndexes:](removeassets%28at_%29.md): Removes the assets at the specified indexes from the asset collection.
- [replaceAssetsAtIndexes:withAssets:](replaceassets%28at_withassets_%29.md): Replaces the assets at the specified indexes in the asset collection with the specified assets.
- [moveAssetsAtIndexes:toIndex:](moveassets%28at_to_%29.md): Moves the assets at the specified indexes in the asset collection to a new index.
