> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/searchforservices(oftype:indomain:)](https://developer.apple.com/documentation/foundation/netservicebrowser/searchforservices(oftype:indomain:))

# searchForServices(ofType:inDomain:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a search for services of a particular type within a specific domain.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func searchForServices(ofType type: String, inDomain domainString: String)
```

## Parameters

- `type`: Type of the service to search for.
- `domainString`: Domain name in which to perform the search.

<a id="Discussion"></a>

## Discussion

This method returns immediately, sending a [netServiceBrowserWillSearch(\_:)](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md) message to the delegate if the network was ready to initiate the search.The delegate receives subsequent [netServiceBrowser(\_:didFind:moreComing:)](../netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md) messages for each service discovered.

The `serviceType` argument must contain both the service type and transport layer information. To ensure that the mDNS responder searches for services, rather than hosts, make sure to prefix both the service name and transport layer name with an underscore character (”\_”). For example, to search for an HTTP service on TCP, you would use the type string “`_http._tcp.`”. Note that the period character at the end is required.

The `domainName` argument can be an explicit domain name, the generic local domain `@"local."` (note trailing period, which indicates an absolute name), or the empty string (`@""`), which indicates the default registration domains. Usually, you pass in an empty string. Note that it is acceptable to use an empty string for the `domainName` argument when publishing or browsing a service, but do not rely on this for resolution.

## See Also

### Related Documentation

- [netServiceBrowser(\_:didFind:moreComing:)](../netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowserWillSearch(\_:)](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.

### Using Network Service Browsers

- [searchForBrowsableDomains()](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains()](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running search or resolution.

# searchForServicesOfType:inDomain: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a search for services of a particular type within a specific domain.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) searchForServicesOfType:(NSString *) type inDomain:(NSString *) domainString;
```

## Parameters

- `type`: Type of the service to search for.
- `domainString`: Domain name in which to perform the search.

<a id="Discussion"></a>

## Discussion

This method returns immediately, sending a [netServiceBrowserWillSearch:](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md) message to the delegate if the network was ready to initiate the search.The delegate receives subsequent [netServiceBrowser:didFindService:moreComing:](../netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md) messages for each service discovered.

The `serviceType` argument must contain both the service type and transport layer information. To ensure that the mDNS responder searches for services, rather than hosts, make sure to prefix both the service name and transport layer name with an underscore character (”\_”). For example, to search for an HTTP service on TCP, you would use the type string “`_http._tcp.`”. Note that the period character at the end is required.

The `domainName` argument can be an explicit domain name, the generic local domain `@"local."` (note trailing period, which indicates an absolute name), or the empty string (`@""`), which indicates the default registration domains. Usually, you pass in an empty string. Note that it is acceptable to use an empty string for the `domainName` argument when publishing or browsing a service, but do not rely on this for resolution.

## See Also

### Related Documentation

- [netServiceBrowser:didFindService:moreComing:](../netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowserWillSearch:](../netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.

### Using Network Service Browsers

- [searchForBrowsableDomains](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [stop](stop%28%29.md): Deprecated. Halts a currently running search or resolution.
