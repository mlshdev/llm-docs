> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/publish(options:)](https://developer.apple.com/documentation/foundation/netservice/publish(options:))

# publish(options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Attempts to advertise the receiver on the network, with the given options.

## Declaration

```swift
func publish(options: NetService.Options = [])
```

## Parameters

- `options`: Options for the receiver. The supported options are described in [NetService.Options](options.md).

<a id="Discussion"></a>

## Discussion

This method returns immediately, with success or failure indicated by the callbacks to the delegate.

## See Also

### Using Network Services

- [publish()](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [resolve()](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolve(withTimeout:)](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring()](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring()](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

# publishWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Attempts to advertise the receiver on the network, with the given options.

## Declaration

```objectivec
- (void) publishWithOptions:(NSNetServiceOptions) options;
```

## Parameters

- `options`: Options for the receiver. The supported options are described in [NSNetServiceOptions](options.md).

<a id="Discussion"></a>

## Discussion

This method returns immediately, with success or failure indicated by the callbacks to the delegate.

## See Also

### Using Network Services

- [publish](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [resolve](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolveWithTimeout:](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.
