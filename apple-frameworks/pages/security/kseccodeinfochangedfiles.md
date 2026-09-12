> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfochangedfiles](https://developer.apple.com/documentation/security/kseccodeinfochangedfiles)

# kSecCodeInfoChangedFiles (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a list of all files in the code that may have been modified by the process of signing it.

## Declaration

```swift
let kSecCodeInfoChangedFiles: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArray](../corefoundation/cfarray.md) array of [CFURL](../corefoundation/cfurl.md) objects. Files not in this list have not been touched by the signing operation.

Specify the [kSecCSContentInformation](kseccscontentinformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoChangedFiles (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is a list of all files in the code that may have been modified by the process of signing it.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoChangedFiles;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFArrayRef](../corefoundation/cfarray.md) array of [CFURLRef](../corefoundation/cfurl.md) objects. Files not in this list have not been touched by the signing operation.

Specify the [kSecCSContentInformation](kseccscontentinformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
