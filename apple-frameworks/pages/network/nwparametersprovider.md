> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider](https://developer.apple.com/documentation/network/nwparametersprovider)

# NWParametersProvider

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Types that conform to the NWParametersProvider protocol can be used to generate an NWParameters.

## Declaration

```swift
protocol NWParametersProvider
```

## Topics

### Instance Properties

- [parameters](nwparametersprovider/parameters.md): The generated NWParameters.

### Instance Methods

- [constrainedPathsProhibited(\_:)](nwparametersprovider/constrainedpathsprohibited%28__%29.md): Prohibit using constrained paths.
- [dnssecValidationRequired(\_:)](nwparametersprovider/dnssecvalidationrequired%28__%29.md): Require DNSSEC validation when resolving an endpoint before making a connection.
- [expensivePathsProhibited(\_:)](nwparametersprovider/expensivepathsprohibited%28__%29.md): Prohibit using expensive paths.
- [expiredDNSBehavior(\_:)](nwparametersprovider/expireddnsbehavior%28__%29.md): Allow or prohibit the use of expired DNS answers during connection establishment.
- [fastOpenAllowed(\_:)](nwparametersprovider/fastopenallowed%28__%29.md): Allow fast open to be used on a connection.
- [localEndpoint(\_:)](nwparametersprovider/localendpoint%28__%29.md): Specify a specific endpoint to use as the local endpoint.
- [localEndpointReuseAllowed(\_:)](nwparametersprovider/localendpointreuseallowed%28__%29.md): Allow local endpoint reuse.
- [localOnly(\_:)](nwparametersprovider/localonly%28__%29.md): Limit inbound connections to peers attached to the local link.
- [localPort(\_:)](nwparametersprovider/localport%28__%29.md): Specify a specific port to use as the local endpoint, letting the system select the address.
- [multipathServiceType(\_:)](nwparametersprovider/multipathservicetype%28__%29.md): Set the multipath service to use for connections.
- [noProxiesPreferred(\_:)](nwparametersprovider/noproxiespreferred%28__%29.md): Prefer not using proxies when making connections.
- [peerToPeerIncluded(\_:)](nwparametersprovider/peertopeerincluded%28__%29.md): Include peer-to-peer interfaces when connecting, listening, and browsing.
- [prohibitedInterfaceTypes(\_:)](nwparametersprovider/prohibitedinterfacetypes%28__%29.md): Prohibit certain interface types from being used to connect, listen, and browse.
- [prohibitedInterfaces(\_:)](nwparametersprovider/prohibitedinterfaces%28__%29.md): Prohibit certain interfaces from being used to connect, listen, and browse.
- [requiredInterface(\_:)](nwparametersprovider/requiredinterface%28__%29.md): Require an interface when connecting, listening, and browsing.
- [requiredInterfaceType(\_:)](nwparametersprovider/requiredinterfacetype%28__%29.md): Require an interface type when connecting, listening, and browsing.
- [serviceClass(\_:)](nwparametersprovider/serviceclass%28__%29.md): Set the data service class to use for connections.
- [ultraConstrainedPathsAllowed(\_:)](nwparametersprovider/ultraconstrainedpathsallowed%28__%29.md): Allow connection to use interfaces considered ultra-constrained by the system

## Relationships

### Conforming Types

- [NWParameters](nwparameters.md)
- [NWParametersBuilder](nwparametersbuilder.md)
