> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/stoptunnel(with:completionhandler:)](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/stoptunnel(with:completionhandler:))

# stopTunnel(with:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Stop the network tunnel.

## Declaration

```swift
func stopTunnel(with reason: NEProviderStopReason, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func stopTunnel(with reason: NEProviderStopReason) async
```

## Parameters

- `reason`: An `NEProviderStopReason` code indicating why the tunnel is being stopped. Possible codes are listed in [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the tunnel is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the network tunnel.

NEPacketTunnelProvider subclasses must override this method.

Do not use this method to stop the tunnel from the Packet Tunnel Provider. Use `cancelTunnelWithError`: instead.

## See Also

### Managing the tunnel life cycle

- [startTunnel(options:completionHandler:)](starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [cancelTunnelWithError(\_:)](canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.

# stopTunnelWithReason:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Stop the network tunnel.

## Declaration

```objectivec
- (void) stopTunnelWithReason:(NEProviderStopReason) reason completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `reason`: An `NEProviderStopReason` code indicating why the tunnel is being stopped. Possible codes are listed in [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the tunnel is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the network tunnel.

NEPacketTunnelProvider subclasses must override this method.

Do not use this method to stop the tunnel from the Packet Tunnel Provider. Use `cancelTunnelWithError`: instead.

## See Also

### Managing the tunnel life cycle

- [startTunnelWithOptions:completionHandler:](starttunnel%28options_completionhandler_%29.md): Start the network tunnel.
- [cancelTunnelWithError:](canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.
