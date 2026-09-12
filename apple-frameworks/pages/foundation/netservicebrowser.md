> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicebrowser](https://developer.apple.com/documentation/foundation/netservicebrowser)

# NetServiceBrowser (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A network service browser that finds published services on a network using multicast DNS.

> Use nw_browser_t in Network framework instead

## Declaration

```swift
class NetServiceBrowser
```

<a id="overview"></a>

## Overview

Services can range from standard services, such as HTTP and FTP, to custom services defined by other applications. You can use a network service browser in your code to obtain the list of accessible domains and then to obtain an [NetService](netservice.md) object for each discovered service. Each network service browser performs one search at a time, so if you want to perform multiple simultaneous searches, use multiple network service browsers.

A network service browser performs all searches asynchronously using the current run loop to execute the search in the background. Results from a search are returned through the associated delegate object, which your client application must provide. Searching proceeds in the background until the object receives a [stop()](netservicebrowser/stop%28%29.md) message.

To use an `NSNetServiceBrowser` object to search for services, allocate it, initialize it, and assign a delegate. (If you wish, you can also use the [schedule(in:forMode:)](netservicebrowser/schedule%28in_formode_%29.md) and [remove(from:forMode:)](netservicebrowser/remove%28from_formode_%29.md) methods to execute searches on a run loop other than the current one.) Once your object is ready, you begin by gathering the list of accessible domains using either the [searchForRegistrationDomains()](netservicebrowser/searchforregistrationdomains%28%29.md) or [searchForBrowsableDomains()](netservicebrowser/searchforbrowsabledomains%28%29.md) methods. From the list of returned domains, you can pick one and use the [searchForServices(ofType:inDomain:)](netservicebrowser/searchforservices%28oftype_indomain_%29.md) method to search for services in that domain.

The `NSNetServiceBrowser` class provides two ways to search for domains. In most cases, your client should use the [searchForRegistrationDomains()](netservicebrowser/searchforregistrationdomains%28%29.md) method to search only for local domains to which the host machine has registration authority. This is the preferred method for accessing domains as it guarantees that the host machine can connect to services in the returned domains. Access to domains outside this list may be more limited.

## Topics

### Creating Network Service Browsers

- [init()](netservicebrowser/init%28%29.md): Deprecated. Initializes an allocated [NetServiceBrowser](netservicebrowser.md) object.

### Configuring Network Service Browsers

- [delegate](netservicebrowser/delegate.md): Deprecated. The delegate object for this instance.
- [includesPeerToPeer](netservicebrowser/includespeertopeer.md): Deprecated. Whether to browse over peer-to-peer Bluetooth and Wi-Fi, if available.

### Using Network Service Browsers

- [searchForBrowsableDomains()](netservicebrowser/searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains()](netservicebrowser/searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServices(ofType:inDomain:)](netservicebrowser/searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop()](netservicebrowser/stop%28%29.md): Deprecated. Halts a currently running search or resolution.

### Managing Run Loops

- [schedule(in:forMode:)](netservicebrowser/schedule%28in_formode_%29.md): Deprecated. Adds the receiver to the specified run loop.
- [remove(from:forMode:)](netservicebrowser/remove%28from_formode_%29.md): Deprecated. Removes the receiver from the specified run loop.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Service Discovery

- [NetServiceBrowserDelegate](netservicebrowserdelegate.md): The interface a net service browser uses to inform a delegate about the state of service discovery.

# NSNetServiceBrowser (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A network service browser that finds published services on a network using multicast DNS.

> Use nw_browser_t in Network framework instead

## Declaration

```objectivec
@interface NSNetServiceBrowser : NSObject
```

<a id="overview"></a>

## Overview

Services can range from standard services, such as HTTP and FTP, to custom services defined by other applications. You can use a network service browser in your code to obtain the list of accessible domains and then to obtain an [NSNetService](netservice.md) object for each discovered service. Each network service browser performs one search at a time, so if you want to perform multiple simultaneous searches, use multiple network service browsers.

A network service browser performs all searches asynchronously using the current run loop to execute the search in the background. Results from a search are returned through the associated delegate object, which your client application must provide. Searching proceeds in the background until the object receives a [stop](netservicebrowser/stop%28%29.md) message.

To use an `NSNetServiceBrowser` object to search for services, allocate it, initialize it, and assign a delegate. (If you wish, you can also use the [scheduleInRunLoop:forMode:](netservicebrowser/schedule%28in_formode_%29.md) and [removeFromRunLoop:forMode:](netservicebrowser/remove%28from_formode_%29.md) methods to execute searches on a run loop other than the current one.) Once your object is ready, you begin by gathering the list of accessible domains using either the [searchForRegistrationDomains](netservicebrowser/searchforregistrationdomains%28%29.md) or [searchForBrowsableDomains](netservicebrowser/searchforbrowsabledomains%28%29.md) methods. From the list of returned domains, you can pick one and use the [searchForServicesOfType:inDomain:](netservicebrowser/searchforservices%28oftype_indomain_%29.md) method to search for services in that domain.

The `NSNetServiceBrowser` class provides two ways to search for domains. In most cases, your client should use the [searchForRegistrationDomains](netservicebrowser/searchforregistrationdomains%28%29.md) method to search only for local domains to which the host machine has registration authority. This is the preferred method for accessing domains as it guarantees that the host machine can connect to services in the returned domains. Access to domains outside this list may be more limited.

## Topics

### Creating Network Service Browsers

- [init](netservicebrowser/init%28%29.md): Deprecated. Initializes an allocated [NSNetServiceBrowser](netservicebrowser.md) object.

### Configuring Network Service Browsers

- [delegate](netservicebrowser/delegate.md): Deprecated. The delegate object for this instance.
- [includesPeerToPeer](netservicebrowser/includespeertopeer.md): Deprecated. Whether to browse over peer-to-peer Bluetooth and Wi-Fi, if available.

### Using Network Service Browsers

- [searchForBrowsableDomains](netservicebrowser/searchforbrowsabledomains%28%29.md): Deprecated. Initiates a search for domains visible to the host. This method returns immediately.
- [searchForRegistrationDomains](netservicebrowser/searchforregistrationdomains%28%29.md): Deprecated. Initiates a search for domains in which the host may register services.
- [searchForServicesOfType:inDomain:](netservicebrowser/searchforservices%28oftype_indomain_%29.md): Deprecated. Starts a search for services of a particular type within a specific domain.
- [stop](netservicebrowser/stop%28%29.md): Deprecated. Halts a currently running search or resolution.

### Managing Run Loops

- [scheduleInRunLoop:forMode:](netservicebrowser/schedule%28in_formode_%29.md): Deprecated. Adds the receiver to the specified run loop.
- [removeFromRunLoop:forMode:](netservicebrowser/remove%28from_formode_%29.md): Deprecated. Removes the receiver from the specified run loop.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Service Discovery

- [NSNetServiceBrowserDelegate](netservicebrowserdelegate.md): The interface a net service browser uses to inform a delegate about the state of service discovery.
