> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didadd:)-8oukd

# cameraDevice(\_:didAdd:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when objects are added to the device.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didAdd items: [ICCameraItem])
```

## See Also

### Adding Objects

- [cameraDevice(\_:didAdd:)](cameradevice%28__didadd_%29-9pnzo.md): Deprecated. Tells the client when an object is added to the device.

# cameraDevice:didAddItems: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when objects are added to the device.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didAddItems:(NSArray<ICCameraItem *> *) items;
```

## See Also

### Adding Objects

- [cameraDevice:didAddItem:](cameradevice%28__didadd_%29-9pnzo.md): Deprecated. Tells the client when an object is added to the device.
