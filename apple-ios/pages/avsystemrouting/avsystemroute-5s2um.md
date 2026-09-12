> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroute-5s2um](https://developer.apple.com/documentation/avsystemrouting/avsystemroute-5s2um)

# AVSystemRoute

**Framework:** AVSystemRouting  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An active media route to a remote device that manages connection and communication for media playback and data exchange.

## Declaration

```swift
final class AVSystemRoute
```

## Mentioned In

- [Routing and streaming media to remote devices](routing-and-streaming-media-to-remote-devices.md)

<a id="overview"></a>

## Overview

Use this object to control playback sessions, communicate with remote applications through data channels, and manage the lifecycle of remote connections.

The system route provides a high-level abstraction for routing media content to external devices such as TVs, speakers, or other compatible endpoints. You can create multiple sessions on a single route to manage different playback contexts or communication channels.

<a id="Manage-sessions"></a>

## Manage sessions

Create an [AVSystemRouteSession](avsystemroutesession-gp78.md) to initiate playback or communication with the remote device.

<a id="Access-the-protocol-identifier"></a>

## Access the protocol identifier

The [protocolType](avsystemroute-5s2um/protocoltype.md) property identifies the communication protocol used by the active route.

<a id="Send-and-receive-data"></a>

## Send and receive data

Use the [routeDataChannel](avsystemroute-5s2um/routedatachannel.md) property to send and receive custom data with the extension outside of any media session. This enables control messages, state synchronization, and other bidirectional communication needs.

## Topics

### Classes

- [AVSystemRoute.DataChannel](avsystemroute-5s2um/datachannel.md): An object that manages bidirectional data communication with a remote application.

### Instance Properties

- [protocolType](avsystemroute-5s2um/protocoltype.md): The communication protocol the active route uses.
- [routeDataChannel](avsystemroute-5s2um/routedatachannel.md): A data channel for communicating with the extension outside of any media session.
- [routeDisplayName](avsystemroute-5s2um/routedisplayname.md): The user-facing display name of the remote device or route.
- [routeSymbolName](avsystemroute-5s2um/routesymbolname.md): The SF Symbol name representing the remote device or route.

### Instance Methods

- [addSession(\_:)](avsystemroute-5s2um/addsession%28__%29.md): Adds a session to the active route.
- [removeSession(\_:)](avsystemroute-5s2um/removesession%28__%29.md): Removes a session from the active route.

### Enumerations

- [AVSystemRoute.LaunchMode](avsystemroute-5s2um/launchmode.md): The mode that determines how media playback launches on a remote device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Routes and sessions

- [AVSystemRouteSession](avsystemroutesession-gp78.md): An object that manages a single media playback session on a remote device.
- [AVSystemRoute.LaunchMode](avsystemroute-5s2um/launchmode.md): The mode that determines how media playback launches on a remote device.
