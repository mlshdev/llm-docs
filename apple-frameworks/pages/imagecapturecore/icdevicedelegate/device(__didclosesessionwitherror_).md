> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/device(_:didclosesessionwitherror:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/device(_:didclosesessionwitherror:))

# device(\_:didCloseSessionWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when a session is closed on a device.

## Declaration

```swift
func device(_ device: ICDevice, didCloseSessionWithError error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

This message completes the process initiated by the message “requestCloseSession” sent to the device object. This message is also sent if the device module in control of the device ceases to control the device.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device(\_:didOpenSessionWithError:)](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [didRemove(\_:)](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady(\_:)](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didReceiveStatusInformation:)](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device(\_:didEncounterError:)](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device(\_:didEjectWithError:)](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

# device:didCloseSessionWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when a session is closed on a device.

## Declaration

```objectivec
- (void) device:(ICDevice *) device didCloseSessionWithError:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

This message completes the process initiated by the message “requestCloseSession” sent to the device object. This message is also sent if the device module in control of the device ceases to control the device.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device:didOpenSessionWithError:](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [didRemoveDevice:](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady:](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didReceiveStatusInformation:](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device:didEncounterError:](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device:didEjectWithError:](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.
