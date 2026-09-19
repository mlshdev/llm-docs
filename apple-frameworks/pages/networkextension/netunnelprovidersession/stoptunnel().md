> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/netunnelprovidersession/stoptunnel()

# stopTunnel() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of disconnecting the tunnel.

## Declaration

```swift
func stopTunnel()
```

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of disconnecting the tunnel. In order to be notified when the tunnel is fully disconnected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NETunnelProviderSession](../netunnelprovidersession.md) object and examine its status property when the notification is received.

## See Also

### Controlling the tunnel connection

- [startTunnel(options:)](starttunnel%28options_%29.md): Start the process of connecting the tunnel.

# stopTunnel (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the process of disconnecting the tunnel.

## Declaration

```objectivec
- (void) stopTunnel;
```

<a id="Discussion"></a>

## Discussion

This method returns immediately after starting the process of disconnecting the tunnel. In order to be notified when the tunnel is fully disconnected, register to observe the [NEVPNStatusDidChangeNotification](../nevpnstatusdidchangenotification.md) notification on the [NETunnelProviderSession](../netunnelprovidersession.md) object and examine its status property when the notification is received.

## See Also

### Controlling the tunnel connection

- [startTunnelWithOptions:andReturnError:](starttunnel%28options_%29.md): Start the process of connecting the tunnel.
