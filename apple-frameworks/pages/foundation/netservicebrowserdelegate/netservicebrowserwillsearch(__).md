> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate/netservicebrowserwillsearch(_:)](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate/netservicebrowserwillsearch(_:))

# netServiceBrowserWillSearch(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a search is commencing.

## Declaration

```swift
optional func netServiceBrowserWillSearch(_ browser: NetServiceBrowser)
```

## Parameters

- `browser`: Sender of this delegate message.

<a id="Discussion"></a>

## Discussion

This message is sent to the delegate only if the underlying network layer is ready to begin a search. The delegate can use this notification to prepare its data structures to receive data.

## See Also

### Using Network Service Browsers

- [netServiceBrowser(\_:didFindDomain:moreComing:)](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didFind:moreComing:)](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser(\_:didRemove:moreComing:)](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowser(\_:didNotSearch:)](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

# netServiceBrowserWillSearch: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a search is commencing.

## Declaration

```objectivec
- (void) netServiceBrowserWillSearch:(NSNetServiceBrowser *) browser;
```

## Parameters

- `browser`: Sender of this delegate message.

<a id="Discussion"></a>

## Discussion

This message is sent to the delegate only if the underlying network layer is ready to begin a search. The delegate can use this notification to prepare its data structures to receive data.

## See Also

### Using Network Service Browsers

- [netServiceBrowser:didFindDomain:moreComing:](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didFindService:moreComing:](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser:didRemoveService:moreComing:](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowser:didNotSearch:](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch:](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.
