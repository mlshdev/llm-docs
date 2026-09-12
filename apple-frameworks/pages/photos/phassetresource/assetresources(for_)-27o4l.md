> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/assetresources(for:)-27o4l](https://developer.apple.com/documentation/photos/phassetresource/assetresources(for:)-27o4l)

# assetResources(for:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the list of data resources associated with an asset.

## Declaration

```swift
class func assetResources(for asset: PHAsset) -> [PHAssetResource]
```

## Parameters

- `asset`: A photo or video asset in the Photos library.

<a id="return-value"></a>

## Return Value

The asset’s resources.

<a id="Discussion"></a>

## Discussion

Asset resource objects describe the data files that an asset represents. An asset can contain multiple resources—for example, an edited photo asset contains resources for both the original and edited images, as well as for the [PHAdjustmentData](../phadjustmentdata.md) object describing the edit. To work with one of these files, fetch the underlying data using the [PHAssetResourceManager](../phassetresourcemanager.md) class.

## See Also

### Retrieving an Asset’s Data Resources

- [assetResources(for:)](assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.
- [assetResource(forUploadJob:)](assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.

# assetResourcesForAsset: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the list of data resources associated with an asset.

## Declaration

```objectivec
+ (NSArray<PHAssetResource *> *) assetResourcesForAsset:(PHAsset *) asset;
```

## Parameters

- `asset`: A photo or video asset in the Photos library.

<a id="return-value"></a>

## Return Value

The asset’s resources.

<a id="Discussion"></a>

## Discussion

Asset resource objects describe the data files that an asset represents. An asset can contain multiple resources—for example, an edited photo asset contains resources for both the original and edited images, as well as for the [PHAdjustmentData](../phadjustmentdata.md) object describing the edit. To work with one of these files, fetch the underlying data using the [PHAssetResourceManager](../phassetresourcemanager.md) class.

## See Also

### Retrieving an Asset’s Data Resources

- [assetResourcesForLivePhoto:](assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.
- [assetResourceForUploadJob:](assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.
