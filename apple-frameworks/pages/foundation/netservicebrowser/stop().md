> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser/stop()](https://developer.apple.com/documentation/foundation/netservicebrowser/stop())

# stop() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Halts a currently running search or resolution.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
func stop()
```

<a id="Discussion"></a>

## Discussion

This method sends a [netServiceBrowserDidStopSearch(\_:)](../netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md) message to the delegate and causes the browser to discard any pending search results.

## See Also

### Related Documentation

- [netServiceBrowserDidStopSearch(\_:)](../netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

### Using Network Service Browsers

- [searchForBrowsableDomains()](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains()](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServices(ofType:inDomain:)](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.

# stop (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Halts a currently running search or resolution.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
- (void) stop;
```

<a id="Discussion"></a>

## Discussion

This method sends a [netServiceBrowserDidStopSearch:](../netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md) message to the delegate and causes the browser to discard any pending search results.

## See Also

### Related Documentation

- [netServiceBrowserDidStopSearch:](../netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

### Using Network Service Browsers

- [searchForBrowsableDomains](searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains](searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServicesOfType:inDomain:](searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
