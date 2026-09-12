> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/disconnectreason)

# FoveatedStreamingSession.DisconnectReason

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 26.4+

A description of why a foveated streaming session’s status is in the disconnected state.

## Declaration

```swift
struct DisconnectReason
```

<a id="overview"></a>

## Overview

This struct may also be thrown as an error.

## Topics

### Type Properties

- [appInitiatedDisconnect](disconnectreason/appinitiateddisconnect.md): A disconnect reason indicating the disconnect was initiated by the application.
- [endpointInitiatedDisconnect](disconnectreason/endpointinitiateddisconnect.md): A disconnect command was initiated by the remote endpoint.
- [unauthorized](disconnectreason/unauthorized.md): A disconnect reason indicating the person denied authorization of the foveated streaming session.
- [unavailable](disconnectreason/unavailable.md): A disconnect reason indicating the foveated streaming service is currently unavailable.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
