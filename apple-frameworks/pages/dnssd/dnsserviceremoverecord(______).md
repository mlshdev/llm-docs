> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceremoverecord(_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsserviceremoverecord(_:_:_:))

# DNSServiceRemoveRecord(\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a record previously added to a service record set via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).

## Declaration

```swift
func DNSServiceRemoveRecord(_ sdRef: DNSServiceRef!, _ RecordRef: DNSRecordRef!, _ flags: DNSServiceFlags) -> DNSServiceErrorType
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md) (if the record being removed was registered via [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md)) or by [DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md) (if the record being removed was registered via [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md)).
- `RecordRef`: A DNSRecordRef initialized by a successful call to [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md) or [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md).
- `flags`: Currently ignored, reserved for future use.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred.

## See Also

### Service Registration

- [DNSServiceAddRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceUpdateRecord(\_:\_:\_:\_:\_:\_:)](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.

# DNSServiceRemoveRecord (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Removes a record previously added to a service record set via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md), or deregister an record registered individually via [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).

## Declaration

```objectivec
DNSServiceErrorType DNSServiceRemoveRecord(DNSServiceRef sdRef, DNSRecordRef RecordRef, DNSServiceFlags flags);
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by [DNSServiceRegister](dnsserviceregister%28________________________%29.md) (if the record being removed was registered via [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md)) or by [DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md) (if the record being removed was registered via [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md)).
- `RecordRef`: A DNSRecordRef initialized by a successful call to [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md) or [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md).
- `flags`: Currently ignored, reserved for future use.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the error that occurred.

## See Also

### Service Registration

- [DNSServiceAddRecord](dnsserviceaddrecord%28______________%29.md): Adds a record to a registered service.
- [DNSServiceRegister](dnsserviceregister%28________________________%29.md): Registers a service.
- [DNSServiceUpdateRecord](dnsserviceupdaterecord%28____________%29.md): Updates a registered resource record.
