> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicesleepkeepalivereply](https://developer.apple.com/documentation/dnssd/dnsservicesleepkeepalivereply)

# DNSServiceSleepKeepaliveReply (Swift)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
typealias DNSServiceSleepKeepaliveReply = (DNSServiceRef?, DNSServiceErrorType, UnsafeMutableRawPointer?) -> Void
```

## See Also

### Data Types

- [CompileTimeAssertionChecks_DNS_SD](compiletimeassertionchecks_dns_sd.md)
- [DNSRecordRef](dnsrecordref.md)
- [DNSServiceRef](dnsserviceref.md)
- [dnssd_sock_t](dnssd_sock_t.md)
- [DNSServiceAttributeRef](dnsserviceattributeref.md)

# DNSServiceSleepKeepaliveReply (Objective-C)

**Framework:** dnssd  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
typedef void (*)(struct _DNSServiceRef_t *, int, void *) DNSServiceSleepKeepaliveReply;
```

## See Also

### Data Types

- [CompileTimeAssertionChecks_DNS_SD](compiletimeassertionchecks_dns_sd.md)
- [DNSRecordRef](dnsrecordref.md)
- [DNSServiceRef](dnsserviceref.md)
- [dnssd_sock_t](dnssd_sock_t.md)
- [DNSServiceAttribute](dnsserviceattribute.md)
- [DNSServiceAttributeRef](dnsserviceattributeref.md)
