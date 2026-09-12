> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate)

# ICCameraDeviceDelegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.

## Declaration

```swift
protocol ICCameraDeviceDelegate : ICDeviceDelegate
```

## Topics

### Determining Device Readiness

- [deviceDidBecomeReady(withCompleteContentCatalog:)](iccameradevicedelegate/devicedidbecomeready%28withcompletecontentcatalog_%29.md): Tells the client that the camera device is done enumerating its content and is ready to receive requests.

### Adding Objects

- [cameraDevice(\_:didAdd:)](iccameradevicedelegate/cameradevice%28__didadd_%29-8oukd.md): Tells the client when objects are added to the device.
- [cameraDevice(\_:didAdd:)](iccameradevicedelegate/cameradevice%28__didadd_%29-9pnzo.md): Deprecated. Tells the client when an object is added to the device.

### Removing Objects

- [cameraDevice(\_:didRemove:)](iccameradevicedelegate/cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice(\_:didCompleteDeleteFilesWithError:)](iccameradevicedelegate/cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.
- [cameraDevice(\_:didRemove:)](iccameradevicedelegate/cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.

### Renaming Objects

- [cameraDevice(\_:didRenameItems:)](iccameradevicedelegate/cameradevice%28__didrenameitems_%29.md): Tells the client when one or more objects are renamed on the device.

### Receiving Metadata

- [cameraDevice(\_:didReceiveMetadata:for:error:)](iccameradevicedelegate/cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice(\_:shouldGetMetadataOf:)](iccameradevicedelegate/cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.
- [cameraDevice(\_:didReceiveMetadataFor:)](iccameradevicedelegate/cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.

### Receiving Thumbnails

- [cameraDevice(\_:didReceiveThumbnail:for:error:)](iccameradevicedelegate/cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice(\_:didReceiveThumbnailFor:)](iccameradevicedelegate/cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.
- [cameraDevice(\_:shouldGetThumbnailOf:)](iccameradevicedelegate/cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

### Responding to Capability Changes

- [cameraDeviceDidChangeCapability(\_:)](iccameradevicedelegate/cameradevicedidchangecapability%28__%29.md): Tells the client when a capability of a camera changes.

### Responding to Access Restrictions

- [cameraDeviceDidEnableAccessRestriction(\_:)](iccameradevicedelegate/cameradevicedidenableaccessrestriction%28__%29.md): Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.
- [cameraDeviceDidRemoveAccessRestriction(\_:)](iccameradevicedelegate/cameradevicedidremoveaccessrestriction%28__%29.md): Tells the client when an Apple device has been unlocked, paired to the host, and media is available.

### Responding to PTP Events

- [cameraDevice(\_:didReceivePTPEvent:)](iccameradevicedelegate/cameradevice%28__didreceiveptpevent_%29.md): Tells the client about a PTP event.

## Relationships

### Inherits From

- [ICDeviceDelegate](icdevicedelegate.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.

# ICCameraDeviceDelegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for detecting cameras, getting metadata and thumbnails, handling access and capability changes, and performing other actions on connected cameras.

## Declaration

```objectivec
@protocol ICCameraDeviceDelegate <ICDeviceDelegate>
```

## Topics

### Determining Device Readiness

- [deviceDidBecomeReadyWithCompleteContentCatalog:](iccameradevicedelegate/devicedidbecomeready%28withcompletecontentcatalog_%29.md): Tells the client that the camera device is done enumerating its content and is ready to receive requests.

### Adding Objects

- [cameraDevice:didAddItems:](iccameradevicedelegate/cameradevice%28__didadd_%29-8oukd.md): Tells the client when objects are added to the device.
- [cameraDevice:didAddItem:](iccameradevicedelegate/cameradevice%28__didadd_%29-9pnzo.md): Deprecated. Tells the client when an object is added to the device.

### Removing Objects

- [cameraDevice:didRemoveItems:](iccameradevicedelegate/cameradevice%28__didremove_%29-4m5al.md): Tells the client when objects are removed from the device.
- [cameraDevice:didCompleteDeleteFilesWithError:](iccameradevicedelegate/cameradevice%28__didcompletedeletefileswitherror_%29.md): Tells the client when the camera completes a delete operation.
- [cameraDevice:didRemoveItem:](iccameradevicedelegate/cameradevice%28__didremove_%29-9rz34.md): Deprecated. Tells the client when an object is removed from the device.

### Renaming Objects

- [cameraDevice:didRenameItems:](iccameradevicedelegate/cameradevice%28__didrenameitems_%29.md): Tells the client when one or more objects are renamed on the device.

### Receiving Metadata

- [cameraDevice:didReceiveMetadata:forItem:error:](iccameradevicedelegate/cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice:shouldGetMetadataOfItem:](iccameradevicedelegate/cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.
- [cameraDevice:didReceiveMetadataForItem:](iccameradevicedelegate/cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.

### Receiving Thumbnails

- [cameraDevice:didReceiveThumbnail:forItem:error:](iccameradevicedelegate/cameradevice%28__didreceivethumbnail_for_error_%29.md): Tells the client when the requested thumbnail is available.
- [cameraDevice:didReceiveThumbnailForItem:](iccameradevicedelegate/cameradevice%28__didreceivethumbnailfor_%29.md): Deprecated. Tells the client when the requested thumbnail is available.
- [cameraDevice:shouldGetThumbnailOfItem:](iccameradevicedelegate/cameradevice%28__shouldgetthumbnailof_%29.md): Tells the client when the camera is about to execute queued requests for the thumbnail of a specific item.

### Responding to Capability Changes

- [cameraDeviceDidChangeCapability:](iccameradevicedelegate/cameradevicedidchangecapability%28__%29.md): Tells the client when a capability of a camera changes.

### Responding to Access Restrictions

- [cameraDeviceDidEnableAccessRestriction:](iccameradevicedelegate/cameradevicedidenableaccessrestriction%28__%29.md): Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.
- [cameraDeviceDidRemoveAccessRestriction:](iccameradevicedelegate/cameradevicedidremoveaccessrestriction%28__%29.md): Tells the client when an Apple device has been unlocked, paired to the host, and media is available.

### Responding to PTP Events

- [cameraDevice:didReceivePTPEvent:](iccameradevicedelegate/cameradevice%28__didreceiveptpevent_%29.md): Tells the client about a PTP event.

## Relationships

### Inherits From

- [ICDeviceDelegate](icdevicedelegate.md)

## See Also

### Cameras

- [ICCameraDevice](iccameradevice.md): An object that represents a camera.
- [ICCameraItem](iccameraitem.md): An abstract class that represents a camera item.
- [ICCameraFile](iccamerafile.md): An object that represents a file on a camera.
- [ICCameraFolder](iccamerafolder.md): An object that represents a folder on a camera.
