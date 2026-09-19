> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameradevicedelegate/cameradevicedidenableaccessrestriction(_:)

# cameraDeviceDidEnableAccessRestriction(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.

## Declaration

```swift
func cameraDeviceDidEnableAccessRestriction(_ device: ICDevice)
```

## See Also

### Responding to Access Restrictions

- [cameraDeviceDidRemoveAccessRestriction(\_:)](cameradevicedidremoveaccessrestriction%28__%29.md): Tells the client when an Apple device has been unlocked, paired to the host, and media is available.

# cameraDeviceDidEnableAccessRestriction: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Tells the client when an Apple device has been locked, and media is unavailable until the restriction has been removed.

## Declaration

```objectivec
- (void) cameraDeviceDidEnableAccessRestriction:(ICDevice *) device;
```

## See Also

### Responding to Access Restrictions

- [cameraDeviceDidRemoveAccessRestriction:](cameradevicedidremoveaccessrestriction%28__%29.md): Tells the client when an Apple device has been unlocked, paired to the host, and media is available.
