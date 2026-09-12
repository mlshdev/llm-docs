> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagsknownunique](https://developer.apple.com/documentation/dnssd/kdnsserviceflagsknownunique)

# kDNSServiceFlagsKnownUnique (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsKnownUnique: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Client guarantees that record names are unique, so we can skip sending out initial probe messages. Standard name conflict resolution is still done if a conflict is discovered. Currently only valid for a DNSServiceRegister call.

# kDNSServiceFlagsKnownUnique (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsKnownUnique
```

<a id="Discussion"></a>

## Discussion

Client guarantees that record names are unique, so we can skip sending out initial probe messages. Standard name conflict resolution is still done if a conflict is discovered. Currently only valid for a DNSServiceRegister call.
