> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcerequestoptions](https://developer.apple.com/documentation/photos/phassetresourcerequestoptions)

# PHAssetResourceRequestOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

## Declaration

```swift
class PHAssetResourceRequestOptions
```

<a id="overview"></a>

## Overview

You use this class when requesting the underlying data for photo, video, and Live Photo asset resources from a [PHAssetResourceManager](phassetresourcemanager.md) object.

## Topics

### Fetching Resource Data from iCloud

- [isNetworkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [progressHandler](phassetresourcerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.
- [PHAssetResourceProgressHandler](phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](phassetresourcerequestoptions/progresshandler.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.

# PHAssetResourceRequestOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

## Declaration

```objectivec
@interface PHAssetResourceRequestOptions : NSObject
```

<a id="overview"></a>

## Overview

You use this class when requesting the underlying data for photo, video, and Live Photo asset resources from a [PHAssetResourceManager](phassetresourcemanager.md) object.

## Topics

### Fetching Resource Data from iCloud

- [networkAccessAllowed](phassetresourcerequestoptions/isnetworkaccessallowed.md): A Boolean value that specifies whether Photos can download the requested asset resource data from iCloud.
- [progressHandler](phassetresourcerequestoptions/progresshandler.md): A block that Photos calls periodically while downloading the asset resource data.
- [PHAssetResourceProgressHandler](phassetresourceprogresshandler.md): The signature for a block that Photos calls while downloading asset resource data from iCloud. Used by the [progressHandler](phassetresourcerequestoptions/progresshandler.md) property.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceCreationOptions](phassetresourcecreationoptions.md): A set of options affecting the creation of a new Photos asset from underlying resources.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
