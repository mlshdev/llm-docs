> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcerror/insufficientspace](https://developer.apple.com/documentation/watchconnectivity/wcerror/insufficientspace)

# insufficientSpace

**Framework:** Watch Connectivity  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

An error indicating that there isn’t enough space on the receiving side to store the data.

## Declaration

```swift
static var insufficientSpace: WCError.Code { get }
```

## See Also

### Understanding Error Codes

- [genericError](genericerror.md): An error that occurs when there is an unknown problem.
- [sessionNotSupported](sessionnotsupported.md): An error indicating that the current device doesn’t support the use of session objects.
- [sessionMissingDelegate](sessionmissingdelegate.md): An error indicating that the WatchKit extension doesn’t have a valid extension delegate to process events.
- [sessionNotActivated](sessionnotactivated.md): An error indicating that the other device doesn’t have an active session.
- [deviceNotPaired](devicenotpaired.md): An error indicating that the current device doesn’t have a paired counterpart.
- [watchAppNotInstalled](watchappnotinstalled.md): An error indicating that the Watch app isn’t an installed app on the user’s Apple Watch.
- [notReachable](notreachable.md): An error indicating that the counterpart app isn’t reachable.
- [invalidParameter](invalidparameter.md): An error indicating that a parameter is invalid.
- [payloadTooLarge](payloadtoolarge.md): An error indicating an attempt to send an item that exceeds the maximum size limit.
- [payloadUnsupportedTypes](payloadunsupportedtypes.md): An error indicating that a dictionary contains nonproperty list types.
- [messageReplyFailed](messagereplyfailed.md): An error that occurs when the system can’t return the reply.
- [messageReplyTimedOut](messagereplytimedout.md): An error that occurs when the counterpart app doesn’t return a reply in time.
- [fileAccessDenied](fileaccessdenied.md): An error indicating that the system can’t transfer a file because it is inaccessible.
- [deliveryFailed](deliveryfailed.md): An error that occurs when the system can’t deliver the payload.
- [sessionInactive](sessioninactive.md): An error indicating that the session is inactive.
