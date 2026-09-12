> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/device(_:didejectwitherror:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/device(_:didejectwitherror:))

# device(\_:didEjectWithError:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when the ejection is complete.

## Declaration

```swift
optional func device(_ device: ICDevice, didEjectWithError error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device(\_:didOpenSessionWithError:)](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device(\_:didCloseSessionWithError:)](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemove(\_:)](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady(\_:)](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didReceiveStatusInformation:)](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device(\_:didEncounterError:)](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.

# device:didEjectWithError: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate when the ejection is complete.

## Declaration

```objectivec
- (void) device:(ICDevice *) device didEjectWithError:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Events

- [device:didOpenSessionWithError:](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device:didCloseSessionWithError:](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemoveDevice:](didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady:](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didReceiveStatusInformation:](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device:didEncounterError:](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
