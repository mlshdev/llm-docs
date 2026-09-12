> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoplist](https://developer.apple.com/documentation/security/kseccodeinfoplist)

# kSecCodeInfoPList (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an information dictionary containing the contents of the secured `Info.plist` file as seen by Code Signing Services.

## Declaration

```swift
let kSecCodeInfoPList: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionary](../corefoundation/cfdictionary.md) object. Absent if no information property list (`Info.plist`) file is known to Code Signing Services. Note that this is not necessarily the same dictionary as the one that would be returned by a [CFBundle](../corefoundation/cfbundle.md) function such as [CFBundleCopyInfoDictionaryForURL(\_:)](../corefoundation/cfbundlecopyinfodictionaryforurl%28__%29.md), because [CFBundle](../corefoundation/cfbundle.md) is free to add entries to the information property list).

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function.

# kSecCodeInfoPList (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is an information dictionary containing the contents of the secured `Info.plist` file as seen by Code Signing Services.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoPList;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDictionaryRef](../corefoundation/cfdictionary.md) object. Absent if no information property list (`Info.plist`) file is known to Code Signing Services. Note that this is not necessarily the same dictionary as the one that would be returned by a [CFBundleRef](../corefoundation/cfbundle.md) function such as [CFBundleCopyInfoDictionaryForURL](../corefoundation/cfbundlecopyinfodictionaryforurl%28__%29.md), because [CFBundleRef](../corefoundation/cfbundle.md) is free to add entries to the information property list).

This is generic information returned regardless of which [Code Signing Information Flags](code-signing-information-flags.md) you pass to the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function.
