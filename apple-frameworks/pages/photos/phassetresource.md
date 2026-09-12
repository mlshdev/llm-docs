> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresource](https://developer.apple.com/documentation/photos/phassetresource)

# PHAssetResource (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.

## Declaration

```swift
class PHAssetResource
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

<a id="overview"></a>

## Overview

Each [PHAsset](phasset.md) object references one or more resources. Use these objects to work with those resources directly, like when backing up or restoring assets.

- A photo asset can contain both JPEG and RAW files representing the same photo.
- A Live Photo asset contains both still photo and video resources.
- An edited asset contains resources representing asset content before and after the edit, as well as a resource corresponding to the [PHAdjustmentData](phadjustmentdata.md) object that describes the edit.

To work with the data contained in an asset resource, fetch it using the [PHAssetResourceManager](phassetresourcemanager.md) class.

## Topics

### Retrieving an Asset’s Data Resources

- [assetResources(for:)](phassetresource/assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResources(for:)](phassetresource/assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.
- [assetResource(forUploadJob:)](phassetresource/assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.

### Inspecting an Asset Resource

- [type](phassetresource/type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](phassetresource/contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](phassetresource/assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](phassetresource/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](phassetresource/originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](phassetresource/filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](phassetresource/pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](phassetresource/pixelwidth.md): The width of the resource, in pixels.
- [dataSize](phassetresource/datasize-5lxva.md): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Asset resource management

- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

# PHAssetResource (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.

## Declaration

```objectivec
@interface PHAssetResource : NSObject
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

<a id="overview"></a>

## Overview

Each [PHAsset](phasset.md) object references one or more resources. Use these objects to work with those resources directly, like when backing up or restoring assets.

- A photo asset can contain both JPEG and RAW files representing the same photo.
- A Live Photo asset contains both still photo and video resources.
- An edited asset contains resources representing asset content before and after the edit, as well as a resource corresponding to the [PHAdjustmentData](phadjustmentdata.md) object that describes the edit.

To work with the data contained in an asset resource, fetch it using the [PHAssetResourceManager](phassetresourcemanager.md) class.

## Topics

### Retrieving an Asset’s Data Resources

- [assetResourcesForAsset:](phassetresource/assetresources%28for_%29-27o4l.md): Returns the list of data resources associated with an asset.
- [assetResourcesForLivePhoto:](phassetresource/assetresources%28for_%29-2fedw.md): Returns the list of data resources associated with a Live Photo object.
- [assetResourceForUploadJob:](phassetresource/assetresource%28foruploadjob_%29.md): Returns the asset resource associated with the given upload job.

### Inspecting an Asset Resource

- [type](phassetresource/type.md): The relationship of an asset resource to its owning asset.
- [PHAssetResourceType](phassetresourcetype.md): Describes the relationship of an asset resource to its owning asset.
- [contentType](phassetresource/contenttype.md): The content type of the data associated with this asset resource (the data can be retrieved via `PHAssetResourceManager`)
- [assetLocalIdentifier](phassetresource/assetlocalidentifier.md): The unique identifier the system associates for a local asset object.
- [uniformTypeIdentifier](phassetresource/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the asset resource’s image or video data.
- [originalFilename](phassetresource/originalfilename.md): Deprecated. The original filename of the asset resource from when it was created or imported.
- [filename](phassetresource/filename.md): The filename associated with this asset resource (if any)
- [pixelHeight](phassetresource/pixelheight.md): The height of the resource, in pixels.
- [pixelWidth](phassetresource/pixelwidth.md): The width of the resource, in pixels.
- [dataSize](https://developer.apple.com/documentation/photos/phassetresource/datasize-6cf5k): The size of the resource in bytes if known, `nil` if unavailable (may not be available until resource download/processing is complete)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Asset resource management

- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.
