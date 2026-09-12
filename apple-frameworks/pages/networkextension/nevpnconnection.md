> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection](https://developer.apple.com/documentation/networkextension/nevpnconnection)

# NEVPNConnection (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to start and stop a Personal VPN connection and get its status.

## Declaration

```swift
class NEVPNConnection
```

<a id="overview"></a>

## Overview

[NEVPNConnection](nevpnconnection.md) objects are not instantiated directly. Instead, each `NEVPNManager` object has an associated [NEVPNConnection](nevpnconnection.md) object as a read-only property.

The [NEVPNConnection](nevpnconnection.md) class provides methods for starting and stopping the VPN programmatically. The other way that the VPN can be started and stopped is through VPN On Demand. See the `onDemandRules` property in [NEVPNManager](nevpnmanager.md) and [NEOnDemandRule](neondemandrule.md).

Instances of this class are thread safe.

## Topics

### Controlling the VPN connection

- [startVPNTunnel()](nevpnconnection/startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [startVPNTunnel(options:)](nevpnconnection/startvpntunnel%28options_%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](nevpnconnectionstartoptionpassword.md)
- [stopVPNTunnel()](nevpnconnection/stopvpntunnel%28%29.md): Start the process of disconnecting the VPN.

### Getting VPN connection status

- [manager](nevpnconnection/manager.md)
- [status](nevpnconnection/status.md): The current status of the VPN connection.
- [NEVPNStatus](nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](nevpnconnection/connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.

### Notifications

- [NEVPNStatusDidChange](../foundation/nsnotification/name-swift.struct/nevpnstatusdidchange.md): Posted when the status of the VPN connection changes.

### Handling errors

- [fetchLastDisconnectError(completionHandler:)](nevpnconnection/fetchlastdisconnecterror%28completionhandler_%29.md): Retrives the most recent error that caused the VPN to disconnect.
- [NEVPNConnectionErrorDomain](nevpnconnectionerrordomain.md): The domain for errors resulting from VPN connection calls.
- [NEVPNConnectionError](nevpnconnectionerror.md): Error codes specific to VPN connections.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NETunnelProviderSession](netunnelprovidersession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### VPN control

- [NETunnelProviderSession](netunnelprovidersession.md): An object to start and stop a tunnel connection and get its status.

# NEVPNConnection (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An object to start and stop a Personal VPN connection and get its status.

## Declaration

```objectivec
@interface NEVPNConnection : NSObject
```

<a id="overview"></a>

## Overview

[NEVPNConnection](nevpnconnection.md) objects are not instantiated directly. Instead, each `NEVPNManager` object has an associated [NEVPNConnection](nevpnconnection.md) object as a read-only property.

The [NEVPNConnection](nevpnconnection.md) class provides methods for starting and stopping the VPN programmatically. The other way that the VPN can be started and stopped is through VPN On Demand. See the `onDemandRules` property in [NEVPNManager](nevpnmanager.md) and [NEOnDemandRule](neondemandrule.md).

Instances of this class are thread safe.

## Topics

### Controlling the VPN connection

- [startVPNTunnelAndReturnError:](nevpnconnection/startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [startVPNTunnelWithOptions:andReturnError:](nevpnconnection/startvpntunnel%28options_%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](nevpnconnectionstartoptionpassword.md)
- [stopVPNTunnel](nevpnconnection/stopvpntunnel%28%29.md): Start the process of disconnecting the VPN.

### Getting VPN connection status

- [manager](nevpnconnection/manager.md)
- [status](nevpnconnection/status.md): The current status of the VPN connection.
- [NEVPNStatus](nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](nevpnconnection/connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.

### Notifications

- [NEVPNStatusDidChangeNotification](nevpnstatusdidchangenotification.md): Posted when the status of the VPN connection changes.

### Handling errors

- [fetchLastDisconnectErrorWithCompletionHandler:](nevpnconnection/fetchlastdisconnecterror%28completionhandler_%29.md): Retrives the most recent error that caused the VPN to disconnect.
- [NEVPNConnectionErrorDomain](nevpnconnectionerrordomain.md): The domain for errors resulting from VPN connection calls.
- [NEVPNConnectionError](nevpnconnectionerror.md): Error codes specific to VPN connections.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NETunnelProviderSession](netunnelprovidersession.md)

## See Also

### VPN control

- [NETunnelProviderSession](netunnelprovidersession.md): An object to start and stop a tunnel connection and get its status.
