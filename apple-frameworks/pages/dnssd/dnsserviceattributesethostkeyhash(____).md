> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceattributesethostkeyhash(_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceattributesethostkeyhash(_:_:))

# DNSServiceAttributeSetHostKeyHash(\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
func DNSServiceAttributeSetHostKeyHash(_ attr: DNSServiceAttributeRef, _ hostkeyhash: UInt32) -> DNSServiceErrorType
```

## See Also

### Functions

- [DNSServiceSleepKeepalive(\_:\_:\_:\_:\_:\_:)](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate()](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate(\_:)](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy(\_:\_:)](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetTimestamp(\_:\_:)](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests(\_:)](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecordwithattribute%28______________%29.md)

# DNSServiceAttributeSetHostKeyHash (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
DNSServiceErrorType DNSServiceAttributeSetHostKeyHash(DNSServiceAttributeRef attr, uint32_t hostkeyhash);
```

## See Also

### Functions

- [DNSServiceSleepKeepalive](dnsservicesleepkeepalive%28____________%29.md)
- [DNSServiceAttributeCreate](dnsserviceattributecreate%28%29.md)
- [DNSServiceAttributeDeallocate](dnsserviceattributedeallocate%28__%29.md)
- [DNSServiceAttributeSetAAAAPolicy](dnsserviceattributesetaaaapolicy%28____%29.md)
- [DNSServiceAttributeSetTimestamp](dnsserviceattributesettimestamp%28____%29.md)
- [DNSServiceQueryRecordWithAttribute](dnsservicequeryrecordwithattribute%28__________________%29.md)
- [DNSServiceRegisterRecordWithAttribute](dnsserviceregisterrecordwithattribute%28__________________________%29.md)
- [DNSServiceRegisterWithAttribute](dnsserviceregisterwithattribute%28__________________________%29.md)
- [DNSServiceSendQueuedRequests](dnsservicesendqueuedrequests%28__%29.md)
- [DNSServiceUpdateRecordWithAttribute](dnsserviceupdaterecordwithattribute%28______________%29.md)
