> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dnssd/kdnsserviceflagsallowremotequery](https://developer.apple.com/documentation/dnssd/kdnsserviceflagsallowremotequery)

# kDNSServiceFlagsAllowRemoteQuery (Swift)

**Framework:** dnssd  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
var kDNSServiceFlagsAllowRemoteQuery: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

Flag for creating a record for which we will answer remote queries (queries from hosts more than one hop away; hosts not directly connected to the local link).

# kDNSServiceFlagsAllowRemoteQuery (Objective-C)

**Framework:** dnssd  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
kDNSServiceFlagsAllowRemoteQuery
```

<a id="Discussion"></a>

## Discussion

Flag for creating a record for which we will answer remote queries (queries from hosts more than one hop away; hosts not directly connected to the local link).
