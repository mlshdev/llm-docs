> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceregisterrecordwithattribute(_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceregisterrecordwithattribute(_:_:_:_:_:_:_:_:_:_:_:_:_:))

# DNSServiceRegisterRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func DNSServiceRegisterRecordWithAttribute(_ sdRef: DNSServiceRef?, _ recordRef: UnsafeMutablePointer<DNSRecordRef>?, _ flags: DNSServiceFlags, _ interfaceIndex: UInt32, _ fullname: UnsafePointer<CChar>?, _ rrtype: UInt16, _ rrclass: UInt16, _ rdlen: UInt16, _ rdata: UnsafeRawPointer?, _ ttl: UInt32, _ attr: DNSServiceAttributeRef?, _ callBack: DNSServiceRegisterRecordReply?, _ context: UnsafeMutableRawPointer?) -> DNSServiceErrorType
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
- [DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecordwithattribute%28______________%29.md)

# DNSServiceRegisterRecordWithAttribute (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceRegisterRecordWithAttribute(DNSServiceRef sdRef, DNSRecordRef*recordRef, DNSServiceFlags flags, uint32_t interfaceIndex, const char *fullname, uint16_t rrtype, uint16_t rrclass, uint16_t rdlen, const void *rdata, uint32_t ttl, DNSServiceAttributeRef const attr, DNSServiceRegisterRecordReply callBack, void *context);
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
- [DNSServiceRegisterWithAttribute](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute](dnsserviceupdaterecordwithattribute%28______________%29.md)
