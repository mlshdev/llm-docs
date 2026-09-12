> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchissuers](https://developer.apple.com/documentation/security/ksecmatchissuers)

# kSecMatchIssuers (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to match against a certificate or identity’s issuers.

## Declaration

```swift
let kSecMatchIssuers: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFArray](../corefoundation/cfarray.md), where the array consists of X.500 names of type [CFData](../corefoundation/cfdata.md). If provided, returned certificates or identities are limited to those whose certificate chain contains one of the issuers provided in this list.

# kSecMatchIssuers (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to match against a certificate or identity’s issuers.

## Declaration

```objectivec
extern CFStringRef const kSecMatchIssuers;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFArrayRef](../corefoundation/cfarray.md), where the array consists of X.500 names of type [CFDataRef](../corefoundation/cfdata.md). If provided, returned certificates or identities are limited to those whose certificate chain contains one of the issuers provided in this list.
