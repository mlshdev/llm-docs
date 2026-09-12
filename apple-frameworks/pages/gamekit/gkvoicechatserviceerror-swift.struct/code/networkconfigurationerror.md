> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatserviceerror-swift.struct/code/networkconfigurationerror](https://developer.apple.com/documentation/gamekit/gkvoicechatserviceerror-swift.struct/code/networkconfigurationerror)

# GKVoiceChatServiceError.Code.networkConfigurationError (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The voice chat service had problems accessing the network.

> No longer supported

## Declaration

```swift
case networkConfigurationError
```

## See Also

### Constants

- [GKVoiceChatServiceError.Code.internalError](internalerror.md): Deprecated. A serious error occurred inside the voice chat service.
- [GKVoiceChatServiceError.Code.noRemotePacketsError](noremotepacketserror.md): Deprecated. The voice chat service stopped receiving packets from the remote participant.
- [GKVoiceChatServiceError.Code.unableToConnectError](unabletoconnecterror.md): Deprecated. The voice chat service was unable to establish a connection with another user.
- [GKVoiceChatServiceError.Code.remoteParticipantHangupError](remoteparticipanthanguperror.md): Deprecated. The remote participant in a voice chat stopped the chat.
- [GKVoiceChatServiceError.Code.invalidCallIDError](invalidcalliderror.md): Deprecated. The voice chat service didn’t recognize the call identifier.
- [GKVoiceChatServiceError.Code.audioUnavailableError](audiounavailableerror.md): Deprecated. The audio hardware is unavailable to the voice chat service.
- [GKVoiceChatServiceError.Code.uninitializedClientError](uninitializedclienterror.md): Deprecated. The application did not set a client before calling voice chat service methods.
- [GKVoiceChatServiceError.Code.clientMissingRequiredMethodsError](clientmissingrequiredmethodserror.md): Deprecated. The voice chat service did not find an expected method defined by the client.
- [GKVoiceChatServiceError.Code.remoteParticipantBusyError](remoteparticipantbusyerror.md): Deprecated. The remote participant is already connected to a voice chat.
- [GKVoiceChatServiceError.Code.remoteParticipantCancelledError](remoteparticipantcancellederror.md): Deprecated. A remote participant attempted to start a voice chat, then canceled.
- [GKVoiceChatServiceError.Code.remoteParticipantResponseInvalidError](remoteparticipantresponseinvaliderror.md): Deprecated. Invalid data was received from a remote participant.
- [GKVoiceChatServiceError.Code.remoteParticipantDeclinedInviteError](remoteparticipantdeclinedinviteerror.md): Deprecated. A remote participant declined an invitation.
- [GKVoiceChatServiceError.Code.methodCurrentlyInvalidError](methodcurrentlyinvaliderror.md): Deprecated. A method on the voice chat service was called when it was not allowed to be called (for example, attempting to connect when the voice chat service was already connected).
- [GKVoiceChatServiceError.Code.unsupportedRemoteVersionError](unsupportedremoteversionerror.md): Deprecated. The other participant is running a different version of the voice chat service.
- [GKVoiceChatServiceError.Code.outOfMemoryError](outofmemoryerror.md): Deprecated. The voice chat service was unable to allocate memory required to operate.

# GKVoiceChatServiceNetworkConfigurationError (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

The voice chat service had problems accessing the network.

> No longer supported

## Declaration

```objectivec
GKVoiceChatServiceNetworkConfigurationError
```

## See Also

### Constants

- [GKVoiceChatServiceInternalError](internalerror.md): Deprecated. A serious error occurred inside the voice chat service.
- [GKVoiceChatServiceNoRemotePacketsError](noremotepacketserror.md): Deprecated. The voice chat service stopped receiving packets from the remote participant.
- [GKVoiceChatServiceUnableToConnectError](unabletoconnecterror.md): Deprecated. The voice chat service was unable to establish a connection with another user.
- [GKVoiceChatServiceRemoteParticipantHangupError](remoteparticipanthanguperror.md): Deprecated. The remote participant in a voice chat stopped the chat.
- [GKVoiceChatServiceInvalidCallIDError](invalidcalliderror.md): Deprecated. The voice chat service didn’t recognize the call identifier.
- [GKVoiceChatServiceAudioUnavailableError](audiounavailableerror.md): Deprecated. The audio hardware is unavailable to the voice chat service.
- [GKVoiceChatServiceUninitializedClientError](uninitializedclienterror.md): Deprecated. The application did not set a client before calling voice chat service methods.
- [GKVoiceChatServiceClientMissingRequiredMethodsError](clientmissingrequiredmethodserror.md): Deprecated. The voice chat service did not find an expected method defined by the client.
- [GKVoiceChatServiceRemoteParticipantBusyError](remoteparticipantbusyerror.md): Deprecated. The remote participant is already connected to a voice chat.
- [GKVoiceChatServiceRemoteParticipantCancelledError](remoteparticipantcancellederror.md): Deprecated. A remote participant attempted to start a voice chat, then canceled.
- [GKVoiceChatServiceRemoteParticipantResponseInvalidError](remoteparticipantresponseinvaliderror.md): Deprecated. Invalid data was received from a remote participant.
- [GKVoiceChatServiceRemoteParticipantDeclinedInviteError](remoteparticipantdeclinedinviteerror.md): Deprecated. A remote participant declined an invitation.
- [GKVoiceChatServiceMethodCurrentlyInvalidError](methodcurrentlyinvaliderror.md): Deprecated. A method on the voice chat service was called when it was not allowed to be called (for example, attempting to connect when the voice chat service was already connected).
- [GKVoiceChatServiceUnsupportedRemoteVersionError](unsupportedremoteversionerror.md): Deprecated. The other participant is running a different version of the voice chat service.
- [GKVoiceChatServiceOutOfMemoryError](outofmemoryerror.md): Deprecated. The voice chat service was unable to allocate memory required to operate.
