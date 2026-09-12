> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowserdelegate](https://developer.apple.com/documentation/foundation/netservicebrowserdelegate)

# NetServiceBrowserDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

The interface a net service browser uses to inform a delegate about the state of service discovery.

## Declaration

```swift
protocol NetServiceBrowserDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates of [NetServiceBrowser](netservicebrowser.md) instances optionally implement these methods.

## Topics

### Using Network Service Browsers

- [netServiceBrowser(\_:didFindDomain:moreComing:)](netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser(\_:didRemoveDomain:moreComing:)](netservicebrowserdelegate/netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser(\_:didFind:moreComing:)](netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser(\_:didRemove:moreComing:)](netservicebrowserdelegate/netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch(\_:)](netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser(\_:didNotSearch:)](netservicebrowserdelegate/netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch(\_:)](netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Service Discovery

- [NetServiceBrowser](netservicebrowser.md): Deprecated. A network service browser that finds published services on a network using multicast DNS.

# NSNetServiceBrowserDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

The interface a net service browser uses to inform a delegate about the state of service discovery.

## Declaration

```objectivec
@protocol NSNetServiceBrowserDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates of [NSNetServiceBrowser](netservicebrowser.md) instances optionally implement these methods.

## Topics

### Using Network Service Browsers

- [netServiceBrowser:didFindDomain:moreComing:](netservicebrowserdelegate/netservicebrowser%28__didfinddomain_morecoming_%29.md): Tells the delegate the sender found a domain.
- [netServiceBrowser:didRemoveDomain:moreComing:](netservicebrowserdelegate/netservicebrowser%28__didremovedomain_morecoming_%29.md): Tells the delegate the a domain has disappeared or has become unavailable.
- [netServiceBrowser:didFindService:moreComing:](netservicebrowserdelegate/netservicebrowser%28__didfind_morecoming_%29.md): Tells the delegate the sender found a service.
- [netServiceBrowser:didRemoveService:moreComing:](netservicebrowserdelegate/netservicebrowser%28__didremove_morecoming_%29.md): Tells the delegate a service has disappeared or has become unavailable.
- [netServiceBrowserWillSearch:](netservicebrowserdelegate/netservicebrowserwillsearch%28__%29.md): Tells the delegate that a search is commencing.
- [netServiceBrowser:didNotSearch:](netservicebrowserdelegate/netservicebrowser%28__didnotsearch_%29.md): Tells the delegate that a search was not successful.
- [netServiceBrowserDidStopSearch:](netservicebrowserdelegate/netservicebrowserdidstopsearch%28__%29.md): Tells the delegate that a search was stopped.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Service Discovery

- [NSNetServiceBrowser](netservicebrowser.md): Deprecated. A network service browser that finds published services on a network using multicast DNS.
