> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingsallowederror](https://developer.apple.com/documentation/security/ksectrustsettingsallowederror)

# kSecTrustSettingsAllowedError (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number which, if encountered during certificate verification, is ignored for that certificate.

## Declaration

```swift
var kSecTrustSettingsAllowedError: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md) object containing an `SInt32` value indicating a `CSSM_RETURN` result code.

# kSecTrustSettingsAllowedError (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number which, if encountered during certificate verification, is ignored for that certificate.

## Declaration

```objectivec
#define kSecTrustSettingsAllowedError
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md) object containing an `SInt32` value indicating a `CSSM_RETURN` result code.
