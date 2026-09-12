> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicedomainenumreply](https://developer.apple.com/documentation/dnssd/dnsservicedomainenumreply)

# DNSServiceDomainEnumReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

## Declaration

```swift
typealias DNSServiceDomainEnumReply = (DNSServiceRef?, DNSServiceFlags, UInt32, DNSServiceErrorType, UnsafePointer<CChar>?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).
- `flags`: Possible values are:

  [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md)

  kDNSServiceFlagsAdd

  kDNSServiceFlagsDefault
- `interfaceIndex`: Specifies the interface on which the domain exists. (The index for a given interface is determined via the if_nametoindex() family of calls.)
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) (0) on success, otherwise indicates the failure that occurred (other parameters are undefined if errorCode is nonzero).
- `replyDomain`: The name of the domain.
- `context`: The context pointer passed to DNSServiceEnumerateDomains.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).

# DNSServiceDomainEnumReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, unsigned int, unsigned int, int, const char *, void *) DNSServiceDomainEnumReply;
```

## Parameters

- `sdRef`: The DNSServiceRef initialized by [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).
- `flags`: Possible values are:

  [kDNSServiceFlagsMoreComing](kdnsserviceflagsmorecoming.md)

  kDNSServiceFlagsAdd

  kDNSServiceFlagsDefault
- `interfaceIndex`: Specifies the interface on which the domain exists. (The index for a given interface is determined via the if_nametoindex() family of calls.)
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) (0) on success, otherwise indicates the failure that occurred (other parameters are undefined if errorCode is nonzero).
- `replyDomain`: The name of the domain.
- `context`: The context pointer passed to DNSServiceEnumerateDomains.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterRecordReply](dnsserviceregisterrecordreply.md): Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
