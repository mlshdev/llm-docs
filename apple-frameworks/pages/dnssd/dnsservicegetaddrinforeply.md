> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicegetaddrinforeply](https://developer.apple.com/documentation/dnssd/dnsservicegetaddrinforeply)

# DNSServiceGetAddrInfoReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).

## Declaration

```swift
typealias DNSServiceGetAddrInfoReply = (DNSServiceRef?, DNSServiceFlags, UInt32, DNSServiceErrorType, UnsafePointer<CChar>?, UnsafePointer<sockaddr>?, UInt32, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- `flags`: Possible values are [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md) and kDNSServiceFlagsAdd.
- `interfaceIndex`: The interface to which the answers pertain.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred. Other parameters are undefined if errorCode is nonzero.
- `hostname`: The fully qualified domain name of the host to be queried for.
- `address`: IPv4 or IPv6 address.
- `ttl`: If the client wishes to cache the result for performance reasons, the TTL indicates how long the client may legitimately hold onto this result, in seconds. After the TTL expires, the client should consider the result no longer valid, and if it requires this data again, it should be re-fetched with a new query. Of course, this only applies to clients that cancel the asynchronous operation when they get a result. Clients that leave the asynchronous operation running can safely assume that the data remains valid until they get another callback telling them otherwise.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

# DNSServiceGetAddrInfoReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, unsigned int, unsigned int, int, const char *, const struct sockaddr *, unsigned int, void *) DNSServiceGetAddrInfoReply;
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- `flags`: Possible values are [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md) and kDNSServiceFlagsAdd.
- `interfaceIndex`: The interface to which the answers pertain.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred. Other parameters are undefined if errorCode is nonzero.
- `hostname`: The fully qualified domain name of the host to be queried for.
- `address`: IPv4 or IPv6 address.
- `ttl`: If the client wishes to cache the result for performance reasons, the TTL indicates how long the client may legitimately hold onto this result, in seconds. After the TTL expires, the client should consider the result no longer valid, and if it requires this data again, it should be re-fetched with a new query. Of course, this only applies to clients that cancel the asynchronous operation when they get a result. Clients that leave the asynchronous operation running can safely assume that the data remains valid until they get another callback telling them otherwise.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).
