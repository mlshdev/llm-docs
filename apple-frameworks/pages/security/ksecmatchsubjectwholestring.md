> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchsubjectwholestring](https://developer.apple.com/documentation/security/ksecmatchsubjectwholestring)

# kSecMatchSubjectWholeString (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a string to exactly match a certificate or identity’s subject.

## Declaration

```swift
let kSecMatchSubjectWholeString: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject is exactly equal to this string.

# kSecMatchSubjectWholeString (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a string to exactly match a certificate or identity’s subject.

## Declaration

```objectivec
extern CFStringRef const kSecMatchSubjectWholeString;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject is exactly equal to this string.
