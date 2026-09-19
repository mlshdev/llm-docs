> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecmatchdiacriticinsensitive

# kSecMatchDiacriticInsensitive (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a Boolean indicating whether diacritic-insensitive matching is performed.

## Declaration

```swift
let kSecMatchDiacriticInsensitive: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then diacritic-sensitive string matching is performed.

# kSecMatchDiacriticInsensitive (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a Boolean indicating whether diacritic-insensitive matching is performed.

## Declaration

```objectivec
extern CFStringRef const kSecMatchDiacriticInsensitive;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then diacritic-sensitive string matching is performed.
