> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalsyncdevicedelegate/externalsyncdevice(_:failedwitherror:)](https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicedelegate/externalsyncdevice(_:failedwitherror:))

# externalSyncDevice(\_:failedWithError:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```swift
optional func externalSyncDevice(_ device: AVExternalSyncDevice, failedWithError error: (any Error)?)
```

## See Also

### Responding to device events

- [externalSyncDeviceStatusDidChange(\_:)](externalsyncdevicestatusdidchange%28__%29.md): Informs your delegate when the external sync device status has changed.

# externalSyncDevice:failedWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

## Declaration

```objectivec
- (void) externalSyncDevice:(AVExternalSyncDevice *) device failedWithError:(NSError *) error;
```

## See Also

### Responding to device events

- [externalSyncDeviceStatusDidChange:](externalsyncdevicestatusdidchange%28__%29.md): Informs your delegate when the external sync device status has changed.
