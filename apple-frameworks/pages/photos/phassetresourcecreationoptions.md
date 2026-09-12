> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourcecreationoptions](https://developer.apple.com/documentation/photos/phassetresourcecreationoptions)

# PHAssetResourceCreationOptions (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the creation of a new Photos asset from underlying resources.

## Declaration

```swift
class PHAssetResourceCreationOptions
```

<a id="overview"></a>

## Overview

You use this class when creating an asset for addition to the Photos library with a [PHAssetCreationRequest](phassetcreationrequest.md) object.

## Topics

### Describing a New Asset Resource

- [originalFilename](phassetresourcecreationoptions/originalfilename.md): The filename for the asset resource being created.
- [uniformTypeIdentifier](phassetresourcecreationoptions/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.
- [contentType](phassetresourcecreationoptions/contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

### Managing Resource Files

- [shouldMoveFile](phassetresourcecreationoptions/shouldmovefile.md): A Boolean value that determines whether Photos moves or duplicates files when creating an asset resource.

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
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.

# PHAssetResourceCreationOptions (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A set of options affecting the creation of a new Photos asset from underlying resources.

## Declaration

```objectivec
@interface PHAssetResourceCreationOptions : NSObject
```

<a id="overview"></a>

## Overview

You use this class when creating an asset for addition to the Photos library with a [PHAssetCreationRequest](phassetcreationrequest.md) object.

## Topics

### Describing a New Asset Resource

- [originalFilename](phassetresourcecreationoptions/originalfilename.md): The filename for the asset resource being created.
- [uniformTypeIdentifier](phassetresourcecreationoptions/uniformtypeidentifier.md): Deprecated. The uniform type identifier for the resource.
- [contentType](phassetresourcecreationoptions/contenttype.md): The type of data being provided for this asset resource. If not specified, one will be inferred from the PHAssetResourceType or file URL extension (if provided).

### Managing Resource Files

- [shouldMoveFile](phassetresourcecreationoptions/shouldmovefile.md): A Boolean value that determines whether Photos moves or duplicates files when creating an asset resource.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Asset resource management

- [PHAssetResource](phassetresource.md): An underlying data resource associated with a photo, video, or Live Photo asset in the Photos library.
- [PHAssetCreationRequest](phassetcreationrequest.md): A request to create a new Photos asset from underlying data resources, for use in a photo library change block.
- [PHAssetResourceManager](phassetresourcemanager.md): A resource manager for the data storage underlying a Photos asset.
- [PHAssetResourceRequestOptions](phassetresourcerequestoptions.md): A set of options affecting the delivery of underlying asset data that you request from the asset-resource manager.
