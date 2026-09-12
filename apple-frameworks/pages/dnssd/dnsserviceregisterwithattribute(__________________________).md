> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceregisterwithattribute(_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceregisterwithattribute(_:_:_:_:_:_:_:_:_:_:_:_:_:))

# DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func DNSServiceRegisterWithAttribute(_ sdRef: UnsafeMutablePointer<DNSServiceRef>?, _ flags: DNSServiceFlags, _ interfaceIndex: UInt32, _ name: UnsafePointer<CChar>?, _ regtype: UnsafePointer<CChar>?, _ domain: UnsafePointer<CChar>?, _ host: UnsafePointer<CChar>?, _ portInNetworkByteOrder: UInt16, _ txtLen: UInt16, _ txtRecord: UnsafeRawPointer?, _ attr: DNSServiceAttributeRef?, _ callBack: DNSServiceRegisterReply?, _ context: UnsafeMutableRawPointer?) -> DNSServiceErrorType
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
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecordwithattribute%28______________%29.md)

# DNSServiceRegisterWithAttribute (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceRegisterWithAttribute(DNSServiceRef*sdRef, DNSServiceFlags flags, uint32_t interfaceIndex, const char *name, const char *regtype, const char *domain, const char *host, uint16_t portInNetworkByteOrder, uint16_t txtLen, const void *txtRecord, DNSServiceAttributeRef const attr, DNSServiceRegisterReply callBack, void *context);
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
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute](dnsserviceupdaterecordwithattribute%28______________%29.md)
