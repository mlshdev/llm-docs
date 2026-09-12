> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservicewillpublish(_:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservicewillpublish(_:))

# netServiceWillPublish(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the network is ready to publish the service.

## Declaration

```swift
optional func netServiceWillPublish(_ sender: NetService)
```

## Parameters

- `sender`: The service that is ready to publish.

<a id="Discussion"></a>

## Discussion

Publication of the service proceeds asynchronously and may still generate a call to the delegate’s [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md) method if an error occurs.

## See Also

### Related Documentation

- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)
- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)

### Using Network Services

- [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve(\_:)](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService(\_:didNotResolve:)](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress(\_:)](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService(\_:didUpdateTXTRecord:)](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop(\_:)](netservicedidstop%28__%29.md): Informs the delegate that a [publish()](../netservice/publish%28%29.md) or [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) request was stopped.

# netServiceWillPublish: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Notifies the delegate that the network is ready to publish the service.

## Declaration

```objectivec
- (void) netServiceWillPublish:(NSNetService *) sender;
```

## Parameters

- `sender`: The service that is ready to publish.

<a id="Discussion"></a>

## Discussion

Publication of the service proceeds asynchronously and may still generate a call to the delegate’s [netService:didNotPublish:](netservice%28__didnotpublish_%29.md) method if an error occurs.

## See Also

### Related Documentation

- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)
- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)

### Using Network Services

- [netService:didNotPublish:](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve:](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService:didNotResolve:](netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress:](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService:didUpdateTXTRecordData:](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop:](netservicedidstop%28__%29.md): Informs the delegate that a [publish](../netservice/publish%28%29.md) or [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) request was stopped.
