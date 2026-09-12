> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/canceltunnelwitherror(_:)](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/canceltunnelwitherror(_:))

# cancelTunnelWithError(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Stop the network tunnel from the Packet Tunnel Provider.

## Declaration

```swift
func cancelTunnelWithError(_ error: (any Error)?)
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object containing the error that caused the tunnel to be stopped. The domain and code of this NSError object is defined by the caller.

<a id="Discussion"></a>

## Discussion

The Packet Tunnel Provider should call this method when an unrecoverable error occurs, such as the tunnel server going down or the VPN authentication session expiring.

## See Also

### Managing the tunnel life cycle

- [startTunnel(options:completionHandler:)](starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [stopTunnel(with:completionHandler:)](stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.

# cancelTunnelWithError: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Stop the network tunnel from the Packet Tunnel Provider.

## Declaration

```objectivec
- (void) cancelTunnelWithError:(NSError *) error;
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object containing the error that caused the tunnel to be stopped. The domain and code of this NSError object is defined by the caller.

<a id="Discussion"></a>

## Discussion

The Packet Tunnel Provider should call this method when an unrecoverable error occurs, such as the tunnel server going down or the VPN authentication session expiring.

## See Also

### Managing the tunnel life cycle

- [startTunnelWithOptions:completionHandler:](starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [stopTunnelWithReason:completionHandler:](stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.
