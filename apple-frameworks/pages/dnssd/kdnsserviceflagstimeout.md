> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagstimeout](https://developer.apple.com/documentation/dnssd/kdnsserviceflagstimeout)

# kDNSServiceFlagsTimeout (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsTimeout: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

When passed to [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md) or [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md), the query is stopped after a certain number of seconds have elapsed. The time at which the query is stopped is determined by the system and cannot be configured by the user. The query is stopped irrespective of whether a response was given earlier or not. When the query is stopped, the callback is called with an error code of kDNSServiceErr_Timeout and a NULL sockaddr is returned for [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](dnsservicegetaddrinfo%28______________%29.md) and zero length rdata is returned for [DNSServiceQueryRecord(\_:\_:\_:\_:\_:\_:\_:\_:)](dnsservicequeryrecord%28________________%29.md).

# kDNSServiceFlagsTimeout (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsTimeout
```

<a id="Discussion"></a>

## Discussion

When passed to [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md) or [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md), the query is stopped after a certain number of seconds have elapsed. The time at which the query is stopped is determined by the system and cannot be configured by the user. The query is stopped irrespective of whether a response was given earlier or not. When the query is stopped, the callback is called with an error code of kDNSServiceErr_Timeout and a NULL sockaddr is returned for [DNSServiceGetAddrInfo](dnsservicegetaddrinfo%28______________%29.md) and zero length rdata is returned for [DNSServiceQueryRecord](dnsservicequeryrecord%28________________%29.md).
