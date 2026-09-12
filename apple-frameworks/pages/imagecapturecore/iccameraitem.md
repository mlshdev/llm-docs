> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameraitem](https://developer.apple.com/documentation/imagecapturecore/iccameraitem)

# ICCameraItem (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An abstract class that represents a camera item.

## Declaration

```swift
class ICCameraItem
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines two concrete subclasses of camera items: [ICCameraFolder](iccamerafolder.md) and [ICCameraFile](iccamerafile.md).

## Topics

### Inspecting an Item’s Name and Type

- [uti](iccameraitem/uti.md): The item’s uniform type identifier (UTI) string.
- [name](iccameraitem/name.md): The item’s name.
- [ptpObjectHandle](iccameraitem/ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [isRaw](iccameraitem/israw.md): A Boolean value indicating whether the item is a raw image file.

### Determining an Item’s Change Dates

- [creationDate](iccameraitem/creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [modificationDate](iccameraitem/modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.
- [wasAddedAfterContentCatalogCompleted](iccameraitem/wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

### Locating an Item

- [device](iccameraitem/device.md): The item’s parent device.
- [fileSystemPath](iccameraitem/filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](iccameraitem/parentfolder.md): This item’s parent folder.
- [isInTemporaryStore](iccameraitem/isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.

### Requesting Metadata

- [requestMetadata()](iccameraitem/requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](iccameraitem/metadata.md): The item’s metadata.
- [metadataIfAvailable](iccameraitem/metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache()](iccameraitem/flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](iccameraitemmetadataoption.md): An option for the item’s metadata.

### Requesting Thumbnails

- [requestThumbnail()](iccameraitem/requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](iccameraitem/thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](iccameraitem/thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](iccameraitem/largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache()](iccameraitem/flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](iccameraitemthumbnailoption.md): An option for the item’s thumbnail.

### Accessing a Protected Item

- [isLocked](iccameraitem/islocked.md): A Boolean value that indicates whether the storage card in the camera is locked.

### Storing Information

- [userData](iccameraitem/userdata.md): A mutable dictionary to store arbitrary key-value pairs associated with a camera item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICCameraFile](iccamerafile.md)
- [ICCameraFolder](iccamerafolder.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.

# ICCameraItem (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An abstract class that represents a camera item.

## Declaration

```objectivec
@interface ICCameraItem : NSObject
```

<a id="overview"></a>

## Overview

The ImageCaptureCore framework defines two concrete subclasses of camera items: [ICCameraFolder](iccamerafolder.md) and [ICCameraFile](iccamerafile.md).

## Topics

### Inspecting an Item’s Name and Type

- [UTI](iccameraitem/uti.md): The item’s uniform type identifier (UTI) string.
- [name](iccameraitem/name.md): The item’s name.
- [ptpObjectHandle](iccameraitem/ptpobjecthandle.md): The item’s `PTP` object handle value, if the camera uses the `PTP` protocol.
- [raw](iccameraitem/israw.md): A Boolean value indicating whether the item is a raw image file.

### Determining an Item’s Change Dates

- [creationDate](iccameraitem/creationdate.md): The item’s creation date, usually the same as its `EXIF` creation date.
- [modificationDate](iccameraitem/modificationdate.md): The item’s modification date, usually the same as its `EXIF` modification date.
- [addedAfterContentCatalogCompleted](iccameraitem/wasaddedaftercontentcatalogcompleted.md): A Boolean value indicating whether the item was captured on the camera after the camera’s content had been fully enumerated.

### Locating an Item

- [device](iccameraitem/device.md): The item’s parent device.
- [fileSystemPath](iccameraitem/filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](iccameraitem/parentfolder.md): This item’s parent folder.
- [inTemporaryStore](iccameraitem/isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.

### Requesting Metadata

- [requestMetadata](iccameraitem/requestmetadata%28%29.md): Requests metadata for the item.
- [metadata](iccameraitem/metadata.md): The item’s metadata.
- [metadataIfAvailable](iccameraitem/metadataifavailable.md): Deprecated. The item’s metadata if it is readily available.
- [flushMetadataCache](iccameraitem/flushmetadatacache%28%29.md): Deletes the item’s cached metadata.
- [ICCameraItemMetadataOption](iccameraitemmetadataoption.md): An option for the item’s metadata.

### Requesting Thumbnails

- [requestThumbnail](iccameraitem/requestthumbnail%28%29.md): Requests a thumbnail for the item.
- [thumbnail](iccameraitem/thumbnail.md): The item’s thumbnail.
- [thumbnailIfAvailable](iccameraitem/thumbnailifavailable.md): Deprecated. The item’s thumbnail if it is readily available.
- [largeThumbnailIfAvailable](iccameraitem/largethumbnailifavailable.md): Deprecated. A large thumbnail for the item if one is readily available.
- [flushThumbnailCache](iccameraitem/flushthumbnailcache%28%29.md): Deletes the item’s cached thumbnail.
- [ICCameraItemThumbnailOption](iccameraitemthumbnailoption.md): An option for the item’s thumbnail.

### Accessing a Protected Item

- [locked](iccameraitem/islocked.md): A Boolean value that indicates whether the storage card in the camera is locked.

### Storing Information

- [userData](iccameraitem/userdata.md): A mutable dictionary to store arbitrary key-value pairs associated with a camera item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ICCameraFile](iccamerafile.md)
- [ICCameraFolder](iccamerafolder.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraDeviceDelegate](iccameradevicedelegate.md): Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.
