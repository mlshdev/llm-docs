> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingspolicy](https://developer.apple.com/documentation/security/ksectrustsettingspolicy)

# kSecTrustSettingsPolicy (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A policy object specifying the certificate verification policy.

## Declaration

```swift
var kSecTrustSettingsPolicy: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [SecPolicy](secpolicy.md) object.

# kSecTrustSettingsPolicy (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A policy object specifying the certificate verification policy.

## Declaration

```objectivec
#define kSecTrustSettingsPolicy
```

<a id="Discussion"></a>

## Discussion

The value is a [SecPolicyRef](secpolicy.md) object.
