> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didnotsearch:)](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didnotsearch:))

# netServiceBrowser(\_:didNotSearch:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a search was not successful.

## Declaration

```swift
optional func netServiceBrowser(_ browser: NetServiceBrowser, didNotSearch errorDict: [String : NSNumber])
```

## Parameters

- `browser`: Sender of this delegate message.
- `errorDict`: Dictionary with the reasons the search was unsuccessful. Use the dictionary keys [errorCode](../netservice/errorcode-swift.type.property.md) and [errorDomain](../netservice/errordomain.md) to retrieve the error information from the dictionary.

## See Also

### Using Network Service Browsers

- [netServiceBrowser(\_:didFindDomain:moreComing:)](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didFind:moreComing:)](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser(\_:didRemove:moreComing:)](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch(\_:)](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

# netServiceBrowser:didNotSearch: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate that a search was not successful.

## Declaration

```objectivec
- (void) netServiceBrowser:(NSNetServiceBrowser *) browser didNotSearch:(NSDictionary<NSString *,NSNumber *> *) errorDict;
```

## Parameters

- `browser`: Sender of this delegate message.
- `errorDict`: Dictionary with the reasons the search was unsuccessful. Use the dictionary keys [NSNetServicesErrorCode](../netservice/errorcode-swift.type.property.md) and [NSNetServicesErrorDomain](../netservice/errordomain.md) to retrieve the error information from the dictionary.

## See Also

### Using Network Service Browsers

- [netServiceBrowser:didFindDomain:moreComing:](netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didFindService:moreComing:](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser:didRemoveService:moreComing:](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch:](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowserDidStopSearch:](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.
