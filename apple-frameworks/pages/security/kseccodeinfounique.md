> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfounique](https://developer.apple.com/documentation/security/kseccodeinfounique)

# kSecCodeInfoUnique (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a binary number that uniquely identifies static code.

## Declaration

```swift
let kSecCodeInfoUnique: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFData](../corefoundation/cfdata.md) object. This identifier can be used to recognize this specific code in the future. This identifier is tied to the current version of the code, unlike the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) identifier, which remains stable across developer-approved updates. The algorithm used for the [kSecCodeInfoUnique](kseccodeinfounique.md) identifier may change over time. However, the identifier remains stable for existing, signed code.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoUnique (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a binary number that uniquely identifies static code.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoUnique;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDataRef](../corefoundation/cfdata.md) object. This identifier can be used to recognize this specific code in the future. This identifier is tied to the current version of the code, unlike the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) identifier, which remains stable across developer-approved updates. The algorithm used for the [kSecCodeInfoUnique](kseccodeinfounique.md) identifier may change over time. However, the identifier remains stable for existing, signed code.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
