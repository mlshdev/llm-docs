> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecencodelinelengthattribute](https://developer.apple.com/documentation/security/ksecencodelinelengthattribute)

# kSecEncodeLineLengthAttribute (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The length of encoded Base32 or Base64 lines.

> SecTransform is no longer supported

## Declaration

```swift
let kSecEncodeLineLengthAttribute: CFString
```

<a id="Discussion"></a>

## Discussion

Some systems can’t handle excessively long lines, or may be defined to limit lines to specific lengths (for example RFC1421 - 64, and RFC2045 - 76).

The corresponding value may be set to any positive value using a [CFNumber](../corefoundation/cfnumber.md) to limit to a specific length (values smaller then X for Base32 or Y for Base64 are assume to be X or Y), or to zero for no specific limit. Either of the string constants [kSecLineLength64](kseclinelength64.md) (RFC1421), or [kSecLineLength76](kseclinelength76.md) (RFC2045) may be used to set line lengths of 64 or 76 bytes.

# kSecEncodeLineLengthAttribute (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 13.0)

The length of encoded Base32 or Base64 lines.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecEncodeLineLengthAttribute;
```

<a id="Discussion"></a>

## Discussion

Some systems can’t handle excessively long lines, or may be defined to limit lines to specific lengths (for example RFC1421 - 64, and RFC2045 - 76).

The corresponding value may be set to any positive value using a [CFNumberRef](../corefoundation/cfnumber.md) to limit to a specific length (values smaller then X for Base32 or Y for Base64 are assume to be X or Y), or to zero for no specific limit. Either of the string constants [kSecLineLength64](kseclinelength64.md) (RFC1421), or [kSecLineLength76](kseclinelength76.md) (RFC2045) may be used to set line lengths of 64 or 76 bytes.
