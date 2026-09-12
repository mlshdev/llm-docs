> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/iccameradevice/isaccessrestrictedappledevice](https://developer.apple.com/documentation/imagecapturecore/iccameradevice/isaccessrestrictedappledevice)

# isAccessRestrictedAppleDevice (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device is an Apple device, passcode-locked, and connected to an untrusted host.

## Declaration

```swift
var isAccessRestrictedAppleDevice: Bool { get }
```

## See Also

### Detecting Apple Devices

- [iCloudPhotosEnabled](icloudphotosenabled.md): A Boolean value indicating whether the iCloud Photo Library is enabled on the device.

# accessRestrictedAppleDevice (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A Boolean value indicating whether the device is an Apple device, passcode-locked, and connected to an untrusted host.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAccessRestrictedAppleDevice) BOOL accessRestrictedAppleDevice;
```

## See Also

### Detecting Apple Devices

- [iCloudPhotosEnabled](icloudphotosenabled.md): A Boolean value indicating whether the iCloud Photo Library is enabled on the device.
