> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfotime](https://developer.apple.com/documentation/security/kseccodeinfotime)

# kSecCodeInfoTime (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the signing date embedded in the code signature.

## Declaration

```swift
let kSecCodeInfoTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDate](../corefoundation/cfdate.md) object. Note that a signer is able to omit this date or pre-date it. Therefore, this is not necessarily the date the code was actually signed. However, you do know that this is the date the signer wanted you to see. Ad-hoc signatures never have secured signing dates.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoTime (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the signing date embedded in the code signature.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoTime;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDateRef](../corefoundation/cfdate.md) object. Note that a signer is able to omit this date or pre-date it. Therefore, this is not necessarily the date the code was actually signed. However, you do know that this is the date the signer wanted you to see. Ad-hoc signatures never have secured signing dates.

Specify the [kSecCSSigningInformation](kseccssigninginformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
