> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/assetresource(foruploadjob:)](https://developer.apple.com/documentation/photos/phassetresource/assetresource(foruploadjob:))

# assetResource(forUploadJob:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Returns the asset resource associated with the given upload job.

## Declaration

```swift
class func assetResource(forUploadJob job: PHAssetResourceUploadJob) -> PHAssetResource?
```

<a id="return-value"></a>

## Return Value

The asset resource associated with the upload job, or nil if the resource cannot be found.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

- job: the upload job whose associated asset resource is returned

## See Also

### Retrieving an Asset’s Data Resources

- [assetResources(for:)](assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResources(for:)](assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.

# assetResourceForUploadJob: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Returns the asset resource associated with the given upload job.

## Declaration

```objectivec
+ (PHAssetResource *) assetResourceForUploadJob:(PHAssetResourceUploadJob *) job;
```

<a id="return-value"></a>

## Return Value

The asset resource associated with the upload job, or nil if the resource cannot be found.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

- job: the upload job whose associated asset resource is returned

## See Also

### Retrieving an Asset’s Data Resources

- [assetResourcesForAsset:](assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResourcesForLivePhoto:](assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.
