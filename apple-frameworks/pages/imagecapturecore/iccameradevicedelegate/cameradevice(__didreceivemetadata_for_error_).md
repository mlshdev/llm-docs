> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceivemetadata:for:error:)

# cameraDevice(\_:didReceiveMetadata:for:error:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the client when the metadata requested for an item on a camera is available.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didReceiveMetadata metadata: [AnyHashable : Any]?, for item: ICCameraItem, error: (any Error)?)
```

## See Also

### Receiving Metadata

- [cameraDevice(\_:shouldGetMetadataOf:)](cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.
- [cameraDevice(\_:didReceiveMetadataFor:)](cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.

# cameraDevice:didReceiveMetadata:forItem:error: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Tells the client when the metadata requested for an item on a camera is available.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didReceiveMetadata:(NSDictionary *) metadata forItem:(ICCameraItem *) item error:(NSError *) error;
```

## See Also

### Receiving Metadata

- [cameraDevice:shouldGetMetadataOfItem:](cameradevice%28__shouldgetmetadataof_%29.md): Tells the client when the camera is about to execute queued requests for the metadata of a specific item.
- [cameraDevice:didReceiveMetadataForItem:](cameradevice%28__didreceivemetadatafor_%29.md): Deprecated. Tells the client when the metadata requested for an item on a camera is available.
