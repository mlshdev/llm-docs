> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/manager](https://developer.apple.com/documentation/networkextension/nevpnconnection/manager)

# manager (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
var manager: NEVPNManager { get }
```

## See Also

### Getting VPN connection status

- [status](status.md): The current status of the VPN connection.
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.

# manager (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (readonly) NEVPNManager * manager;
```

## See Also

### Getting VPN connection status

- [status](status.md): The current status of the VPN connection.
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.
- [connectedDate](connecteddate.md): The date and time when the connection status changed to `NEVPNStatusConnected`.
