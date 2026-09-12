> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:shouldgetmetadataof:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:shouldgetmetadataof:))

# cameraDevice(\_:shouldGetMetadataOf:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera is about to execute queued requests for the metadata of a specific item.

## Declaration

```swift
optional func cameraDevice(_ cameraDevice: ICCameraDevice, shouldGetMetadataOf item: ICCameraItem) -> Bool
```

<a id="Discussion"></a>

## Discussion

If the request is no longer needed—for example, if the item is no longer displayed on the screen—the client can cancel sending a request to the camera, speeding up the execution queue.

## See Also

### Receiving Metadata

- [cameraDevice(\_:didReceiveMetadata:for:error:)](cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice(\_:didReceiveMetadataFor:)](cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.

# cameraDevice:shouldGetMetadataOfItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when the camera is about to execute queued requests for the metadata of a specific item.

## Declaration

```objectivec
- (BOOL) cameraDevice:(ICCameraDevice *) cameraDevice shouldGetMetadataOfItem:(ICCameraItem *) item;
```

<a id="Discussion"></a>

## Discussion

If the request is no longer needed—for example, if the item is no longer displayed on the screen—the client can cancel sending a request to the camera, speeding up the execution queue.

## See Also

### Receiving Metadata

- [cameraDevice:didReceiveMetadata:forItem:error:](cameradevice%28__didreceivemetadata_for_error_%29.md): Tells the client when the metadata requested for an item on a camera is available.
- [cameraDevice:didReceiveMetadataForItem:](cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.
