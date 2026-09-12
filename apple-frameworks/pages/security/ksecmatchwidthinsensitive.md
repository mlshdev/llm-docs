> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchwidthinsensitive](https://developer.apple.com/documentation/security/ksecmatchwidthinsensitive)

# kSecMatchWidthInsensitive (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a Boolean indicating whether width-insensitive matching is performed.

## Declaration

```swift
let kSecMatchWidthInsensitive: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBoolean](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then width-sensitive string matching is performed (for example, the ASCII character `a` does not match the UTF-8 full-width letter `a` (`U+FF41`).

# kSecMatchWidthInsensitive (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A key whose value is a Boolean indicating whether width-insensitive matching is performed.

## Declaration

```objectivec
extern CFStringRef const kSecMatchWidthInsensitive;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [CFBooleanRef](../corefoundation/cfboolean.md). If this value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md), or if this attribute is not provided, then width-sensitive string matching is performed (for example, the ASCII character `a` does not match the UTF-8 full-width letter `a` (`U+FF41`).
