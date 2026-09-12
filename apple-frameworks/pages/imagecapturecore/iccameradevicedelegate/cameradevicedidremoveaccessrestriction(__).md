> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevicedelegate/cameradevicedidremoveaccessrestriction(_:)](https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevicedidremoveaccessrestriction(_:))

# cameraDeviceDidRemoveAccessRestriction(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when an Apple device has been unlocked, paired to the host, and media is available.

## Declaration

```swift
func cameraDeviceDidRemoveAccessRestriction(_ device: ICDevice)
```

## See Also

### Responding to Access Restrictions

- [cameraDeviceDidEnableAccessRestriction(\_:)](cameradevicedidenableaccessrestriction%28__%29.md): Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.

# cameraDeviceDidRemoveAccessRestriction: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the client when an Apple device has been unlocked, paired to the host, and media is available.

## Declaration

```objectivec
- (void) cameraDeviceDidRemoveAccessRestriction:(ICDevice *) device;
```

## See Also

### Responding to Access Restrictions

- [cameraDeviceDidEnableAccessRestriction:](cameradevicedidenableaccessrestriction%28__%29.md): Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.
