> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcerror](https://developer.apple.com/documentation/watchconnectivity/wcerror)

# WCError

**Framework:** Watch Connectivity  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A structure that contains Watch Connectivity error information.

## Declaration

```swift
struct WCError
```

## Topics

### Understanding Error Codes

- [genericError](wcerror/genericerror.md): An error that occurs when there is an unknown problem.
- [sessionNotSupported](wcerror/sessionnotsupported.md): An error indicating that the current device doesn’t support the use of session objects.
- [sessionMissingDelegate](wcerror/sessionmissingdelegate.md): An error indicating that the WatchKit extension doesn’t have a valid extension delegate to process events.
- [sessionNotActivated](wcerror/sessionnotactivated.md): An error indicating that the other device doesn’t have an active session.
- [deviceNotPaired](wcerror/devicenotpaired.md): An error indicating that the current device doesn’t have a paired counterpart.
- [watchAppNotInstalled](wcerror/watchappnotinstalled.md): An error indicating that the Watch app isn’t an installed app on the user’s Apple Watch.
- [notReachable](wcerror/notreachable.md): An error indicating that the counterpart app isn’t reachable.
- [invalidParameter](wcerror/invalidparameter.md): An error indicating that a parameter is invalid.
- [payloadTooLarge](wcerror/payloadtoolarge.md): An error indicating an attempt to send an item that exceeds the maximum size limit.
- [payloadUnsupportedTypes](wcerror/payloadunsupportedtypes.md): An error indicating that a dictionary contains nonproperty list types.
- [messageReplyFailed](wcerror/messagereplyfailed.md): An error that occurs when the system can’t return the reply.
- [messageReplyTimedOut](wcerror/messagereplytimedout.md): An error that occurs when the counterpart app doesn’t return a reply in time.
- [fileAccessDenied](wcerror/fileaccessdenied.md): An error indicating that the system can’t transfer a file because it is inaccessible.
- [deliveryFailed](wcerror/deliveryfailed.md): An error that occurs when the system can’t deliver the payload.
- [insufficientSpace](wcerror/insufficientspace.md): An error indicating that there isn’t enough space on the receiving side to store the data.
- [sessionInactive](wcerror/sessioninactive.md): An error indicating that the session is inactive.
- [transferTimedOut](wcerror/transfertimedout.md): An error that occurs when the transfer reaches the timeout limit before it completes.
- [companionAppNotInstalled](wcerror/companionappnotinstalled.md): An error indicating that the companion hasn’t installed the app.
- [watchOnlyApp](wcerror/watchonlyapp.md): An error indicating that the app is a watch-only app.

### Enumerations

- [WCError.Code](wcerror/code.md): Constants for errors during a session.

### Type Properties

- [errorDomain](wcerror/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [WCSessionActivationState](wcsessionactivationstate.md): Constants indicating the activation state of a session.
- [WCErrorDomain](wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCError.Code](wcerror/code.md): Constants for errors during a session.
