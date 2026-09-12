> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/device(_:didreceivestatusinformation:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/device(_:didreceivestatusinformation:))

# device(\_:didReceiveStatusInformation:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when status information is received from a device.

## Declaration

```swift
optional func device(_ device: ICDevice, didReceiveStatusInformation status: [ICDeviceStatus : Any])
```

<a id="Discussion"></a>

## Discussion

The ‘status’ dictionary contains two keys, ICStatusNotificationKey and ICLocalizedStatusNotificationKey, which are defined above.  Status information keys are located in their respective ICDevice type class header.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device(\_:didOpenSessionWithError:)](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device(\_:didCloseSessionWithError:)](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemove(\_:)](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady(\_:)](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didEncounterError:)](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device(\_:didEjectWithError:)](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

# device:didReceiveStatusInformation: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when status information is received from a device.

## Declaration

```objectivec
- (void) device:(ICDevice *) device didReceiveStatusInformation:(NSDictionary<NSString *,id> *) status;
```

<a id="Discussion"></a>

## Discussion

The ‘status’ dictionary contains two keys, ICStatusNotificationKey and ICLocalizedStatusNotificationKey, which are defined above.  Status information keys are located in their respective ICDevice type class header.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device:didOpenSessionWithError:](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device:didCloseSessionWithError:](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemoveDevice:](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady:](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didEncounterError:](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device:didEjectWithError:](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.
