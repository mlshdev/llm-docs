> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/didremove(_:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/didremove(_:))

# didRemove(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been removed.

## Declaration

```swift
func didRemove(_ device: ICDevice)
```

## See Also

### Responding to Device Events

- [device(\_:didOpenSessionWithError:)](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device(\_:didCloseSessionWithError:)](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [deviceDidBecomeReady(\_:)](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didReceiveStatusInformation:)](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device(\_:didEncounterError:)](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device(\_:didEjectWithError:)](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

# didRemoveDevice: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Tells the delegate that a device has been removed.

## Declaration

```objectivec
- (void) didRemoveDevice:(ICDevice *) device;
```

## See Also

### Responding to Device Events

- [device:didOpenSessionWithError:](device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device:didCloseSessionWithError:](device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [deviceDidBecomeReady:](devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didReceiveStatusInformation:](device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device:didEncounterError:](device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device:didEjectWithError:](device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.
