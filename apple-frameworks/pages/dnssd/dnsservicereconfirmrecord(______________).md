> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicereconfirmrecord(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/dnssd/dnsservicereconfirmrecord(_:_:_:_:_:_:_:))

# DNSServiceReconfirmRecord(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).

## Declaration

```swift
func DNSServiceReconfirmRecord(_ flags: DNSServiceFlags, _ interfaceIndex: UInt32, _ fullname: UnsafePointer<CChar>!, _ rrtype: UInt16, _ rrclass: UInt16, _ rdlen: UInt16, _ rdata: UnsafeRawPointer!) -> DNSServiceErrorType
```

## Parameters

- `flags`: Not currently used.
- `interfaceIndex`: Specifies the interface of the record in question. The caller must specify the interface. This API (by design) causes increased network traffic, so it requires the caller to be precise about which record should be reconfirmed. It is not possible to pass zero for the interface index to perform a “wildcard” reconfirmation, where \*all\* matching records are reconfirmed.
- `fullname`: The resource record’s full domain name.
- `rrtype`: The resource record’s type (e.g. kDNSServiceType_PTR, kDNSServiceType_SRV, and so on).
- `rrclass`: The class of the resource record (usually [kDNSServiceClass_IN](kdnsserviceclass_in.md)).
- `rdlen`: The length, in bytes, of the resource record rdata.
- `rdata`: The raw rdata of the resource record.

<a id="Discussion"></a>

## Discussion

Causes the record to be flushed from the daemon’s cache (as well as all other daemons’ caches on the network) if the record is determined to be invalid.

> **Important**

>  Use this routine conservatively. Reconfirming a record necessarily consumes network bandwidth, so this should not be done indiscriminately.

## See Also

### Special Purpose Calls

- [DNSServiceCreateConnection(\_:)](dnsservicecreateconnection%28__%29.md): Creates a connection to the daemon, allowing efficient registration of multiple individual records.
- [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease(\_:\_:\_:\_:)](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.

# DNSServiceReconfirmRecord (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).

## Declaration

```objectivec
DNSServiceErrorType DNSServiceReconfirmRecord(DNSServiceFlags flags, uint32_t interfaceIndex, const char *fullname, uint16_t rrtype, uint16_t rrclass, uint16_t rdlen, const void *rdata);
```

## Parameters

- `flags`: Not currently used.
- `interfaceIndex`: Specifies the interface of the record in question. The caller must specify the interface. This API (by design) causes increased network traffic, so it requires the caller to be precise about which record should be reconfirmed. It is not possible to pass zero for the interface index to perform a “wildcard” reconfirmation, where \*all\* matching records are reconfirmed.
- `fullname`: The resource record’s full domain name.
- `rrtype`: The resource record’s type (e.g. kDNSServiceType_PTR, kDNSServiceType_SRV, and so on).
- `rrclass`: The class of the resource record (usually [kDNSServiceClass_IN](kdnsserviceclass_in.md)).
- `rdlen`: The length, in bytes, of the resource record rdata.
- `rdata`: The raw rdata of the resource record.

<a id="Discussion"></a>

## Discussion

Causes the record to be flushed from the daemon’s cache (as well as all other daemons’ caches on the network) if the record is determined to be invalid.

> **Important**

>  Use this routine conservatively. Reconfirming a record necessarily consumes network bandwidth, so this should not be done indiscriminately.

## See Also

### Special Purpose Calls

- [DNSServiceCreateConnection](dnsservicecreateconnection%28__%29.md): Creates a connection to the daemon, allowing efficient registration of multiple individual records.
- [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.
