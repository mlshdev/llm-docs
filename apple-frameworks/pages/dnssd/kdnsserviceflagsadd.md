> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagsadd](https://developer.apple.com/documentation/dnssd/kdnsserviceflagsadd)

# kDNSServiceFlagsAdd (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsAdd: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Indicates that the domain is newly discovered. If NOT set, indicates a “Remove”, i.e. the domain is no longer valid. Used in domain enumeration and browse/query reply callbacks.

# kDNSServiceFlagsAdd (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsAdd
```

<a id="Discussion"></a>

## Discussion

Indicates that the domain is newly discovered. If NOT set, indicates a “Remove”, i.e. the domain is no longer valid. Used in domain enumeration and browse/query reply callbacks.
