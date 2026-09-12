> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinforequirements](https://developer.apple.com/documentation/security/kseccodeinforequirements)

# kSecCodeInfoRequirements (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the internal requirements of the code as a text string in canonical syntax.

## Declaration

```swift
let kSecCodeInfoRequirements: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) object. If there is an explicit designated requirement, then it’s included in this text string.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoRequirements (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the internal requirements of the code as a text string in canonical syntax.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoRequirements;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) object. If there is an explicit designated requirement, then it’s included in this text string.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
