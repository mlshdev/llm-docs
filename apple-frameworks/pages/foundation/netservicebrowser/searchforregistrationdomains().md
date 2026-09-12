> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/searchforregistrationdomains()](https://developer.apple.com/documentation/foundation/netservicebrowser/searchforregistrationdomains())

# searchForRegistrationDomains() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initiates a search for domains in which the host may register services.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func searchForRegistrationDomains()
```

<a id="Discussion"></a>

## Discussion

This method returns immediately, sending a [netServiceBrowserWillSearch(\_:)](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md) message to the delegate if the network was ready to initiate the search. The delegate receives a subsequent [netServiceBrowser(\_:didFindDomain:moreComing:)](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md) message for each domain discovered.

Most network service browser clients do not have to use this method—it is sufficient to publish a service with the empty string, which registers it in any available registration domains automatically.

## See Also

### Related Documentation

- [netServiceBrowserWillSearch(\_:)](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser(\_:didFindDomain:moreComing:)](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.

### Using Network Service Browsers

- [searchForBrowsableDomains()](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForServices(ofType:inDomain:)](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running search or resolution.

# searchForRegistrationDomains (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initiates a search for domains in which the host may register services.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) searchForRegistrationDomains;
```

<a id="Discussion"></a>

## Discussion

This method returns immediately, sending a [netServiceBrowserWillSearch:](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md) message to the delegate if the network was ready to initiate the search. The delegate receives a subsequent [netServiceBrowser:didFindDomain:moreComing:](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md) message for each domain discovered.

Most network service browser clients do not have to use this method—it is sufficient to publish a service with the empty string, which registers it in any available registration domains automatically.

## See Also

### Related Documentation

- [netServiceBrowserWillSearch:](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser:didFindDomain:moreComing:](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.

### Using Network Service Browsers

- [searchForBrowsableDomains](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForServicesOfType:inDomain:](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop](stop%28%29.md): Deprecated. Halts a currently running search or resolution.
