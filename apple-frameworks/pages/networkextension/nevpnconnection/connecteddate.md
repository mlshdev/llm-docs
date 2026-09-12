> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/connecteddate](https://developer.apple.com/documentation/networkextension/nevpnconnection/connecteddate)

# connectedDate (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The date and time when the connection status changed to `NEVPNStatusConnected`.

## Declaration

```swift
var connectedDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the date and time when the connection status changed to `NEVPNStatusConnected` after previously being set to `NEVPNStatusDisconnected`. This property is set to nil whenever the status changes to `NEVPNStatusDisconnected`.

## See Also

### Getting VPN connection status

- [manager](manager.md)
- [status](status.md): The current status of the VPN connection.
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.

# connectedDate (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The date and time when the connection status changed to `NEVPNStatusConnected`.

## Declaration

```objectivec
@property (readonly, nullable) NSDate * connectedDate;
```

<a id="Discussion"></a>

## Discussion

This property contains the date and time when the connection status changed to `NEVPNStatusConnected` after previously being set to `NEVPNStatusDisconnected`. This property is set to nil whenever the status changes to `NEVPNStatusDisconnected`.

## See Also

### Getting VPN connection status

- [manager](manager.md)
- [status](status.md): The current status of the VPN connection.
- [NEVPNStatus](../nevpnstatus.md): The possible states of a VPN connection.
