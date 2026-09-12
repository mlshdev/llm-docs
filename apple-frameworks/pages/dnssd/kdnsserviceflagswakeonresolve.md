> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagswakeonresolve](https://developer.apple.com/documentation/dnssd/kdnsserviceflagswakeonresolve)

# kDNSServiceFlagsWakeOnResolve (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsWakeOnResolve: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

This flag is meaningful only in DNSServiceResolve. When set, it tries to send a magic packet to wake up the client.

# kDNSServiceFlagsWakeOnResolve (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsWakeOnResolve
```

<a id="Discussion"></a>

## Discussion

This flag is meaningful only in DNSServiceResolve. When set, it tries to send a magic packet to wake up the client.
