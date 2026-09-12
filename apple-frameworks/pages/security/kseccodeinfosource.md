> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfosource](https://developer.apple.com/documentation/security/kseccodeinfosource)

# kSecCodeInfoSource (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The source of the code signature used for the code object in a format suitable for display.

## Declaration

```swift
let kSecCodeInfoSource: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) object. This string is for display purposes only. Don’t rely on the precise value returned.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoSource (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The source of the code signature used for the code object in a format suitable for display.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoSource;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) object. This string is for display purposes only. Don’t rely on the precise value returned.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
