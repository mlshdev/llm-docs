> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didfinddomain:morecoming:)](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate/netservicebrowser(_:didfinddomain:morecoming:))

# netServiceBrowser(\_:didFindDomain:moreComing:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate the sender found a domain.

## Declaration

```swift
optional func netServiceBrowser(_ browser: NetServiceBrowser, didFindDomain domainString: String, moreComing: Bool)
```

## Parameters

- `browser`: Sender of this delegate message.
- `domainString`: Name of the domain found by `netServiceBrowser`.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional domains. [false](https://developer.apple.com/documentation/swift/false) when there are no additional domains.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of available domains. It should wait until `moreDomainsComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

## See Also

### Related Documentation

- [searchForBrowsableDomains()](../netservicebrowser/searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)
- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)
- [searchForRegistrationDomains()](../netservicebrowser/searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.

### Using Network Service Browsers

- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didFind:moreComing:)](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser(\_:didRemove:moreComing:)](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch(\_:)](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser(\_:didNotSearch:)](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

# netServiceBrowser:didFindDomain:moreComing: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate the sender found a domain.

## Declaration

```objectivec
- (void) netServiceBrowser:(NSNetServiceBrowser *) browser didFindDomain:(NSString *) domainString moreComing:(BOOL) moreComing;
```

## Parameters

- `browser`: Sender of this delegate message.
- `domainString`: Name of the domain found by `netServiceBrowser`.
- `moreComing`: [true](https://developer.apple.com/documentation/swift/true) when `netServiceBrowser` is waiting for additional domains. [false](https://developer.apple.com/documentation/swift/false) when there are no additional domains.

<a id="Discussion"></a>

## Discussion

The delegate uses this message to compile a list of available domains. It should wait until `moreDomainsComing` is [false](https://developer.apple.com/documentation/swift/false) to do a bulk update of user interface elements.

## See Also

### Related Documentation

- [searchForBrowsableDomains](../netservicebrowser/searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [Bonjour Overview](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Introduction.html#//apple_ref/doc/uid/10000119i)
- [NSNetServices and CFNetServices Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/NSNetServiceProgGuide/Introduction.html#//apple_ref/doc/uid/TP40002736)
- [searchForRegistrationDomains](../netservicebrowser/searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.

### Using Network Service Browsers

- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didFindService:moreComing:](netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser:didRemoveService:moreComing:](netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch:](netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser:didNotSearch:](netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch:](netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.
