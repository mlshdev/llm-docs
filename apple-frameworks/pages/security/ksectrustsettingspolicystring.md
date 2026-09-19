> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksectrustsettingspolicystring

# kSecTrustSettingsPolicyString (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A string containing policy-specific data.

## Declaration

```swift
var kSecTrustSettingsPolicyString: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) object. For the SMIME policy, this string contains an email address. For the SSL policy, it contains a host name.

# kSecTrustSettingsPolicyString (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A string containing policy-specific data.

## Declaration

```objectivec
#define kSecTrustSettingsPolicyString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) object. For the SMIME policy, this string contains an email address. For the SSL policy, it contains a host name.
