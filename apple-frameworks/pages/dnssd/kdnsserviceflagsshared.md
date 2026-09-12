> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagsshared](https://developer.apple.com/documentation/dnssd/kdnsserviceflagsshared)

# kDNSServiceFlagsShared (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsShared: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Flag for registering individual records on a connected DNSServiceRef. Shared indicates that there may be multiple records with this name on the network (e.g. PTR records).

# kDNSServiceFlagsShared (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsShared
```

<a id="Discussion"></a>

## Discussion

Flag for registering individual records on a connected DNSServiceRef. Shared indicates that there may be multiple records with this name on the network (e.g. PTR records).
