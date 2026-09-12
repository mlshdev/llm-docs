> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfomainexecutable](https://developer.apple.com/documentation/security/kseccodeinfomainexecutable)

# kSecCodeInfoMainExecutable (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL locating the main executable file of the code.

## Declaration

```swift
let kSecCodeInfoMainExecutable: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFURL](../corefoundation/cfurl.md) object. For single files, the URL locates the file itself. For bundles, it locates the main executable as identified by the bundle’s `Info.plist` file.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoMainExecutable (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a URL locating the main executable file of the code.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoMainExecutable;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFURLRef](../corefoundation/cfurl.md) object. For single files, the URL locates the file itself. For bundles, it locates the main executable as identified by the bundle’s `Info.plist` file.

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
