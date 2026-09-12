> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchemailaddressifpresent](https://developer.apple.com/documentation/security/ksecmatchemailaddressifpresent)

# kSecMatchEmailAddressIfPresent (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to match against a certificate or identity’s email address.

## Declaration

```swift
let kSecMatchEmailAddressIfPresent: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md) and contains an RFC822 email address. If provided, returned certificates or identities are limited to those that either contain the address or do not contain any email address.

# kSecMatchEmailAddressIfPresent (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to match against a certificate or identity’s email address.

## Declaration

```objectivec
extern CFStringRef const kSecMatchEmailAddressIfPresent;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md) and contains an RFC822 email address. If provided, returned certificates or identities are limited to those that either contain the address or do not contain any email address.
