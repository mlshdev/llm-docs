> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceregisterrecordreply](https://developer.apple.com/documentation/dnssd/dnsserviceregisterrecordreply)

# DNSServiceRegisterRecordReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).

## Declaration

```swift
typealias DNSServiceRegisterRecordReply = (DNSServiceRef?, DNSRecordRef?, DNSServiceFlags, DNSServiceErrorType, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `sdRef`: The connected DNSServiceRef initialized by [DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md).
- `RecordRef`: The DNSRecordRef initialized by [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md). If the above DNSServiceRef is passed to [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md), this DNSRecordRef is invalidated, and may not be used further.
- `flags`: Currently unused, reserved for future use.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred (including name conflicts.) Other parameters are undefined if errorCode is nonzero.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains(\_:\_:\_:\_:\_:)](dnsserviceenumeratedomains%28__________%29.md).

# DNSServiceRegisterRecordReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Callback for handling the results of a previous call to [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, struct _DNSRecordRef_t *, unsigned int, int, void *) DNSServiceRegisterRecordReply;
```

## Parameters

- `sdRef`: The connected DNSServiceRef initialized by [DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md).
- `RecordRef`: The DNSRecordRef initialized by [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md). If the above DNSServiceRef is passed to [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md), this DNSRecordRef is invalidated, and may not be used further.
- `flags`: Currently unused, reserved for future use.
- `errorCode`: Will be [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise will indicate the failure that occurred (including name conflicts.) Other parameters are undefined if errorCode is nonzero.
- `context`: The context pointer that was passed to the callout.

## See Also

### Callbacks

- [DNSServiceGetAddrInfoReply](dnsservicegetaddrinforeply.md): Callback for handling the results of a previous call to [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md).
- [DNSServiceRegisterReply](dnsserviceregisterreply.md): Handler for the results from a previous call to [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- [DNSServiceBrowseReply](dnsservicebrowsereply.md): Callback for handling the results of previous calls to DNSServiceBrowse.
- [DNSServiceResolveReply](dnsserviceresolvereply.md)
- [DNSServiceQueryRecordReply](dnsservicequeryrecordreply.md): Callback for handling the results of a previous call to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
- [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md): Callback for handling the reply from a previous call to [DNSServiceNATPortMappingReply](dnsservicenatportmappingreply.md).
- [DNSServiceDomainEnumReply](dnsservicedomainenumreply.md): Callback for handling the results of a previous call to [DNSServiceEnumerateDomains](dnsserviceenumeratedomains%28__________%29.md).
