> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicesleepkeepalive(_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsservicesleepkeepalive(_:_:_:_:_:_:))

# DNSServiceSleepKeepalive(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
func DNSServiceSleepKeepalive(_ sdRef: UnsafeMutablePointer<DNSServiceRef?>!, _ flags: DNSServiceFlags, _ fd: Int32, _ timeout: UInt32, _ callBack: DNSServiceSleepKeepaliveReply!, _ context: UnsafeMutableRawPointer!) -> DNSServiceErrorType
```

## See Also

### Functions

- [DNSServiceAttributeCreate()](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate(\_:)](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy(\_:\_:)](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash(\_:\_:)](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp(\_:\_:)](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecordwithattribute%28______________%29.md)

# DNSServiceSleepKeepalive (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceSleepKeepalive(DNSServiceRef*sdRef, DNSServiceFlags flags, int fd, unsigned int timeout, DNSServiceSleepKeepaliveReply callBack, void *context);
```

## See Also

### Functions

- [DNSServiceAttributeCreate](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetHostKeyHash](dnsserviceattributesethostkeyhash%28____%29.md)
- [DNSServiceAttributeSetTimestamp](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute](dnsserviceupdaterecordwithattribute%28______________%29.md)
