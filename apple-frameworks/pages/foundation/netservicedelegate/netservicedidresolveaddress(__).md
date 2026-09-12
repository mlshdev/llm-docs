> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservicedidresolveaddress(_:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservicedidresolveaddress(_:))

# netServiceDidResolveAddress(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that the address for a given service was resolved.

## Declaration

```swift
optional func netServiceDidResolveAddress(_ sender: NetService)
```

## Parameters

- `sender`: The service that was resolved.

<a id="Discussion"></a>

## Discussion

The delegate can use the [addresses](../netservice/addresses.md) method to retrieve the service’s address. If the delegate needs only one address, it can stop the resolution process using [stop()](../netservice/stop%28%29.md). Otherwise, the resolution will continue until the timeout specified in [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) is reached.

## See Also

### Related Documentation

- [addresses](../netservice/addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [netServiceWillPublish(\_:)](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve(\_:)](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService(\_:didNotResolve:)](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netService(\_:didUpdateTXTRecord:)](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop(\_:)](netservicedidstop%28__%29.md): Informs the delegate that a [publish()](../netservice/publish%28%29.md) or [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) request was stopped.

# netServiceDidResolveAddress: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that the address for a given service was resolved.

## Declaration

```objectivec
- (void) netServiceDidResolveAddress:(NSNetService *) sender;
```

## Parameters

- `sender`: The service that was resolved.

<a id="Discussion"></a>

## Discussion

The delegate can use the [addresses](../netservice/addresses.md) method to retrieve the service’s address. If the delegate needs only one address, it can stop the resolution process using [stop](../netservice/stop%28%29.md). Otherwise, the resolution will continue until the timeout specified in [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) is reached.

## See Also

### Related Documentation

- [addresses](../netservice/addresses.md): Deprecated. A read-only array containing `NSData` objects, each of which contains a socket address for the service.

### Using Network Services

- [netServiceWillPublish:](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService:didNotPublish:](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve:](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService:didNotResolve:](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netService:didUpdateTXTRecordData:](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop:](netservicedidstop%28__%29.md): Informs the delegate that a [publish](../netservice/publish%28%29.md) or [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) request was stopped.
