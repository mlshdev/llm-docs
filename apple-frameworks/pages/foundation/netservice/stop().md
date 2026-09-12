> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/stop()](https://developer.apple.com/documentation/foundation/netservice/stop())

# stop() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Halts a currently running attempt to publish or resolve a service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

The delegate will receive [netServiceDidStop(\_:)](../netservicedelegate/netservicedidstop%28__%29.md) after the service stops.

It is safe to remove all strong references to the service immediately after calling [stop()](stop%28%29.md).

## See Also

### Using Network Services

- [publish()](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publish(options:)](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve()](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolve(withTimeout:)](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring()](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stopMonitoring()](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

# stop (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Halts a currently running attempt to publish or resolve a service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

The delegate will receive [netServiceDidStop:](../netservicedelegate/netservicedidstop%28__%29.md) after the service stops.

It is safe to remove all strong references to the service immediately after calling [stop](stop%28%29.md).

## See Also

### Using Network Services

- [publish](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publishWithOptions:](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolveWithTimeout:](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stopMonitoring](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.
