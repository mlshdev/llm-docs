> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcemanager](https://developer.apple.com/documentation/photos/phassetresourcemanager)

# PHAssetResourceManager (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A resource manager for the data storage underlying a Photos asset.

## Declaration

```swift
class PHAssetResourceManager
```

<a id="overview"></a>

## Overview

An asset can have multiple underlying data resources—for example, both original and edited versions—each of which is represented by a [PHAssetResource](phassetresource.md) object. Unlike the [PHImageManager](phimagemanager.md) class, which provides and caches the primary representations of assets as thumbnails, image objects, or video objects, the asset resource manager provides direct access to these underlying data resources.

## Topics

### Getting the Asset Resource Manager

- [default()](phassetresourcemanager/default%28%29.md): Returns the shared asset resource manager object.

### Requesting Resources

- [requestData(for:options:dataReceivedHandler:completionHandler:)](phassetresourcemanager/requestdata%28for_options_datareceivedhandler_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be delivered asynchronously.
- [cancelDataRequest(\_:)](phassetresourcemanager/canceldatarequest%28__%29.md): Cancels an asynchronous request.
- [writeData(for:toFile:options:completionHandler:)](phassetresourcemanager/writedata%28for_tofile_options_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be asynchronously written to a local file.

### Constants

- [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md): A numeric identifier for an asynchronous asset resource loading request.
- [Resource Loading Request Identifiers](../photokit/resource-loading-request-identifiers.md): Special values for the [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md) identifier that are returned by asynchronous requests.

### Instance Methods

- [exportedAssetID(for:)](phassetresourcemanager/exportedassetid%28for_%29.md): Returns the exported asset ID for the specified asset resource.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

# PHAssetResourceManager (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A resource manager for the data storage underlying a Photos asset.

## Declaration

```objectivec
@interface PHAssetResourceManager : NSObject
```

<a id="overview"></a>

## Overview

An asset can have multiple underlying data resources—for example, both original and edited versions—each of which is represented by a [PHAssetResource](phassetresource.md) object. Unlike the [PHImageManager](phimagemanager.md) class, which provides and caches the primary representations of assets as thumbnails, image objects, or video objects, the asset resource manager provides direct access to these underlying data resources.

## Topics

### Getting the Asset Resource Manager

- [defaultManager](phassetresourcemanager/default%28%29.md): Returns the shared asset resource manager object.

### Requesting Resources

- [requestDataForAssetResource:options:dataReceivedHandler:completionHandler:](phassetresourcemanager/requestdata%28for_options_datareceivedhandler_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be delivered asynchronously.
- [cancelDataRequest:](phassetresourcemanager/canceldatarequest%28__%29.md): Cancels an asynchronous request.
- [writeDataForAssetResource:toFile:options:completionHandler:](phassetresourcemanager/writedata%28for_tofile_options_completionhandler_%29.md): Requests the underlying data for the specified asset resource, to be asynchronously written to a local file.

### Constants

- [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md): A numeric identifier for an asynchronous asset resource loading request.
- [Resource Loading Request Identifiers](../photokit/resource-loading-request-identifiers.md): Special values for the [PHAssetResourceDataRequestID](phassetresourcedatarequestid.md) identifier that are returned by asynchronous requests.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.
