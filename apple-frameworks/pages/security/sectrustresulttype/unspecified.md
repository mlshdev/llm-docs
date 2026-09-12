> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/unspecified](https://developer.apple.com/documentation/security/sectrustresulttype/unspecified)

# SecTrustResultType.unspecified (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user did not specify a trust setting.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation reached an (implicitly trusted) anchor certificate without any evaluation failures, but never encountered any explicitly stated user-trust preference. This is the most common return value. The Keychain Access utility refers to this value as the “Use System Policy,” which is the default user setting.

When receiving this value, most apps should trust the chain. If you want to ask the user what to do in macOS, use an instance of the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class.

When you evaluate a trust, the evaluation starts with the leaf certificate and works through the chain down to the anchor. The [SecTrustSettingsCopyTrustSettings(\_:\_:\_:)](../sectrustsettingscopytrustsettings%28______%29.md) method returns the user trust settings of the first certificate for which the result code is other than [SecTrustResultType.unspecified](unspecified.md).

# kSecTrustResultUnspecified (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user did not specify a trust setting.

## Declaration

```objectivec
kSecTrustResultUnspecified
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation reached an (implicitly trusted) anchor certificate without any evaluation failures, but never encountered any explicitly stated user-trust preference. This is the most common return value. The Keychain Access utility refers to this value as the “Use System Policy,” which is the default user setting.

When receiving this value, most apps should trust the chain. If you want to ask the user what to do in macOS, use an instance of the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class.

When you evaluate a trust, the evaluation starts with the leaf certificate and works through the chain down to the anchor. The [SecTrustSettingsCopyTrustSettings](../sectrustsettingscopytrustsettings%28______%29.md) method returns the user trust settings of the first certificate for which the result code is other than [kSecTrustResultUnspecified](unspecified.md).
