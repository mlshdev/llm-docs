> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/port](https://developer.apple.com/documentation/foundation/netservice/port)

# port (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The port on which the service is listening for connections.

## Declaration

```swift
var port: Int { get }
```

<a id="Discussion"></a>

## Discussion

If the object was initialized by calling [init(domain:type:name:port:)](init%28domain_type_name_port_%29.md) (whether by your code or by a browser object), then the value was set when the object was first initialized.

If the object was initialized by calling [init(domain:type:name:)](init%28domain_type_name_%29.md), the value of this property is not valid (`-1`) until after the service has successfully been resolved (when `addresses` is non-`nil`).

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`port`) has been available since this class was first introduced.

## See Also

### Using Network Services

- [publish()](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publish(options:)](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve()](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolve(withTimeout:)](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [startMonitoring()](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring()](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.

# port (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The port on which the service is listening for connections.

## Declaration

```objectivec
@property (readonly) NSInteger port;
```

<a id="Discussion"></a>

## Discussion

If the object was initialized by calling [initWithDomain:type:name:port:](init%28domain_type_name_port_%29.md) (whether by your code or by a browser object), then the value was set when the object was first initialized.

If the object was initialized by calling [initWithDomain:type:name:](init%28domain_type_name_%29.md), the value of this property is not valid (`-1`) until after the service has successfully been resolved (when `addresses` is non-`nil`).

> **Backward Compatibility Note**

>  This became a property in OS X v10.9 and iOS 7, but the underlying getter method (`port`) has been available since this class was first introduced.

## See Also

### Using Network Services

- [publish](publish%28%29.md): Deprecated. Attempts to advertise the receiver’s on the network.
- [publishWithOptions:](publish%28options_%29.md): Deprecated. Attempts to advertise the receiver on the network, with the given options.
- [resolve](resolve%28%29.md): Deprecated. Starts a resolve process for the service.
- [resolveWithTimeout:](resolve%28withtimeout_%29.md): Deprecated. Starts a resolve process of a finite duration for the service.
- [startMonitoring](startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.
- [stop](stop%28%29.md): Deprecated. Halts a currently running attempt to publish or resolve a service.
- [stopMonitoring](stopmonitoring%28%29.md): Deprecated. Stops the monitoring of TXT-record updates for the receiver.
