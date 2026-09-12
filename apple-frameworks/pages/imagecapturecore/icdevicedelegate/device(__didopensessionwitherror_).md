> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/device(_:didopensessionwitherror:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/device(_:didopensessionwitherror:))

# device(\_:didOpenSessionWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when a session is opened on a device.

## Declaration

```swift
func device(_ device: ICDevice, didOpenSessionWithError error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

This message completes the process initiated by the message “requestOpenSession” sent to the device object.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device(\_:didCloseSessionWithError:)](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemove(\_:)](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady(\_:)](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didReceiveStatusInformation:)](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device(\_:didEncounterError:)](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device(\_:didEjectWithError:)](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

# device:didOpenSessionWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when a session is opened on a device.

## Declaration

```objectivec
- (void) device:(ICDevice *) device didOpenSessionWithError:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

This message completes the process initiated by the message “requestOpenSession” sent to the device object.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device:didCloseSessionWithError:](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemoveDevice:](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady:](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didReceiveStatusInformation:](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device:didEncounterError:](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device:didEjectWithError:](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.
