> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoidentifier](https://developer.apple.com/documentation/security/kseccodeinfoidentifier)

# kSecCodeInfoIdentifier (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the signing identifier sealed into the signature.

## Declaration

```swift
let kSecCodeInfoIdentifier: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) object. Absent for unsigned code.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoIdentifier (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the signing identifier sealed into the signature.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoIdentifier;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) object. Absent for unsigned code.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
