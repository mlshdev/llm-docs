> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksessionerror-swift.struct/code/inprogresserror](https://developer.apple.com/documentation/gamekit/gksessionerror-swift.struct/code/inprogresserror)

# GKSessionError.Code.inProgressError (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The peer your application attempted to connect to has already requested a connection to your session.

> No longer supported

## Declaration

```swift
case inProgressError
```

## See Also

### Constants

- [GKSessionError.Code.invalidParameterError](invalidparametererror.md): Deprecated. A parameter had an unexpected value.
- [GKSessionError.Code.peerNotFoundError](peernotfounderror.md): Deprecated. A peer with the specified `peerID` string could not be found.
- [GKSessionError.Code.declinedError](declinederror.md): Deprecated. The peer your application tried to connect to refused the connection.
- [GKSessionError.Code.timedOutError](timedouterror.md): Deprecated. The operation could not be completed in the specified timeout period.
- [GKSessionError.Code.cancelledError](cancellederror.md): Deprecated. A peer that invited the session to connect to them canceled the connection request.
- [GKSessionError.Code.connectionFailedError](connectionfailederror.md): Deprecated. The attempt to establish a connection with another peer failed.
- [GKSessionError.Code.connectionClosedError](connectionclosederror.md): Deprecated. The connection to another peer closed unexpectedly.
- [GKSessionError.Code.dataTooBigError](datatoobigerror.md): Deprecated. The data your application attempted to send was too large for the session to transmit in a single call.
- [GKSessionError.Code.notConnectedError](notconnectederror.md): Deprecated. Reserved for future use.
- [GKSessionError.Code.cannotEnableError](cannotenableerror.md): Deprecated. Bluetooth is not currently available.
- [GKSessionError.Code.connectivityError](connectivityerror.md): Deprecated. An error occurred in the [GKSession](../../gksession.md) object’s connection code.
- [GKSessionError.Code.transportError](transporterror.md): Deprecated. An error occurred in the [GKSession](../../gksession.md) object’s transport code.
- [GKSessionError.Code.internalError](internalerror.md): Deprecated. A serious error occurred inside [GKSession](../../gksession.md).
- [GKSessionError.Code.unknownError](unknownerror.md): Deprecated. Reserved for when the error does not fit in another category above.
- [GKSessionError.Code.systemError](systemerror.md): Deprecated. An error occurred outside of the [GKSession](../../gksession.md) object’s control, such as memory allocation.

# GKSessionInProgressError (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The peer your application attempted to connect to has already requested a connection to your session.

> No longer supported

## Declaration

```objectivec
GKSessionInProgressError
```

## See Also

### Constants

- [GKSessionInvalidParameterError](invalidparametererror.md): Deprecated. A parameter had an unexpected value.
- [GKSessionPeerNotFoundError](peernotfounderror.md): Deprecated. A peer with the specified `peerID` string could not be found.
- [GKSessionDeclinedError](declinederror.md): Deprecated. The peer your application tried to connect to refused the connection.
- [GKSessionTimedOutError](timedouterror.md): Deprecated. The operation could not be completed in the specified timeout period.
- [GKSessionCancelledError](cancellederror.md): Deprecated. A peer that invited the session to connect to them canceled the connection request.
- [GKSessionConnectionFailedError](connectionfailederror.md): Deprecated. The attempt to establish a connection with another peer failed.
- [GKSessionConnectionClosedError](connectionclosederror.md): Deprecated. The connection to another peer closed unexpectedly.
- [GKSessionDataTooBigError](datatoobigerror.md): Deprecated. The data your application attempted to send was too large for the session to transmit in a single call.
- [GKSessionNotConnectedError](notconnectederror.md): Deprecated. Reserved for future use.
- [GKSessionCannotEnableError](cannotenableerror.md): Deprecated. Bluetooth is not currently available.
- [GKSessionConnectivityError](connectivityerror.md): Deprecated. An error occurred in the [GKSession](../../gksession.md) object’s connection code.
- [GKSessionTransportError](transporterror.md): Deprecated. An error occurred in the [GKSession](../../gksession.md) object’s transport code.
- [GKSessionInternalError](internalerror.md): Deprecated. A serious error occurred inside [GKSession](../../gksession.md).
- [GKSessionUnknownError](unknownerror.md): Deprecated. Reserved for when the error does not fit in another category above.
- [GKSessionSystemError](systemerror.md): Deprecated. An error occurred outside of the [GKSession](../../gksession.md) object’s control, such as memory allocation.
