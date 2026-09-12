> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelprovider/starttunnel(options:completionhandler:)](https://developer.apple.com/documentation/networkextension/nepackettunnelprovider/starttunnel(options:completionhandler:))

# startTunnel(options:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the network tunnel.

## Declaration

```swift
func startTunnel(options: [String : NSObject]? = nil, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startTunnel(options: [String : NSObject]? = nil) async throws
```

## Parameters

- `options`: A dictionary passed by the app that requested that the tunnel be started. If the starting app did not specify a dictionary of options then this parameter will be nil. If the tunnel was started via Connect On Demand, then this parameter will be nil.
- `completionHandler`: A block that must be executed when the tunnel is fully established, or when the tunnel cannot be started due to an error. If the tunnel was successfully established, then the error parameter must be set to nil. If an error occurred, the error parameter passed to this block must be set to a non-nil [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the network tunnel.

`NEPacketTunnelProvider` subclasses must override this method.

When the Packet Tunnel Provider executes the completionHandler block with a nil error parameter, it signals to the system that it is ready to begin handling network data. Therefore, the Packet Tunnel Provider should call [setTunnelNetworkSettings(\_:completionHandler:)](../netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) and wait for it to complete before executing the completionHandler block.

The domain and code of the [NSError](../../foundation/nserror.md) object passed to the `completionHandler` block are defined by the Packet Tunnel Provider.

## See Also

### Managing the tunnel life cycle

- [stopTunnel(with:completionHandler:)](stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.
- [cancelTunnelWithError(\_:)](canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.

# startTunnelWithOptions:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Start the network tunnel.

## Declaration

```objectivec
- (void) startTunnelWithOptions:(NSDictionary<NSString *,NSObject *> *) options completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `options`: A dictionary passed by the app that requested that the tunnel be started. If the starting app did not specify a dictionary of options then this parameter will be nil. If the tunnel was started via Connect On Demand, then this parameter will be nil.
- `completionHandler`: A block that must be executed when the tunnel is fully established, or when the tunnel cannot be started due to an error. If the tunnel was successfully established, then the error parameter must be set to nil. If an error occurred, the error parameter passed to this block must be set to a non-nil [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the network tunnel.

`NEPacketTunnelProvider` subclasses must override this method.

When the Packet Tunnel Provider executes the completionHandler block with a nil error parameter, it signals to the system that it is ready to begin handling network data. Therefore, the Packet Tunnel Provider should call [setTunnelNetworkSettings:completionHandler:](../netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) and wait for it to complete before executing the completionHandler block.

The domain and code of the [NSError](../../foundation/nserror.md) object passed to the `completionHandler` block are defined by the Packet Tunnel Provider.

## See Also

### Managing the tunnel life cycle

- [stopTunnelWithReason:completionHandler:](stoptunnel%28with_completionhandler_%29.md): Stop the network tunnel.
- [cancelTunnelWithError:](canceltunnelwitherror%28__%29.md): Stop the network tunnel from the Packet Tunnel Provider.
