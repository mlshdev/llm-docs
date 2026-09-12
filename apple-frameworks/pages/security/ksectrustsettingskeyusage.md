> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingskeyusage](https://developer.apple.com/documentation/security/ksectrustsettingskeyusage)

# kSecTrustSettingsKeyUsage (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number specifying the operations for which the encryption key in this certificate can be used.

## Declaration

```swift
var kSecTrustSettingsKeyUsage: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md) object containing an `SInt32` value.

# kSecTrustSettingsKeyUsage (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number specifying the operations for which the encryption key in this certificate can be used.

## Declaration

```objectivec
#define kSecTrustSettingsKeyUsage
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md) object containing an `SInt32` value.
