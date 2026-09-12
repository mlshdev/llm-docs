> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicequeryrecordreply](https://developer.apple.com/documentation/dnssd/dnsservicequeryrecordreply)

# DNSServiceQueryRecordReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).

## Declaration

```swift
typealias DNSServiceQueryRecordReply = (DNSServiceRef?, DNSServiceFlags, UInt32, DNSServiceErrorType, UnsafePointer<CChar>?, UInt16, UInt16, UInt16, UnsafeRawPointer?, UInt32, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- `flags`: Possible values are [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md) and kDNSServiceFlagsAdd. The Add flag is NOT set for PTR records with a ttl of 0, i.e. “Remove” events.
- `interfaceIndex`: The interface on which the query was resolved (the index for a given interface is determined via the if_nametoindex() family of calls). See “Constants for specifying an interface index” for more details.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred. Other parameters are undefined if errorCode is nonzero.
- `fullname`: The resource record’s full domain name.
- `rrtype`: The resource record’s type (e.g. kDNSServiceType_PTR, kDNSServiceType_SRV, and so on).
- `rrclass`: The class of the resource record (usually [kDNSServiceClass_IN](kdnsserviceclass_in.md)).
- `rdlen`: The length, in bytes, of the resource record rdata.
- `rdata`: The raw rdata of the resource record.
- `ttl`: If the client wishes to cache the result for performance reasons, the TTL indicates how long the client may legitimately hold onto this result, in seconds. After the TTL expires, the client should consider the result no longer valid, and if it requires this data again, it should be re-fetched with a new query. Of course, this only applies to clients that cancel the asynchronous operation when they get a result. Clients that leave the asynchronous operation running can safely assume that the data remains valid until they get another callback telling them otherwise.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

# DNSServiceQueryRecordReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, unsigned int, unsigned int, int, const char *, unsigned short, unsigned short, unsigned short, const void *, unsigned int, void *) DNSServiceQueryRecordReply;
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- `flags`: Possible values are [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md) and kDNSServiceFlagsAdd. The Add flag is NOT set for PTR records with a ttl of 0, i.e. “Remove” events.
- `interfaceIndex`: The interface on which the query was resolved (the index for a given interface is determined via the if_nametoindex() family of calls). See “Constants for specifying an interface index” for more details.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred. Other parameters are undefined if errorCode is nonzero.
- `fullname`: The resource record’s full domain name.
- `rrtype`: The resource record’s type (e.g. kDNSServiceType_PTR, kDNSServiceType_SRV, and so on).
- `rrclass`: The class of the resource record (usually [kDNSServiceClass_IN](kdnsserviceclass_in.md)).
- `rdlen`: The length, in bytes, of the resource record rdata.
- `rdata`: The raw rdata of the resource record.
- `ttl`: If the client wishes to cache the result for performance reasons, the TTL indicates how long the client may legitimately hold onto this result, in seconds. After the TTL expires, the client should consider the result no longer valid, and if it requires this data again, it should be re-fetched with a new query. Of course, this only applies to clients that cancel the asynchronous operation when they get a result. Clients that leave the asynchronous operation running can safely assume that the data remains valid until they get another callback telling them otherwise.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).
