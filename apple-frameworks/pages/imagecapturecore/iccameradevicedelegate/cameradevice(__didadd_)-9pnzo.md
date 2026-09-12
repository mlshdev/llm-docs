> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didadd:)-9pnzo](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didadd:)-9pnzo)

# cameraDevice(\_:didAdd:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS 1.0+

Tells the client when an object is added to the device.

## Declaration

```swift
optional func cameraDevice(_ camera: ICCameraDevice, didAdd item: ICCameraItem)
```

## See Also

### Adding Objects

- [cameraDevice(\_:didAdd:)](cameradevice%28__didadd_%29-8oukd.md): Tells the client when objects are added to the device.

# cameraDevice:didAddItem: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.4+ (deprecated in 10.15) · visionOS

Tells the client when an object is added to the device.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didAddItem:(ICCameraItem *) item;
```

## See Also

### Adding Objects

- [cameraDevice:didAddItems:](cameradevice%28__didadd_%29-8oukd.md): Tells the client when objects are added to the device.
