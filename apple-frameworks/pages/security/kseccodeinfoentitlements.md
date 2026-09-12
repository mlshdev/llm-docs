> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfoentitlements](https://developer.apple.com/documentation/security/kseccodeinfoentitlements)

# kSecCodeInfoEntitlements (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value represents the embedded entitlement blob of the code, if any.

## Declaration

```swift
let kSecCodeInfoEntitlements: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFData](../corefoundation/cfdata.md) object.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) to get this information.

# kSecCodeInfoEntitlements (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value represents the embedded entitlement blob of the code, if any.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoEntitlements;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDataRef](../corefoundation/cfdata.md) object.

Specify the [kSecCSRequirementInformation](kseccsrequirementinformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) to get this information.
