> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicenatportmappingreply](https://developer.apple.com/documentation/dnssd/dnsservicenatportmappingreply)

# DNSServiceNATPortMappingReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).

## Declaration

```swift
typealias DNSServiceNATPortMappingReply = (DNSServiceRef?, DNSServiceFlags, UInt32, DNSServiceErrorType, UInt32, DNSServiceProtocol, UInt16, UInt16, UInt32, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceNATPortMappingCreate(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicenatportmappingcreate%28__________________%29.md).
- `flags`: Currently unused, reserved for future use.
- `interfaceIndex`: The interface through which the NAT gateway is reached.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Will be kDNSServiceErr_DoubleNAT when the NAT gateway is itself behind one or more layers of NAT, in which case the other parameters have the defined values. For other failures, will indicate the failure that occurred, and the other parameters are undefined.
- `externalAddress`: Four byte IPv4 address in network byte order.
- `protocol`: Will be kDNSServiceProtocol_UDP or kDNSServiceProtocol_TCP or both.
- `internalPort`: The port on the local machine that was mapped.
- `externalPort`: The actual external port in the NAT gateway that was mapped. This is likely to be different than the requested external port.
- `ttl`: The lifetime of the NAT port mapping created on the gateway. This controls how quickly stale mappings will be garbage-collected if the client machine crashes, suffers a power failure, is disconnected from the network, or suffers some other unfortunate demise which causes it to vanish without explicitly removing its NAT port mapping. It’s possible that the ttl value will differ from the requested ttl value.
- `context`: The context pointer that was passed to the callout.

<a id="Discussion"></a>

## Discussion

The NAT should support either the NAT-PMP or the UPnP IGD protocol for this API to create a successful mapping.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

# DNSServiceNATPortMappingReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, unsigned int, unsigned int, int, unsigned int, unsigned int, unsigned short, unsigned short, unsigned int, void *) DNSServiceNATPortMappingReply;
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceNATPortMappingCreate](dnsservicenatportmappingcreate%28__________________%29.md).
- `flags`: Currently unused, reserved for future use.
- `interfaceIndex`: The interface through which the NAT gateway is reached.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success. Will be kDNSServiceErr_DoubleNAT when the NAT gateway is itself behind one or more layers of NAT, in which case the other parameters have the defined values. For other failures, will indicate the failure that occurred, and the other parameters are undefined.
- `externalAddress`: Four byte IPv4 address in network byte order.
- `protocol`: Will be kDNSServiceProtocol_UDP or kDNSServiceProtocol_TCP or both.
- `internalPort`: The port on the local machine that was mapped.
- `externalPort`: The actual external port in the NAT gateway that was mapped. This is likely to be different than the requested external port.
- `ttl`: The lifetime of the NAT port mapping created on the gateway. This controls how quickly stale mappings will be garbage-collected if the client machine crashes, suffers a power failure, is disconnected from the network, or suffers some other unfortunate demise which causes it to vanish without explicitly removing its NAT port mapping. It’s possible that the ttl value will differ from the requested ttl value.
- `context`: The context pointer that was passed to the callout.

<a id="Discussion"></a>

## Discussion

The NAT should support either the NAT-PMP or the UPnP IGD protocol for this API to create a successful mapping.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).
