> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didremove:morecoming:)](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didremove:morecoming:))

# netServiceBrowser(\_:didRemove:moreComing:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate a service has disappeared or has become unavailable.

## Declaration

```swift
optional func netServiceBrowser(_ browser: NetServiceBrowser, didRemove service: NetService, moreComing: Bool)
```

## Parameters

- `browser`: Sender of this delegate message.
- `service`: Network service that has become unavailable.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional services. [false](https://developer.apple.com/documentation/swift/false) when there are no additional services.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of unavailable services. It should wait until `moreServicesComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

## See Also

### Using Network Service Browsers

- [netServiceBrowser(\_:didFindDomain:moreComing:)](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didFind:moreComing:)](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowserWillSearch(\_:)](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser(\_:didNotSearch:)](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

# netServiceBrowser:didRemoveService:moreComing: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate a service has disappeared or has become unavailable.

## Declaration

```objectivec
- (void) netServiceBrowser:(NSNetServiceBrowser *) browser didRemoveService:(NSNetService *) service moreComing:(BOOL) moreComing;
```

## Parameters

- `browser`: Sender of this delegate message.
- `service`: Network service that has become unavailable.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional services. [false](https://developer.apple.com/documentation/swift/false) when there are no additional services.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of unavailable services. It should wait until `moreServicesComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

## See Also

### Using Network Service Browsers

- [netServiceBrowser:didFindDomain:moreComing:](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didFindService:moreComing:](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowserWillSearch:](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser:didNotSearch:](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch:](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.
