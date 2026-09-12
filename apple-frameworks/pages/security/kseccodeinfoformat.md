> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoformat](https://developer.apple.com/documentation/security/kseccodeinfoformat)

# kSecCodeInfoFormat (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string representing the type and format of the code in a form suitable for display to a knowledgeable user.

## Declaration

```swift
let kSecCodeInfoFormat: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) object.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md)  you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoFormat (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a string representing the type and format of the code in a form suitable for display to a knowledgeable user.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoFormat;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) object.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md)  you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
