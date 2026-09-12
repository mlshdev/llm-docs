> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchsubjectcontains](https://developer.apple.com/documentation/security/ksecmatchsubjectcontains)

# kSecMatchSubjectContains (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to look for in a certificate or identity’s subject.

## Declaration

```swift
let kSecMatchSubjectContains: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject contains this string.

# kSecMatchSubjectContains (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a string to look for in a certificate or identity’s subject.

## Declaration

```objectivec
extern CFStringRef const kSecMatchSubjectContains;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject contains this string.
