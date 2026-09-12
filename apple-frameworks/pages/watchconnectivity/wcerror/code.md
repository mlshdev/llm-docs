> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcerror/code](https://developer.apple.com/documentation/watchconnectivity/wcerror/code)

# WCError.Code (Swift)

**Framework:** Watch Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Constants for errors during a session.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [WCError.Code.genericError](code/genericerror.md): An error that occurs when there is an unknown problem.
- [WCError.Code.sessionNotSupported](code/sessionnotsupported.md): An error indicating that the current device doesn’t support the use of session objects.
- [WCError.Code.sessionMissingDelegate](code/sessionmissingdelegate.md): An error indicating that the WatchKit extension doesn’t have a valid extension delegate to process events.
- [WCError.Code.sessionNotActivated](code/sessionnotactivated.md): An error indicating that the other device doesn’t have an active session.
- [WCError.Code.deviceNotPaired](code/devicenotpaired.md): An error indicating that the current device doesn’t have a paired counterpart.
- [WCError.Code.watchAppNotInstalled](code/watchappnotinstalled.md): An error indicating that the Watch app isn’t an installed app on the user’s Apple Watch.
- [WCError.Code.notReachable](code/notreachable.md): An error indicating that the counterpart app isn’t reachable.
- [WCError.Code.invalidParameter](code/invalidparameter.md): An error indicating that a parameter is invalid.
- [WCError.Code.payloadTooLarge](code/payloadtoolarge.md): An error indicating an attempt to send an item that exceeds the maximum size limit.
- [WCError.Code.payloadUnsupportedTypes](code/payloadunsupportedtypes.md): An error indicating that a dictionary contains nonproperty list types.
- [WCError.Code.messageReplyFailed](code/messagereplyfailed.md): An error that occurs when the system can’t return the reply.
- [WCError.Code.messageReplyTimedOut](code/messagereplytimedout.md): An error that occurs when the counterpart app doesn’t return a reply in time.
- [WCError.Code.fileAccessDenied](code/fileaccessdenied.md): An error indicating that the system can’t transfer a file because it is inaccessible.
- [WCError.Code.deliveryFailed](code/deliveryfailed.md): An error that occurs when the system can’t deliver the payload.
- [WCError.Code.insufficientSpace](code/insufficientspace.md): An error indicating that there isn’t enough space on the receiving side to store the data.
- [WCError.Code.sessionInactive](code/sessioninactive.md): An error indicating that the session is inactive.
- [WCError.Code.transferTimedOut](code/transfertimedout.md): An error that occurs when the transfer reaches the timeout limit before it completes.
- [WCError.Code.companionAppNotInstalled](code/companionappnotinstalled.md): An error indicating that the companion hasn’t installed the app.
- [WCError.Code.watchOnlyApp](code/watchonlyapp.md): An error indicating that the app is a watch-only app.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [WCSessionActivationState](../wcsessionactivationstate.md): Constants indicating the activation state of a session.
- [WCErrorDomain](../wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
- [WCError](../wcerror.md): A structure that contains Watch Connectivity error information.

# WCErrorCode (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Constants for errors during a session.

## Declaration

```objectivec
enum WCErrorCode : NSInteger;
```

## Topics

### Error Codes

- [WCErrorCodeGenericError](code/genericerror.md): An error that occurs when there is an unknown problem.
- [WCErrorCodeSessionNotSupported](code/sessionnotsupported.md): An error indicating that the current device doesn’t support the use of session objects.
- [WCErrorCodeSessionMissingDelegate](code/sessionmissingdelegate.md): An error indicating that the WatchKit extension doesn’t have a valid extension delegate to process events.
- [WCErrorCodeSessionNotActivated](code/sessionnotactivated.md): An error indicating that the other device doesn’t have an active session.
- [WCErrorCodeDeviceNotPaired](code/devicenotpaired.md): An error indicating that the current device doesn’t have a paired counterpart.
- [WCErrorCodeWatchAppNotInstalled](code/watchappnotinstalled.md): An error indicating that the Watch app isn’t an installed app on the user’s Apple Watch.
- [WCErrorCodeNotReachable](code/notreachable.md): An error indicating that the counterpart app isn’t reachable.
- [WCErrorCodeInvalidParameter](code/invalidparameter.md): An error indicating that a parameter is invalid.
- [WCErrorCodePayloadTooLarge](code/payloadtoolarge.md): An error indicating an attempt to send an item that exceeds the maximum size limit.
- [WCErrorCodePayloadUnsupportedTypes](code/payloadunsupportedtypes.md): An error indicating that a dictionary contains nonproperty list types.
- [WCErrorCodeMessageReplyFailed](code/messagereplyfailed.md): An error that occurs when the system can’t return the reply.
- [WCErrorCodeMessageReplyTimedOut](code/messagereplytimedout.md): An error that occurs when the counterpart app doesn’t return a reply in time.
- [WCErrorCodeFileAccessDenied](code/fileaccessdenied.md): An error indicating that the system can’t transfer a file because it is inaccessible.
- [WCErrorCodeDeliveryFailed](code/deliveryfailed.md): An error that occurs when the system can’t deliver the payload.
- [WCErrorCodeInsufficientSpace](code/insufficientspace.md): An error indicating that there isn’t enough space on the receiving side to store the data.
- [WCErrorCodeSessionInactive](code/sessioninactive.md): An error indicating that the session is inactive.
- [WCErrorCodeTransferTimedOut](code/transfertimedout.md): An error that occurs when the transfer reaches the timeout limit before it completes.
- [WCErrorCodeCompanionAppNotInstalled](code/companionappnotinstalled.md): An error indicating that the companion hasn’t installed the app.
- [WCErrorCodeWatchOnlyApp](code/watchonlyapp.md): An error indicating that the app is a watch-only app.

## See Also

### Constants

- [WCSessionActivationState](../wcsessionactivationstate.md): Constants indicating the activation state of a session.
- [WCErrorDomain](../wcerrordomain.md): The domain for errors associated with the Watch Connectivity framework.
