> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetcreationrequest](https://developer.apple.com/documentation/photos/phassetcreationrequest)

# PHAssetCreationRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create a new Photos asset from underlying data resources, for use in a photo library change block.

## Declaration

```swift
class PHAssetCreationRequest
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="overview"></a>

## Overview

A [PHAssetCreationRequest](phassetcreationrequest.md) object, used within a photo library change block, constructs a new photo or video asset from data resources, and adds it to the Photos library. This class works in terms of the raw data resources that together form an asset, so you can use it together with the [PHAssetResource](phassetresource.md) class to perform a complete copy (or backup and restore) of an asset’s underlying resources. To instead simply create a new asset from an image object, image file, or video file, see the superclass [PHAssetChangeRequest](phassetchangerequest.md).

To create a new asset from data resources, first start a change block using the shared [PHPhotoLibrary](phphotolibrary.md) method [performChanges(\_:completionHandler:)](phphotolibrary/performchanges%28__completionhandler_%29.md) or [performChangesAndWait(\_:)](phphotolibrary/performchangesandwait%28__%29.md). Then, within the change block:

1. Within the change block, create a new asset creation request with the [forAsset()](phassetcreationrequest/forasset%28%29.md) method.
2. Add image, video, or data resources using [addResource(with:data:options:)](phassetcreationrequest/addresource%28with_data_options_%29.md) or [addResource(with:fileURL:options:)](phassetcreationrequest/addresource%28with_fileurl_options_%29.md).
3. (Optional.) Set metadata for the new asset using methods and properties of the superclass [PHAssetChangeRequest](phassetchangerequest.md).

After Photos runs the change block and calls your completion handler, the new asset is created in the Photos library.

If you instantiate or use this class outside a photo library change block, Photos throws an exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Requesting Asset Creation

- [forAsset()](phassetcreationrequest/forasset%28%29.md): Creates a request for adding a new asset to the Photos library using asset resources.

### Preflighting a Request

- [supportsAssetResourceTypes(\_:)](phassetcreationrequest/supportsassetresourcetypes%28__%29.md): Returns a Boolean value indicating whether Photos supports creating an asset with the specified combination of resource types.

### Providing Data Resources for the New Asset

- [addResource(with:data:options:)](phassetcreationrequest/addresource%28with_data_options_%29.md): Adds a data resource to the asset being created, using the specified data.
- [addResource(with:fileURL:options:)](phassetcreationrequest/addresource%28with_fileurl_options_%29.md): Adds a data resource to the asset being created, using the file at the specified URL.

### Instance Properties

- [originalResourceChoice](phassetcreationrequest/originalresourcechoice.md): The original resource to use as the unadjusted base for rendering derivatives of the new asset.

## Relationships

### Inherits From

- [PHAssetChangeRequest](phassetchangerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

# PHAssetCreationRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A request to create a new Photos asset from underlying data resources, for use in a photo library change block.

## Declaration

```objectivec
@interface PHAssetCreationRequest : PHAssetChangeRequest
```

## Mentioned In

- [Delivering an Enhanced Privacy Experience in Your Photos App](../photokit/delivering-an-enhanced-privacy-experience-in-your-photos-app.md)

<a id="overview"></a>

## Overview

A [PHAssetCreationRequest](phassetcreationrequest.md) object, used within a photo library change block, constructs a new photo or video asset from data resources, and adds it to the Photos library. This class works in terms of the raw data resources that together form an asset, so you can use it together with the [PHAssetResource](phassetresource.md) class to perform a complete copy (or backup and restore) of an asset’s underlying resources. To instead simply create a new asset from an image object, image file, or video file, see the superclass [PHAssetChangeRequest](phassetchangerequest.md).

To create a new asset from data resources, first start a change block using the shared [PHPhotoLibrary](phphotolibrary.md) method [performChanges:completionHandler:](phphotolibrary/performchanges%28__completionhandler_%29.md) or [performChangesAndWait:error:](phphotolibrary/performchangesandwait%28__%29.md). Then, within the change block:

1. Within the change block, create a new asset creation request with the [creationRequestForAsset](phassetcreationrequest/forasset%28%29.md) method.
2. Add image, video, or data resources using [addResourceWithType:data:options:](phassetcreationrequest/addresource%28with_data_options_%29.md) or [addResourceWithType:fileURL:options:](phassetcreationrequest/addresource%28with_fileurl_options_%29.md).
3. (Optional.) Set metadata for the new asset using methods and properties of the superclass [PHAssetChangeRequest](phassetchangerequest.md).

After Photos runs the change block and calls your completion handler, the new asset is created in the Photos library.

If you instantiate or use this class outside a photo library change block, Photos throws an exception. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Requesting Asset Creation

- [creationRequestForAsset](phassetcreationrequest/forasset%28%29.md): Creates a request for adding a new asset to the Photos library using asset resources.

### Preflighting a Request

- [supportsAssetResourceTypes:](phassetcreationrequest/supportsassetresourcetypes%28__%29.md): Returns a Boolean value indicating whether Photos supports creating an asset with the specified combination of resource types.

### Providing Data Resources for the New Asset

- [addResourceWithType:data:options:](phassetcreationrequest/addresource%28with_data_options_%29.md): Adds a data resource to the asset being created, using the specified data.
- [addResourceWithType:fileURL:options:](phassetcreationrequest/addresource%28with_fileurl_options_%29.md): Adds a data resource to the asset being created, using the file at the specified URL.

### Instance Properties

- [originalResourceChoice](phassetcreationrequest/originalresourcechoice.md): The original resource to use as the unadjusted base for rendering derivatives of the new asset.

## Relationships

### Inherits From

- [PHAssetChangeRequest](phassetchangerequest.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.
