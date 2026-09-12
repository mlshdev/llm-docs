> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceupdaterecordwithattribute(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceupdaterecordwithattribute(_:_:_:_:_:_:_:))

# DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func DNSServiceUpdateRecordWithAttribute(_ sdRef: DNSServiceRef?, _ recordRef: DNSRecordRef?, _ flags: DNSServiceFlags, _ rdlen: UInt16, _ rdata: UnsafeRawPointer?, _ ttl: UInt32, _ attr: DNSServiceAttributeRef?) -> DNSServiceErrorType
```

## See Also

### Functions

- [DNSServiceSleepKeepalive(\_:\_:\_:\_:\_:\_:)](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate()](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate(\_:)](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy(\_:\_:)](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash(\_:\_:)](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp(\_:\_:)](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)

# DNSServiceUpdateRecordWithAttribute (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceUpdateRecordWithAttribute(DNSServiceRef sdRef, DNSRecordRef recordRef, DNSServiceFlags flags, uint16_t rdlen, const void *rdata, uint32_t ttl, DNSServiceAttributeRef const attr);
```

## See Also

### Functions

- [DNSServiceSleepKeepalive](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
