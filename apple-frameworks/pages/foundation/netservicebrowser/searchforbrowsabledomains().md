> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/searchforbrowsabledomains()](https://developer.apple.com/documentation/foundation/netservicebrowser/searchforbrowsabledomains())

# searchForBrowsableDomains() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initiates a search for domains visible to the host. This method returns immediately.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func searchForBrowsableDomains()
```

<a id="Discussion"></a>

## Discussion

The delegate receives a [netServiceBrowser(\_:didFindDomain:moreComing:)](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md) message for each domain discovered.

## See Also

### Using Network Service Browsers

- [searchForRegistrationDomains()](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServices(ofType:inDomain:)](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop()](stop%28%29.md): Deprecated. Halts a currently running search or resolution.

# searchForBrowsableDomains (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initiates a search for domains visible to the host. This method returns immediately.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) searchForBrowsableDomains;
```

<a id="Discussion"></a>

## Discussion

The delegate receives a [netServiceBrowser:didFindDomain:moreComing:](../netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md) message for each domain discovered.

## See Also

### Using Network Service Browsers

- [searchForRegistrationDomains](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServicesOfType:inDomain:](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop](stop%28%29.md): Deprecated. Halts a currently running search or resolution.
