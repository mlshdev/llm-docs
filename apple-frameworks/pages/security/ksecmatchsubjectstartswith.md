> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchsubjectstartswith](https://developer.apple.com/documentation/security/ksecmatchsubjectstartswith)

# kSecMatchSubjectStartsWith (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a string to match against the beginning of a certificate or identity’s subject.

## Declaration

```swift
let kSecMatchSubjectStartsWith: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFString](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject starts with this string.

# kSecMatchSubjectStartsWith (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a string to match against the beginning of a certificate or identity’s subject.

## Declaration

```objectivec
extern CFStringRef const kSecMatchSubjectStartsWith;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFStringRef](../corefoundation/cfstring.md). If provided, returned certificates or identities are limited to those whose subject starts with this string.
