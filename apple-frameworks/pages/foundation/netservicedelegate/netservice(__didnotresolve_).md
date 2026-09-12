> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate/netservice(_:didnotresolve:)](https://developer.apple.com/documentation/foundation/netservicedelegate/netservice(_:didnotresolve:))

# netService(\_:didNotResolve:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that an error occurred during resolution of a given service.

## Declaration

```swift
optional func netService(_ sender: NetService, didNotResolve errorDict: [String : NSNumber])
```

## Parameters

- `sender`: The service that did not resolve.
- `errorDict`: A dictionary containing information about the problem. The dictionary contains the keys [errorCode](../netservice/errorcode-swift.type.property.md) and [errorDomain](../netservice/errordomain.md).

<a id="Discussion"></a>

## Discussion

Clients may try to resolve again upon receiving this error. For example, a DNS rotary may yield different IP addresses on different resolution requests. A common error condition is that no addresses were resolved during the timeout period specified in [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md).

## See Also

### Using Network Services

- [netServiceWillPublish(\_:)](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService(\_:didNotPublish:)](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve(\_:)](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netServiceDidResolveAddress(\_:)](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService(\_:didUpdateTXTRecord:)](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop(\_:)](netservicedidstop%28__%29.md): Informs the delegate that a [publish()](../netservice/publish%28%29.md) or [resolve(withTimeout:)](../netservice/resolve%28withtimeout_%29.md) request was stopped.

# netService:didNotResolve: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate that an error occurred during resolution of a given service.

## Declaration

```objectivec
- (void) netService:(NSNetService *) sender didNotResolve:(NSDictionary<NSString *,NSNumber *> *) errorDict;
```

## Parameters

- `sender`: The service that did not resolve.
- `errorDict`: A dictionary containing information about the problem. The dictionary contains the keys [NSNetServicesErrorCode](../netservice/errorcode-swift.type.property.md) and [NSNetServicesErrorDomain](../netservice/errordomain.md).

<a id="Discussion"></a>

## Discussion

Clients may try to resolve again upon receiving this error. For example, a DNS rotary may yield different IP addresses on different resolution requests. A common error condition is that no addresses were resolved during the timeout period specified in [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md).

## See Also

### Using Network Services

- [netServiceWillPublish:](netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService:didNotPublish:](netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve:](netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netServiceDidResolveAddress:](netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService:didUpdateTXTRecordData:](netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop:](netservicedidstop%28__%29.md): Informs the delegate that a [publish](../netservice/publish%28%29.md) or [resolveWithTimeout:](../netservice/resolve%28withtimeout_%29.md) request was stopped.
