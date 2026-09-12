> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustrevocationvaliduntildate](https://developer.apple.com/documentation/security/ksectrustrevocationvaliduntildate)

# kSecTrustRevocationValidUntilDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the earliest date at which revocation information becomes stale.

## Declaration

```swift
let kSecTrustRevocationValidUntilDate: CFString
```

<a id="Discussion"></a>

## Discussion

This key is only present if the [kSecTrustRevocationChecked](ksectrustrevocationchecked.md) key has a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md). The value is a [CFDate](../corefoundation/cfdate.md) representing the earliest date at which the revocation information for one of the certificates in this chain might change.

# kSecTrustRevocationValidUntilDate (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the earliest date at which revocation information becomes stale.

## Declaration

```objectivec
extern CFStringRef const kSecTrustRevocationValidUntilDate;
```

<a id="Discussion"></a>

## Discussion

This key is only present if the [kSecTrustRevocationChecked](ksectrustrevocationchecked.md) key has a value of [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md). The value is a [CFDateRef](../corefoundation/cfdate.md) representing the earliest date at which the revocation information for one of the certificates in this chain might change.
