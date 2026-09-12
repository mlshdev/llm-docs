> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didfind:morecoming:)](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didfind:morecoming:))

# netServiceBrowser(\_:didFind:moreComing:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate the sender found a service.

## Declaration

```swift
optional func netServiceBrowser(_ browser: NetServiceBrowser, didFind service: NetService, moreComing: Bool)
```

## Parameters

- `browser`: Sender of this delegate message.
- `service`: Network service found by `netServiceBrowser`. The delegate can use this object to connect to and use the service.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional services. [false](https://developer.apple.com/documentation/swift/false) when there are no additional services.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of available services. It should wait until `moreServicesComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

<a id="Special-Considerations"></a>

### Special Considerations

If the delegate chooses to resolve `netService`, it should retain `netService` and set itself as that service’s delegate. The delegate should, therefore, release that service when it receives the [netServiceDidResolveAddress(\_:)](../netservicedelegate/netservicedidresolveaddress%28__%29.md) or [netService(\_:didNotResolve:)](../netservicedelegate/netservice%28__didnotresolve_%29.md) delegate messages of the  [NetService](../netservice.md) class.

## See Also

### Related Documentation

- [searchForServices(ofType:inDomain:)](../netservicebrowser/searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.

### Using Network Service Browsers

- [netServiceBrowser(\_:didFindDomain:moreComing:)](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didRemove:moreComing:)](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch(\_:)](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser(\_:didNotSearch:)](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

# netServiceBrowser:didFindService:moreComing: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate the sender found a service.

## Declaration

```objectivec
- (void) netServiceBrowser:(NSNetServiceBrowser *) browser didFindService:(NSNetService *) service moreComing:(BOOL) moreComing;
```

## Parameters

- `browser`: Sender of this delegate message.
- `service`: Network service found by `netServiceBrowser`. The delegate can use this object to connect to and use the service.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional services. [false](https://developer.apple.com/documentation/swift/false) when there are no additional services.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of available services. It should wait until `moreServicesComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

<a id="Special-Considerations"></a>

### Special Considerations

If the delegate chooses to resolve `netService`, it should retain `netService` and set itself as that service’s delegate. The delegate should, therefore, release that service when it receives the [netServiceDidResolveAddress:](../netservicedelegate/netservicedidresolveaddress%28__%29.md) or [netService:didNotResolve:](../netservicedelegate/netservice%28__didnotresolve_%29.md) delegate messages of the  [NSNetService](../netservice.md) class.

## See Also

### Related Documentation

- [searchForServicesOfType:inDomain:](../netservicebrowser/searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.

### Using Network Service Browsers

- [netServiceBrowser:didFindDomain:moreComing:](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didRemoveService:moreComing:](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch:](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser:didNotSearch:](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch:](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.
