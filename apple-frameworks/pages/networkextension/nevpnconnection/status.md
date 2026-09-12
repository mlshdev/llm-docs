> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/status](https://developer.apple.com/documentation/networkextension/nevpnconnection/status)

# status (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The current status of the VPN connection.

## Declaration

```swift
var status: NEVPNStatus { get }
```

## See Also

### Getting VPN connection status

- [manager](manager.md)
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.

# status (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The current status of the VPN connection.

## Declaration

```objectivec
@property (readonly) NEVPNStatus status;
```

## See Also

### Getting VPN connection status

- [manager](manager.md)
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.
