> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicecreateconnection(_:)](https://developer.apple.com/documentation/dnssd/dnsservicecreateconnection(_:))

# DNSServiceCreateConnection(\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a connection to the daemon, allowing efficient registration of multiple individual records.

## Declaration

```swift
func DNSServiceCreateConnection(_ sdRef: UnsafeMutablePointer<DNSServiceRef?>!) -> DNSServiceErrorType
```

## Parameters

- `sdRef`: A pointer to an uninitialized DNSServiceRef. Deallocating the reference (via [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md)) severs the connection and deregisters all records registered on this connection.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the specific failure that occurred (in which case the DNSServiceRef is not initialized).

## See Also

### Special Purpose Calls

- [DNSServiceReconfirmRecord(\_:\_:\_:\_:\_:\_:\_:)](dnsservicereconfirmrecord%28______________%29.md): Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).
- [DNSServiceRegisterRecord(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease(\_:\_:\_:\_:)](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.

# DNSServiceCreateConnection (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a connection to the daemon, allowing efficient registration of multiple individual records.

## Declaration

```objectivec
DNSServiceErrorType DNSServiceCreateConnection(DNSServiceRef*sdRef);
```

## Parameters

- `sdRef`: A pointer to an uninitialized DNSServiceRef. Deallocating the reference (via [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md)) severs the connection and deregisters all records registered on this connection.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the specific failure that occurred (in which case the DNSServiceRef is not initialized).

## See Also

### Special Purpose Calls

- [DNSServiceReconfirmRecord](dnsservicereconfirmrecord%28______________%29.md): Instructs the daemon to verify the validity of a resource record that appears to be out of date (for example, because TCP connection to a service’s target failed).
- [DNSServiceRegisterRecord](dnsserviceregisterrecord%28________________________%29.md): Registers an individual resource record on a connected DNSServiceRef.
- [PeerConnectionRelease](peerconnectionrelease%28________%29.md): Releases P2P connection resources associated with the service instance.
