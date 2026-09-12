> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icreturnconnectionerror/driverexited](https://developer.apple.com/documentation/imagecapturecore/icreturnconnectionerror/driverexited)

# driverExited

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Device driver exited without request.

## Declaration

```swift
static var driverExited: ICReturnConnectionError.Code { get }
```

## See Also

### Error Codes

- [closedSessionSuddenly](closedsessionsuddenly.md): Device closed session without request.
- [ejectFailed](ejectfailed.md): Device reports eject has failed.
- [ejectedSuddenly](ejectedsuddenly.md): Device ejected without request.
- [failedToOpen](failedtoopen.md): Failed to open a connection to the device.
- [failedToOpenDevice](failedtoopendevice.md): Failed to open the device.
- [sessionAlreadyOpen](sessionalreadyopen.md): Device reports session is already open.
- [ICReturnConnectionError.Code](code.md)
