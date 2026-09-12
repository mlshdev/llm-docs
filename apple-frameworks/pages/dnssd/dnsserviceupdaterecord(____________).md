> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceupdaterecord(_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceupdaterecord(_:_:_:_:_:_:))

# DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Updates a registered resource record.

## Declaration

```swift
func DNSServiceUpdateRecord(_ sdRef: DNSServiceRef!, _ recordRef: DNSRecordRef!, _ flags: DNSServiceFlags, _ rdlen: UInt16, _ rdata: UnsafeRawPointer!, _ ttl: UInt32) -> DNSServiceErrorType
```

## Parameters

- `sdRef`: A DNSServiceRef that was initialized by [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md) or [DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md).
- `recordRef`: A DNSRecordRef initialized by [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md), or NULL to update the service’s primary txt record.
- `flags`: Currently ignored, reserved for future use.
- `rdlen`: The length, in bytes, of the new rdata.
- `rdata`: The new rdata to be contained in the updated resource record.
- `ttl`: The time to live of the updated resource record, in seconds. Most clients should pass 0 to indicate that the system should select a sensible default value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred.

<a id="Discussion"></a>

## Discussion

The record must either be:

- The primary txt record of a service registered via [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md)
- A record added to a registered service via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md)
- An individual record registered by [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md)

## See Also

### Service Registration

- [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord(\_:\_:\_:)](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).

# DNSServiceUpdateRecord (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Updates a registered resource record.

## Declaration

```objectivec
DNSServiceErrorType DNSServiceUpdateRecord(DNSServiceRef sdRef, DNSRecordRef recordRef, DNSServiceFlags flags, uint16_t rdlen, const void *rdata, uint32_t ttl);
```

## Parameters

- `sdRef`: A DNSServiceRef that was initialized by [DNSServiceRegister](dnsserviceregister%28________________________%29.md) or [DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md).
- `recordRef`: A DNSRecordRef initialized by [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md), or NULL to update the service’s primary txt record.
- `flags`: Currently ignored, reserved for future use.
- `rdlen`: The length, in bytes, of the new rdata.
- `rdata`: The new rdata to be contained in the updated resource record.
- `ttl`: The time to live of the updated resource record, in seconds. Most clients should pass 0 to indicate that the system should select a sensible default value.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred.

<a id="Discussion"></a>

## Discussion

The record must either be:

- The primary txt record of a service registered via [DNSServiceRegister](dnsserviceregister%28________________________%29.md)
- A record added to a registered service via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md)
- An individual record registered by [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md)

## See Also

### Service Registration

- [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceRemoveRecord](dnsserviceremoverecord%28______%29.md): Removes a record previously added to a service record set via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
