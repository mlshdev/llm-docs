> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservicewillresolve(_:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservicewillresolve(_:))

# netServiceWillResolve(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the network is ready to resolve the service.

## Declaration

```swift
optional func netServiceWillResolve(_ sender: NetService)
```

## Parameters

- `sender`: The service that the network is ready to resolve.

<a id="Discussion"></a>

## Discussion

Resolution of the service proceeds asynchronously and may still generate a call to the delegate’s [netService(\_:didNotResolve:)](netservice%28__didnotresolve_%29.md) method if an error occurs.

## See Also

### Using Network Services

- [netServiceWillPublish(\_:)](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netService(\_:didNotResolve:)](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress(\_:)](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService(\_:didUpdateTXTRecord:)](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop(\_:)](netservicedidstop%28__%29.md): Informs the delegate that a [publish()](../netservice/publish%28%29.md) or [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) request was stopped.

# netServiceWillResolve: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the network is ready to resolve the service.

## Declaration

```objectivec
- (void) netServiceWillResolve:(NSNetService *) sender;
```

## Parameters

- `sender`: The service that the network is ready to resolve.

<a id="Discussion"></a>

## Discussion

Resolution of the service proceeds asynchronously and may still generate a call to the delegate’s [netService:didNotResolve:](netservice%28__didnotresolve_%29.md) method if an error occurs.

## See Also

### Using Network Services

- [netServiceWillPublish:](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService:didNotPublish:](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netService:didNotResolve:](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress:](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService:didUpdateTXTRecordData:](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop:](netservicedidstop%28__%29.md): Informs the delegate that a [publish](../netservice/publish%28%29.md) or [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) request was stopped.
