> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfostatus](https://developer.apple.com/documentation/security/kseccodeinfostatus)

# kSecCodeInfoStatus (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the set of code status flags for the running code.

## Declaration

```swift
let kSecCodeInfoStatus: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md) object. This is a snapshot taken at the time the function is executed and may be out of date by the time you examine it. Note, however, that some flag values cannot be changed and are therefore permanently reliable. See [SecCodeStatus](seccodestatus.md) for a list of possible values.

Specify the [kSecCSDynamicInformation](kseccsdynamicinformation.md) flag when calling the [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) function to get this information.

# kSecCodeInfoStatus (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value is the set of code status flags for the running code.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoStatus;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md) object. This is a snapshot taken at the time the function is executed and may be out of date by the time you examine it. Note, however, that some flag values cannot be changed and are therefore permanently reliable. See [SecCodeStatus](seccodestatus.md) for a list of possible values.

Specify the [kSecCSDynamicInformation](kseccsdynamicinformation.md) flag when calling the [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) function to get this information.
