> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnstatus](https://developer.apple.com/documentation/networkextension/nevpnstatus)

# NEVPNStatus (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The possible states of a VPN connection.

## Declaration

```swift
enum NEVPNStatus
```

<a id="overview"></a>

## Overview

After the VPN transitions from the [NEVPNStatus.disconnected](nevpnstatus/disconnected.md) to the [NEVPNStatus.disconnecting](nevpnstatus/disconnecting.md) state, the system doesn’t close TCP connections, but ignores packets to and from established network connections. When the VPN transitions to another state — for example, from a Wi-Fi to a cellular network — the system ignores network traffic and the VPN client typically reconnects to the VPN server.

## Topics

### Statuses

- [NEVPNStatus.disconnecting](nevpnstatus/disconnecting.md): The VPN is in the process of disconnecting.
- [NEVPNStatus.reasserting](nevpnstatus/reasserting.md): The VPN is in the process of reconnecting.
- [NEVPNStatus.connected](nevpnstatus/connected.md): The VPN is connected.
- [NEVPNStatus.connecting](nevpnstatus/connecting.md): The VPN is in the process of connecting.
- [NEVPNStatus.disconnected](nevpnstatus/disconnected.md): The VPN is disconnected.
- [NEVPNStatus.invalid](nevpnstatus/invalid.md): The associated VPN configuration doesn’t exist in the Network Extension preferences or isn’t enabled.

### Initializers

- [init(rawValue:)](nevpnstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting VPN connection status

- [manager](nevpnconnection/manager.md)
- [status](nevpnconnection/status.md): The current status of the VPN connection.
- [connectedDate](nevpnconnection/connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.

# NEVPNStatus (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The possible states of a VPN connection.

## Declaration

```objectivec
enum NEVPNStatus : NSInteger;
```

<a id="overview"></a>

## Overview

After the VPN transitions from the [NEVPNStatusDisconnected](nevpnstatus/disconnected.md) to the [NEVPNStatusDisconnecting](nevpnstatus/disconnecting.md) state, the system doesn’t close TCP connections, but ignores packets to and from established network connections. When the VPN transitions to another state — for example, from a Wi-Fi to a cellular network — the system ignores network traffic and the VPN client typically reconnects to the VPN server.

## Topics

### Statuses

- [NEVPNStatusDisconnecting](nevpnstatus/disconnecting.md): The VPN is in the process of disconnecting.
- [NEVPNStatusReasserting](nevpnstatus/reasserting.md): The VPN is in the process of reconnecting.
- [NEVPNStatusConnected](nevpnstatus/connected.md): The VPN is connected.
- [NEVPNStatusConnecting](nevpnstatus/connecting.md): The VPN is in the process of connecting.
- [NEVPNStatusDisconnected](nevpnstatus/disconnected.md): The VPN is disconnected.
- [NEVPNStatusInvalid](nevpnstatus/invalid.md): The associated VPN configuration doesn’t exist in the Network Extension preferences or isn’t enabled.

## See Also

### Getting VPN connection status

- [manager](nevpnconnection/manager.md)
- [status](nevpnconnection/status.md): The current status of the VPN connection.
- [connectedDate](nevpnconnection/connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.
