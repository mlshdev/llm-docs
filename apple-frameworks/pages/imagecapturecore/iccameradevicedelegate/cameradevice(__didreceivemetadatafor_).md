> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivemetadatafor:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivemetadatafor:))

# cameraDevice(\_:didReceiveMetadataFor:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

Tells the client when the metadata requested for an item on a camera is available.

## Declaration

```swift
optional func cameraDevice(_ camera: ICCameraDevice, didReceiveMetadataFor item: ICCameraItem)
```

## See Also

### Receiving Metadata

- [cameraDevice(\_:didReceiveMetadata:for:error:)](cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice(\_:shouldGetMetadataOf:)](cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.

# cameraDevice:didReceiveMetadataForItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS

Tells the client when the metadata requested for an item on a camera is available.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didReceiveMetadataForItem:(ICCameraItem *) item;
```

## See Also

### Receiving Metadata

- [cameraDevice:didReceiveMetadata:forItem:error:](cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice:shouldGetMetadataOfItem:](cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.
