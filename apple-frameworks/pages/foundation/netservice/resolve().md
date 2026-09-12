> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/resolve()](https://developer.apple.com/documentation/foundation/netservice/resolve())

# resolve() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Starts a resolve process for the service.

> Use [resolve(withTimeout:)](resolve%28withtimeout_%29.md) instead.

## Declaration

```swift
func resolve()
```

<a id="Discussion"></a>

## Discussion

Attempts to determine at least one address for the service. This method returns immediately, with success or failure indicated by the callbacks to the delegate.

In OS X v10.4, this method calls [resolve(withTimeout:)](resolve%28withtimeout_%29.md) with a timeout value of `5`.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [publish()](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publish(options:)](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve(withTimeout:)](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring()](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring()](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

# resolve (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.4) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0)

Starts a resolve process for the service.

> Use [resolveWithTimeout:](resolve%28withtimeout_%29.md) instead.

## Declaration

```objectivec
- (void) resolve;
```

<a id="Discussion"></a>

## Discussion

Attempts to determine at least one address for the service. This method returns immediately, with success or failure indicated by the callbacks to the delegate.

In OS X v10.4, this method calls [resolveWithTimeout:](resolve%28withtimeout_%29.md) with a timeout value of `5`.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [publish](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publishWithOptions:](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolveWithTimeout:](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [port](port.md): Deprecated. The port on which the service is listening for connections.
- [startMonitoring](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.
