> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsserviceprocessresult(_:)](https://developer.apple.com/documentation/dnssd/dnsserviceprocessresult(_:))

# DNSServiceProcessResult(\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Reads a reply from the daemon, calling the appropriate application callback.

## Declaration

```swift
func DNSServiceProcessResult(_ sdRef: DNSServiceRef!) -> DNSServiceErrorType
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by any of the DNSService calls that take a callback parameter.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the specific failure that occurred.

<a id="Discussion"></a>

## Discussion

This call blocks until the daemon’s response is received. Use [DNSServiceRefSockFD(\_:)](dnsservicerefsockfd%28__%29.md) in conjunction with a run loop or select() to determine the presence of a response from the server before calling this function to process the reply without blocking. Call this function at any point if it is acceptable to block until the daemon’s response arrives. Note that the client is responsible for ensuring that [DNSServiceProcessResult(\_:)](dnsserviceprocessresult%28__%29.md) is called whenever there is a reply from the daemon - the daemon may terminate its connection with a client that does not process the daemon’s responses.

## See Also

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.
- [DNSServiceRefSockFD(\_:)](dnsservicerefsockfd%28__%29.md): Accesses underlying Unix domain socket for an initialized DNSServiceRef.

# DNSServiceProcessResult (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Reads a reply from the daemon, calling the appropriate application callback.

## Declaration

```objectivec
DNSServiceErrorType DNSServiceProcessResult(DNSServiceRef sdRef);
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by any of the DNSService calls that take a callback parameter.

<a id="return-value"></a>

## Return Value

Returns [kDNSServiceErr_NoError](kdnsserviceerr_noerror.md) on success, otherwise returns an error code indicating the specific failure that occurred.

<a id="Discussion"></a>

## Discussion

This call blocks until the daemon’s response is received. Use [DNSServiceRefSockFD](dnsservicerefsockfd%28__%29.md) in conjunction with a run loop or select() to determine the presence of a response from the server before calling this function to process the reply without blocking. Call this function at any point if it is acceptable to block until the daemon’s response arrives. Note that the client is responsible for ensuring that [DNSServiceProcessResult](dnsserviceprocessresult%28__%29.md) is called whenever there is a reply from the daemon - the daemon may terminate its connection with a client that does not process the daemon’s responses.

## See Also

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.
- [DNSServiceRefSockFD](dnsservicerefsockfd%28__%29.md): Accesses underlying Unix domain socket for an initialized DNSServiceRef.
