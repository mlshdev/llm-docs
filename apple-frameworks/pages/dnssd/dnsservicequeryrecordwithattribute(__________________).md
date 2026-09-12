> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicequeryrecordwithattribute(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsservicequeryrecordwithattribute(_:_:_:_:_:_:_:_:_:))

# DNSServiceQueryRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func DNSServiceQueryRecordWithAttribute(_ sdRef: UnsafeMutablePointer<DNSServiceRef>?, _ flags: DNSServiceFlags, _ ifindex: UInt32, _ name: UnsafePointer<CChar>?, _ rrtype: UInt16, _ rrclass: UInt16, _ attr: OpaquePointer?, _ callback: DNSServiceQueryRecordReply?, _ context: UnsafeMutableRawPointer?) -> DNSServiceErrorType
```

## See Also

### Functions

- [DNSServiceSleepKeepalive(\_:\_:\_:\_:\_:\_:)](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate()](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate(\_:)](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy(\_:\_:)](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash(\_:\_:)](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp(\_:\_:)](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceRegisterRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecordwithattribute%28______________%29.md)

# DNSServiceQueryRecordWithAttribute (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceQueryRecordWithAttribute(DNSServiceRef*sdRef, DNSServiceFlags flags, uint32_t ifindex, const char *name, uint16_t rrtype, uint16_t rrclass, const DNSServiceAttribute *attr, DNSServiceQueryRecordReply callback, void *context);
```

## See Also

### Functions

- [DNSServiceSleepKeepalive](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceRegisterRecordWithAttribute](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute](dnsserviceupdaterecordwithattribute%28______________%29.md)
