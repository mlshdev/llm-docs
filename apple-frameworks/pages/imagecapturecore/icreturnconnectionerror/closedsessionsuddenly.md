> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icreturnconnectionerror/closedsessionsuddenly

# closedSessionSuddenly

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Device closed session without request.

## Declaration

```swift
static var closedSessionSuddenly: ICReturnConnectionError.Code { get }
```

## See Also

### Error Codes

- [driverExited](driverexited.md): Device driver exited without request.
- [ejectFailed](ejectfailed.md): Device reports eject has failed.
- [ejectedSuddenly](ejectedsuddenly.md): Device ejected without request.
- [failedToOpen](failedtoopen.md): Failed to open a connection to the device.
- [failedToOpenDevice](failedtoopendevice.md): Failed to open the device.
- [sessionAlreadyOpen](sessionalreadyopen.md): Device reports session is already open.
- [ICReturnConnectionError.Code](code.md)
