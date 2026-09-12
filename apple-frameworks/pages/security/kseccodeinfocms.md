> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfocms](https://developer.apple.com/documentation/security/kseccodeinfocms)

# kSecCodeInfoCMS (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the CMS cryptographic object that secures the code signature.

## Declaration

```swift
let kSecCodeInfoCMS: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFData](../corefoundation/cfdata.md) object. Empty for ad-hoc signed code.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoCMS (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the CMS cryptographic object that secures the code signature.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoCMS;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDataRef](../corefoundation/cfdata.md) object. Empty for ad-hoc signed code.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
