> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatserviceerror-swift.struct/code](https://developer.apple.com/documentation/gamekit/gkvoicechatserviceerror-swift.struct/code)

# GKVoiceChatServiceError.Code (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Error codes for the voice chat service error domain.

> No longer supported

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [GKVoiceChatServiceError.Code.internalError](code/internalerror.md): Deprecated. A serious error occurred inside the voice chat service.
- [GKVoiceChatServiceError.Code.noRemotePacketsError](code/noremotepacketserror.md): Deprecated. The voice chat service stopped receiving packets from the remote participant.
- [GKVoiceChatServiceError.Code.unableToConnectError](code/unabletoconnecterror.md): Deprecated. The voice chat service was unable to establish a connection with another user.
- [GKVoiceChatServiceError.Code.remoteParticipantHangupError](code/remoteparticipanthanguperror.md): Deprecated. The remote participant in a voice chat stopped the chat.
- [GKVoiceChatServiceError.Code.invalidCallIDError](code/invalidcalliderror.md): Deprecated. The voice chat service didn’t recognize the call identifier.
- [GKVoiceChatServiceError.Code.audioUnavailableError](code/audiounavailableerror.md): Deprecated. The audio hardware is unavailable to the voice chat service.
- [GKVoiceChatServiceError.Code.uninitializedClientError](code/uninitializedclienterror.md): Deprecated. The application did not set a client before calling voice chat service methods.
- [GKVoiceChatServiceError.Code.clientMissingRequiredMethodsError](code/clientmissingrequiredmethodserror.md): Deprecated. The voice chat service did not find an expected method defined by the client.
- [GKVoiceChatServiceError.Code.remoteParticipantBusyError](code/remoteparticipantbusyerror.md): Deprecated. The remote participant is already connected to a voice chat.
- [GKVoiceChatServiceError.Code.remoteParticipantCancelledError](code/remoteparticipantcancellederror.md): Deprecated. A remote participant attempted to start a voice chat, then canceled.
- [GKVoiceChatServiceError.Code.remoteParticipantResponseInvalidError](code/remoteparticipantresponseinvaliderror.md): Deprecated. Invalid data was received from a remote participant.
- [GKVoiceChatServiceError.Code.remoteParticipantDeclinedInviteError](code/remoteparticipantdeclinedinviteerror.md): Deprecated. A remote participant declined an invitation.
- [GKVoiceChatServiceError.Code.methodCurrentlyInvalidError](code/methodcurrentlyinvaliderror.md): Deprecated. A method on the voice chat service was called when it was not allowed to be called (for example, attempting to connect when the voice chat service was already connected).
- [GKVoiceChatServiceError.Code.networkConfigurationError](code/networkconfigurationerror.md): Deprecated. The voice chat service had problems accessing the network.
- [GKVoiceChatServiceError.Code.unsupportedRemoteVersionError](code/unsupportedremoteversionerror.md): Deprecated. The other participant is running a different version of the voice chat service.
- [GKVoiceChatServiceError.Code.outOfMemoryError](code/outofmemoryerror.md): Deprecated. The voice chat service was unable to allocate memory required to operate.
- [GKVoiceChatServiceError.Code.invalidParameterError](code/invalidparametererror.md): Deprecated. A parameter had an unrecognized value.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated enumerations

- [GKGameSessionError.Code](../gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError.Code](../gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionError](../gksessionerror-swift.struct.md): Deprecated.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
- [GKVoiceChatServiceError](../gkvoicechatserviceerror-swift.struct.md): Deprecated.

# GKVoiceChatServiceError (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Error codes for the voice chat service error domain.

> No longer supported

## Declaration

```objectivec
enum GKVoiceChatServiceError : int;
```

## Topics

### Constants

- [GKVoiceChatServiceInternalError](code/internalerror.md): Deprecated. A serious error occurred inside the voice chat service.
- [GKVoiceChatServiceNoRemotePacketsError](code/noremotepacketserror.md): Deprecated. The voice chat service stopped receiving packets from the remote participant.
- [GKVoiceChatServiceUnableToConnectError](code/unabletoconnecterror.md): Deprecated. The voice chat service was unable to establish a connection with another user.
- [GKVoiceChatServiceRemoteParticipantHangupError](code/remoteparticipanthanguperror.md): Deprecated. The remote participant in a voice chat stopped the chat.
- [GKVoiceChatServiceInvalidCallIDError](code/invalidcalliderror.md): Deprecated. The voice chat service didn’t recognize the call identifier.
- [GKVoiceChatServiceAudioUnavailableError](code/audiounavailableerror.md): Deprecated. The audio hardware is unavailable to the voice chat service.
- [GKVoiceChatServiceUninitializedClientError](code/uninitializedclienterror.md): Deprecated. The application did not set a client before calling voice chat service methods.
- [GKVoiceChatServiceClientMissingRequiredMethodsError](code/clientmissingrequiredmethodserror.md): Deprecated. The voice chat service did not find an expected method defined by the client.
- [GKVoiceChatServiceRemoteParticipantBusyError](code/remoteparticipantbusyerror.md): Deprecated. The remote participant is already connected to a voice chat.
- [GKVoiceChatServiceRemoteParticipantCancelledError](code/remoteparticipantcancellederror.md): Deprecated. A remote participant attempted to start a voice chat, then canceled.
- [GKVoiceChatServiceRemoteParticipantResponseInvalidError](code/remoteparticipantresponseinvaliderror.md): Deprecated. Invalid data was received from a remote participant.
- [GKVoiceChatServiceRemoteParticipantDeclinedInviteError](code/remoteparticipantdeclinedinviteerror.md): Deprecated. A remote participant declined an invitation.
- [GKVoiceChatServiceMethodCurrentlyInvalidError](code/methodcurrentlyinvaliderror.md): Deprecated. A method on the voice chat service was called when it was not allowed to be called (for example, attempting to connect when the voice chat service was already connected).
- [GKVoiceChatServiceNetworkConfigurationError](code/networkconfigurationerror.md): Deprecated. The voice chat service had problems accessing the network.
- [GKVoiceChatServiceUnsupportedRemoteVersionError](code/unsupportedremoteversionerror.md): Deprecated. The other participant is running a different version of the voice chat service.
- [GKVoiceChatServiceOutOfMemoryError](code/outofmemoryerror.md): Deprecated. The voice chat service was unable to allocate memory required to operate.
- [GKVoiceChatServiceInvalidParameterError](code/invalidparametererror.md): Deprecated. A parameter had an unrecognized value.

## See Also

### Deprecated enumerations

- [GKGameSessionErrorCode](../gkgamesessionerror/code.md): Deprecated. Error codes for the game session domain.
- [GKPeerConnectionState](../gkpeerconnectionstate.md): Deprecated. The state of a peer known to the session.
- [GKPeerPickerConnectionType](../gkpeerpickerconnectiontype.md): Deprecated. Network connections available to the peer picker dialog.
- [GKSendDataMode](../gksenddatamode.md): Deprecated. The mechanism used to transmit data to other peers.
- [GKSessionError](../gksessionerror-swift.struct/code.md): Deprecated. Error codes for the session error domain.
- [GKSessionMode](../gksessionmode.md): Deprecated. Modes that determine how a session interacts with other peers.
