> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/dnsservicerefsockfd(_:)](https://developer.apple.com/documentation/dnssd/dnsservicerefsockfd(_:))

# DNSServiceRefSockFD(\_:) (Swift)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Accesses underlying Unix domain socket for an initialized DNSServiceRef.

## Declaration

```swift
func DNSServiceRefSockFD(_ sdRef: DNSServiceRef!) -> dnssd_sock_t
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by any of the DNSService calls.

<a id="return-value"></a>

## Return Value

The DNSServiceRef’s underlying socket descriptor, or -1 on error.

<a id="Discussion"></a>

## Discussion

The DNS Service Discovery implementation uses this socket to communicate between the client and the mDNSResponder daemon. The application MUST NOT directly read from or write to this socket. Access to the socket is provided so that it can be used as a kqueue event source, a CFRunLoop event source, in a select() loop, etc. When the underlying event management subsystem (kqueue/ select/CFRunLoop etc.) indicates to the client that data is available for reading on the socket, the client should call [DNSServiceProcessResult(\_:)](dnsserviceprocessresult%28__%29.md), which will extract the daemon’s reply from the socket, and pass it to the appropriate application callback. By using a run loop or select(), results from the daemon can be processed asynchronously. Alternatively, a client can choose to fork a thread and have it loop calling “DNSServiceProcessResult(ref);” If [DNSServiceProcessResult(\_:)](dnsserviceprocessresult%28__%29.md) is called when no data is available for reading on the socket, it will block until data does become available, and then process the data and return to the caller. When data arrives on the socket, the client is responsible for calling DNSServiceProcessResult(ref) in a timely fashion – if the client allows a large backlog of data to build up the daemon may terminate the connection.

## See Also

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceProcessResult(\_:)](dnsserviceprocessresult%28__%29.md): Reads a reply from the daemon, calling the appropriate application callback.
- [DNSServiceRefDeallocate(\_:)](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.

# DNSServiceRefSockFD (Objective-C)

**Framework:** dnssd  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Accesses underlying Unix domain socket for an initialized DNSServiceRef.

## Declaration

```objectivec
dnssd_sock_t DNSServiceRefSockFD(DNSServiceRef sdRef);
```

## Parameters

- `sdRef`: A DNSServiceRef initialized by any of the DNSService calls.

<a id="return-value"></a>

## Return Value

The DNSServiceRef’s underlying socket descriptor, or -1 on error.

<a id="Discussion"></a>

## Discussion

The DNS Service Discovery implementation uses this socket to communicate between the client and the mDNSResponder daemon. The application MUST NOT directly read from or write to this socket. Access to the socket is provided so that it can be used as a kqueue event source, a CFRunLoop event source, in a select() loop, etc. When the underlying event management subsystem (kqueue/ select/CFRunLoop etc.) indicates to the client that data is available for reading on the socket, the client should call [DNSServiceProcessResult](dnsserviceprocessresult%28__%29.md), which will extract the daemon’s reply from the socket, and pass it to the appropriate application callback. By using a run loop or select(), results from the daemon can be processed asynchronously. Alternatively, a client can choose to fork a thread and have it loop calling “DNSServiceProcessResult(ref);” If [DNSServiceProcessResult](dnsserviceprocessresult%28__%29.md) is called when no data is available for reading on the socket, it will block until data does become available, and then process the data and return to the caller. When data arrives on the socket, the client is responsible for calling DNSServiceProcessResult(ref) in a timely fashion – if the client allows a large backlog of data to build up the daemon may terminate the connection.

## See Also

### Unix Domain Socket access, DNSServiceRef deallocation, and data processing functions

- [DNSServiceProcessResult](dnsserviceprocessresult%28__%29.md): Reads a reply from the daemon, calling the appropriate application callback.
- [DNSServiceRefDeallocate](dnsservicerefdeallocate%28__%29.md): Terminates a connection with the daemon and frees memory associated with the DNSServiceRef.
