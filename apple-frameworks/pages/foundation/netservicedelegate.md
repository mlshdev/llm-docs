> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservicedelegate](https://developer.apple.com/documentation/foundation/netservicedelegate)

# NetServiceDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

The interface a net service uses to inform its delegate about the state of the service it offers.

## Declaration

```swift
protocol NetServiceDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [NetServiceDelegate](netservicedelegate.md) protocol defines the optional methods implemented by delegates of [NetService](netservice.md) objects.

## Topics

### Using Network Services

- [netServiceWillPublish(\_:)](netservicedelegate/netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService(\_:didNotPublish:)](netservicedelegate/netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish(\_:)](netservicedelegate/netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve(\_:)](netservicedelegate/netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService(\_:didNotResolve:)](netservicedelegate/netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress(\_:)](netservicedelegate/netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService(\_:didUpdateTXTRecord:)](netservicedelegate/netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop(\_:)](netservicedelegate/netservicedidstop%28__%29.md): Informs the delegate that a [publish()](netservice/publish%28%29.md) or [resolve(withTimeout:)](netservice/resolve%28withtimeout_%29.md) request was stopped.

### Accepting Connections

- [netService(\_:didAcceptConnectionWith:outputStream:)](netservicedelegate/netservice%28__didacceptconnectionwith_outputstream_%29.md): Called when a client connects to a service managed by Bonjour.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Local Network Services

- [NetService](netservice.md): Deprecated. A network service that broadcasts its availability using multicast DNS.
- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.

# NSNetServiceDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

The interface a net service uses to inform its delegate about the state of the service it offers.

## Declaration

```objectivec
@protocol NSNetServiceDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [NSNetServiceDelegate](netservicedelegate.md) protocol defines the optional methods implemented by delegates of [NSNetService](netservice.md) objects.

## Topics

### Using Network Services

- [netServiceWillPublish:](netservicedelegate/netservicewillpublish%28__%29.md): Notifies the delegate that the network is ready to publish the service.
- [netService:didNotPublish:](netservicedelegate/netservice%28__didnotpublish_%29.md): Notifies the delegate that a service could not be published.
- [netServiceDidPublish:](netservicedelegate/netservicedidpublish%28__%29.md): Notifies the delegate that a service was successfully published.
- [netServiceWillResolve:](netservicedelegate/netservicewillresolve%28__%29.md): Notifies the delegate that the network is ready to resolve the service.
- [netService:didNotResolve:](netservicedelegate/netservice%28__didnotresolve_%29.md): Informs the delegate that an error occurred during resolution of a given service.
- [netServiceDidResolveAddress:](netservicedelegate/netservicedidresolveaddress%28__%29.md): Informs the delegate that the address for a given service was resolved.
- [netService:didUpdateTXTRecordData:](netservicedelegate/netservice%28__didupdatetxtrecord_%29.md): Notifies the delegate that the TXT record for a given service has been updated.
- [netServiceDidStop:](netservicedelegate/netservicedidstop%28__%29.md): Informs the delegate that a [publish](netservice/publish%28%29.md) or [resolveWithTimeout:](netservice/resolve%28withtimeout_%29.md) request was stopped.

### Accepting Connections

- [netService:didAcceptConnectionWithInputStream:outputStream:](netservicedelegate/netservice%28__didacceptconnectionwith_outputstream_%29.md): Called when a client connects to a service managed by Bonjour.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Local Network Services

- [NSNetService](netservice.md): Deprecated. A network service that broadcasts its availability using multicast DNS.
- [NSBonjourServices](../bundleresources/information-property-list/nsbonjourservices.md): Bonjour service types browsed by the app.
- [NSLocalNetworkUsageDescription](../bundleresources/information-property-list/nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
