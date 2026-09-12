> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinforequirementdata](https://developer.apple.com/documentation/security/kseccodeinforequirementdata)

# kSecCodeInfoRequirementData (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the internal requirements of the code as a binary blob.

## Declaration

```swift
let kSecCodeInfoRequirementData: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFData](../corefoundation/cfdata.md) object. If there is an explicit designated requirement, then it’s included in this data blob.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoRequirementData (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the internal requirements of the code as a binary blob.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoRequirementData;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDataRef](../corefoundation/cfdata.md) object. If there is an explicit designated requirement, then it’s included in this data blob.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
