> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource/assetresources(for:)-2fedw](https://developer.apple.com/documentation/photos/phassetresource/assetresources(for:)-2fedw)

# assetResources(for:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the list of data resources associated with a Live Photo object.

## Declaration

```swift
class func assetResources(for livePhoto: PHLivePhoto) -> [PHAssetResource]
```

## Parameters

- `livePhoto`: A Live Photo object.

<a id="return-value"></a>

## Return Value

The underlying resources that constitute the Live Photo.

<a id="Discussion"></a>

## Discussion

A Live Photo is a picture, taken with a compatible device, that includes movement and sound from the moments just before and after its capture. A [PHLivePhoto](../phlivephoto.md) object represents the displayable combination of image, motion, and sound data. You can obtain such objects from the Photos library using the [PHImageManager](../phimagemanager.md) class or construct them from asset resources exported from a Photos library using the [PHLivePhoto](../phlivephoto.md) class.

Use this method to export the underlying resources that constitute a Live Photo. For example, a social networking app can retrieve those data files and upload them to a server. Then, on another user’s device, the app downloads those data files and uses the [PHLivePhoto](../phlivephoto.md) class to re-create a Live Photo object for display using the [PHLivePhotoView](../../photosui/phlivephotoview.md) class.

## See Also

### Retrieving an Asset’s Data Resources

- [assetResources(for:)](assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResource(forUploadJob:)](assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.

# assetResourcesForLivePhoto: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

Returns the list of data resources associated with a Live Photo object.

## Declaration

```objectivec
+ (NSArray<PHAssetResource *> *) assetResourcesForLivePhoto:(PHLivePhoto *) livePhoto;
```

## Parameters

- `livePhoto`: A Live Photo object.

<a id="return-value"></a>

## Return Value

The underlying resources that constitute the Live Photo.

<a id="Discussion"></a>

## Discussion

A Live Photo is a picture, taken with a compatible device, that includes movement and sound from the moments just before and after its capture. A [PHLivePhoto](../phlivephoto.md) object represents the displayable combination of image, motion, and sound data. You can obtain such objects from the Photos library using the [PHImageManager](../phimagemanager.md) class or construct them from asset resources exported from a Photos library using the [PHLivePhoto](../phlivephoto.md) class.

Use this method to export the underlying resources that constitute a Live Photo. For example, a social networking app can retrieve those data files and upload them to a server. Then, on another user’s device, the app downloads those data files and uses the [PHLivePhoto](../phlivephoto.md) class to re-create a Live Photo object for display using the [PHLivePhotoView](../../photosui/phlivephotoview.md) class.

## See Also

### Retrieving an Asset’s Data Resources

- [assetResourcesForAsset:](assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResourceForUploadJob:](assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.
