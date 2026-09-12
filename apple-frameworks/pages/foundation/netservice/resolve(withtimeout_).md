> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/resolve(withtimeout:)](https://developer.apple.com/documentation/foundation/netservice/resolve(withtimeout:))

# resolve(withTimeout:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a resolve process of a finite duration for the service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
func resolve(withTimeout timeout: TimeInterval)
```

## Parameters

- `timeout`: The maximum number of seconds to attempt a resolve. A value of 0.0 indicates no timeout and a resolve process of indefinite duration.

<a id="Discussion"></a>

## Discussion

During the resolve period, the service sends [netServiceDidResolveAddress(\_:)](../netservicedelegate/netservicedidresolveaddress%28__%29.md) to the delegate for each address it discovers that matches the service parameters. Once the timeout is hit, the service sends [netServiceDidStop(\_:)](../netservicedelegate/netservicedidstop%28__%29.md) to the delegate. If no addresses resolve during the timeout period, the service sends [netService(\_:didNotResolve:)](../netservicedelegate/netservice%28__didnotresolve_%29.md) to the delegate.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [publish()](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publish(options:)](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve()](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring()](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring()](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

# resolveWithTimeout: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a resolve process of a finite duration for the service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (void) resolveWithTimeout:(NSTimeInterval) timeout;
```

## Parameters

- `timeout`: The maximum number of seconds to attempt a resolve. A value of 0.0 indicates no timeout and a resolve process of indefinite duration.

<a id="Discussion"></a>

## Discussion

During the resolve period, the service sends [netServiceDidResolveAddress:](../netservicedelegate/netservicedidresolveaddress%28__%29.md) to the delegate for each address it discovers that matches the service parameters. Once the timeout is hit, the service sends [netServiceDidStop:](../netservicedelegate/netservicedidstop%28__%29.md) to the delegate. If no addresses resolve during the timeout period, the service sends [netService:didNotResolve:](../netservicedelegate/netservice%28__didnotresolve_%29.md) to the delegate.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [publish](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publishWithOptions:](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.
