> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidersession](https://developer.apple.com/documentation/networkextension/netunnelprovidersession)

# NETunnelProviderSession (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to start and stop a tunnel connection and get its status.

## Declaration

```swift
class NETunnelProviderSession
```

<a id="overview"></a>

## Overview

`NETunnelProviderSession` objects control network tunnel connections provided by Tunnel Provider extensions.

`NETunnelProviderSession` objects are not instantiated directly. Instead, each [NETunnelProviderManager](netunnelprovidermanager.md) object has an associated `NETunnelProviderSession` as a read-only property.

## Topics

### Controlling the tunnel connection

- [startTunnel(options:)](netunnelprovidersession/starttunnel%28options_%29.md): Start the process of connecting the tunnel.
- [stopTunnel()](netunnelprovidersession/stoptunnel%28%29.md): Start the process of disconnecting the tunnel.

### Communicating with the tunnel provider

- [sendProviderMessage(\_:responseHandler:)](netunnelprovidersession/sendprovidermessage%28__responsehandler_%29.md): Send a message to the Tunnel Provider extension. If the extension is not running, it should be launched to handle the message. If this method can’t start sending the message it reports an error in the `returnError` parameter. If an error occurs while sending the message or returning the result, `nil` should be sent to the response handler as notification.

## Relationships

### Inherits From

- [NEVPNConnection](nevpnconnection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### VPN control

- [NEVPNConnection](nevpnconnection.md): An object to start and stop a Personal VPN connection and get its status.

# NETunnelProviderSession (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to start and stop a tunnel connection and get its status.

## Declaration

```objectivec
@interface NETunnelProviderSession : NEVPNConnection
```

<a id="overview"></a>

## Overview

`NETunnelProviderSession` objects control network tunnel connections provided by Tunnel Provider extensions.

`NETunnelProviderSession` objects are not instantiated directly. Instead, each [NETunnelProviderManager](netunnelprovidermanager.md) object has an associated `NETunnelProviderSession` as a read-only property.

## Topics

### Controlling the tunnel connection

- [startTunnelWithOptions:andReturnError:](netunnelprovidersession/starttunnel%28options_%29.md): Start the process of connecting the tunnel.
- [stopTunnel](netunnelprovidersession/stoptunnel%28%29.md): Start the process of disconnecting the tunnel.

### Communicating with the tunnel provider

- [sendProviderMessage:returnError:responseHandler:](netunnelprovidersession/sendprovidermessage%28__responsehandler_%29.md): Send a message to the Tunnel Provider extension. If the extension is not running, it should be launched to handle the message. If this method can’t start sending the message it reports an error in the `returnError` parameter. If an error occurs while sending the message or returning the result, `nil` should be sent to the response handler as notification.

## Relationships

### Inherits From

- [NEVPNConnection](nevpnconnection.md)

## See Also

### VPN control

- [NEVPNConnection](nevpnconnection.md): An object to start and stop a Personal VPN connection and get its status.
