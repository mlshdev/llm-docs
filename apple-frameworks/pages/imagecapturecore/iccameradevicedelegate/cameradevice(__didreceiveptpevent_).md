> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevice(_:didreceiveptpevent:)

# cameraDevice(\_:didReceivePTPEvent:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client about a PTP event.

## Declaration

```swift
func cameraDevice(_ camera: ICCameraDevice, didReceivePTPEvent eventData: Data)
```

# cameraDevice:didReceivePTPEvent: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client about a PTP event.

## Declaration

```objectivec
- (void) cameraDevice:(ICCameraDevice *) camera didReceivePTPEvent:(NSData *) eventData;
```
