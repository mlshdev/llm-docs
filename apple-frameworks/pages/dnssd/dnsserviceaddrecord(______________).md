> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceaddrecord(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceaddrecord(_:_:_:_:_:_:_:))

# DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a record to a registered service.

## Declaration

```swift
func DNSServiceAddRecord(_ sdRef: DNSServiceRef!, _ RecordRef: UnsafeMutablePointer<DNSRecordRef?>!, _ flags: DNSServiceFlags, _ rrtype: UInt16, _ rdlen: UInt16, _ rdata: UnsafeRawPointer!, _ ttl: UInt32) -> DNSServiceErrorType
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md).
- `RecordRef`: A pointer to an uninitialized DNSRecordRef. Upon succesfull completion of this call, this ref may be passed to [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md) or [DNSServiceRemoveRecord(\_:\_:\_:)](dnsserviceremoverecord%28______%29.md). If the above DNSServiceRef is passed to [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md), RecordRef is also invalidated and may not be used further.
- `flags`: Currently ignored, reserved for future use.
- `rrtype`: The type of the record (e.g. kDNSServiceType_TXT, kDNSServiceType_SRV, and so on).
- `rdlen`: The length, in bytes, of the rdata.
- `rdata`: The raw rdata to be contained in the added resource record.
- `ttl`: The time to live of the resource record, in seconds. Most clients should pass 0 to indicate that the system should select a sensible default value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred (the RecordRef is not initialized).

<a id="Discussion"></a>

## Discussion

The name of the record will be the same as the registered service’s name. The record can later be updated or deregistered by passing the RecordRef initialized by this function to [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md) or [DNSServiceRemoveRecord(\_:\_:\_:)](dnsserviceremoverecord%28______%29.md).

Note that the DNSServiceAddRecord/UpdateRecord/RemoveRecord are \*NOT\* thread-safe with respect to a single DNSServiceRef. If you plan to have multiple threads in your program simultaneously add, update, or remove records from the same DNSServiceRef, then it’s the caller’s responsibility to use a mutext lock or take similar appropriate precautions to serialize those calls.

## See Also

### Service Registration

- [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord(\_:\_:\_:)](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.

# DNSServiceAddRecord (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a record to a registered service.

## Declaration

```objectivec
DNSServiceErrorType DNSServiceAddRecord(DNSServiceRef sdRef, DNSRecordRef*RecordRef, DNSServiceFlags flags, uint16_t rrtype, uint16_t rdlen, const void *rdata, uint32_t ttl);
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by [DNSServiceRegister](dnsserviceregister%28________________________%29.md).
- `RecordRef`: A pointer to an uninitialized DNSRecordRef. Upon succesfull completion of this call, this ref may be passed to [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md) or [DNSServiceRemoveRecord](dnsserviceremoverecord%28______%29.md). If the above DNSServiceRef is passed to [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md), RecordRef is also invalidated and may not be used further.
- `flags`: Currently ignored, reserved for future use.
- `rrtype`: The type of the record (e.g. kDNSServiceType_TXT, kDNSServiceType_SRV, and so on).
- `rdlen`: The length, in bytes, of the rdata.
- `rdata`: The raw rdata to be contained in the added resource record.
- `ttl`: The time to live of the resource record, in seconds. Most clients should pass 0 to indicate that the system should select a sensible default value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred (the RecordRef is not initialized).

<a id="Discussion"></a>

## Discussion

The name of the record will be the same as the registered service’s name. The record can later be updated or deregistered by passing the RecordRef initialized by this function to [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md) or [DNSServiceRemoveRecord](dnsserviceremoverecord%28______%29.md).

Note that the DNSServiceAddRecord/UpdateRecord/RemoveRecord are \*NOT\* thread-safe with respect to a single DNSServiceRef. If you plan to have multiple threads in your program simultaneously add, update, or remove records from the same DNSServiceRef, then it’s the caller’s responsibility to use a mutext lock or take similar appropriate precautions to serialize those calls.

## See Also

### Service Registration

- [DNSServiceRegister](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.
