> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservice(_:didupdatetxtrecord:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservice(_:didupdatetxtrecord:))

# netService(\_:didUpdateTXTRecord:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the TXT record for a given service has been updated.

## Declaration

```swift
optional func netService(_ sender: NetService, didUpdateTXTRecord data: Data)
```

## Parameters

- `sender`: The service whose TXT record was updated.
- `data`: The new TXT record.

## See Also

### Related Documentation

- [startMonitoring()](../netservice/startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.

### Using Network Services

- [netServiceWillPublish(\_:)](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve(\_:)](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService(\_:didNotResolve:)](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress(\_:)](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netServiceDidStop(\_:)](netservicedidstop%28__%29.md): Informs the delegate that a [publish()](../netservice/publish%28%29.md) or [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) request was stopped.

# netService:didUpdateTXTRecordData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the TXT record for a given service has been updated.

## Declaration

```objectivec
- (void) netService:(NSNetService *) sender didUpdateTXTRecordData:(NSData *) data;
```

## Parameters

- `sender`: The service whose TXT record was updated.
- `data`: The new TXT record.

## See Also

### Related Documentation

- [startMonitoring](../netservice/startmonitoring%28%29.md): Deprecated. Starts the monitoring of TXT-record updates for the receiver.

### Using Network Services

- [netServiceWillPublish:](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService:didNotPublish:](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve:](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService:didNotResolve:](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress:](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netServiceDidStop:](netservicedidstop%28__%29.md): Informs the delegate that a [publish](../netservice/publish%28%29.md) or [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) request was stopped.
