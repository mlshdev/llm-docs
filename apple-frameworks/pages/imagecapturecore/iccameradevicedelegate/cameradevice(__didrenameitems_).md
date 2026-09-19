> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didrenameitems:)

# cameraDevice(\_:didRenameItems:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when one or more objects are renamed on the device.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didRenameItems items: [ICCameraItem])
```

# cameraDevice:didRenameItems: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when one or more objects are renamed on the device.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didRenameItems:(NSArray<ICCameraItem *> *) items;
```
