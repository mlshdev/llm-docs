> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnconnection/stopvpntunnel()](https://developer.apple.com/documentation/networkextension/nevpnconnection/stopvpntunnel())

# stopVPNTunnel() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of disconnecting the VPN.

## Declaration

```swift
func stopVPNTunnel()
```

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of disconnecting the VPN. In order to be notified when the VPN is fully disconnected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NEVPNConnection](../nevpnconnection.md) object and examine the status property when the notification is received.

## See Also

### Controlling the VPN connection

- [startVPNTunnel()](startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [startVPNTunnel(options:)](startvpntunnel%28options_%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](../nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](../nevpnconnectionstartoptionpassword.md)

# stopVPNTunnel (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of disconnecting the VPN.

## Declaration

```objectivec
- (void) stopVPNTunnel;
```

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of disconnecting the VPN. In order to be notified when the VPN is fully disconnected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NEVPNConnection](../nevpnconnection.md) object and examine the status property when the notification is received.

## See Also

### Controlling the VPN connection

- [startVPNTunnelAndReturnError:](startvpntunnel%28%29.md): Start the process of connecting the VPN.
- [startVPNTunnelWithOptions:andReturnError:](startvpntunnel%28options_%29.md): Start the process of connecting the VPN.
- [NEVPNConnectionStartOptionUsername](../nevpnconnectionstartoptionusername.md)
- [NEVPNConnectionStartOptionPassword](../nevpnconnectionstartoptionpassword.md)
