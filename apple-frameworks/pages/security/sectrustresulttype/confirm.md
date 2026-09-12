> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/confirm](https://developer.apple.com/documentation/security/sectrustresulttype/confirm)

# SecTrustResultType.confirm (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

User confirmation is required before proceeding.

## Declaration

```swift
case confirm
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user previously chose to always be asked for permission before accepting one of the certificates in the chain. The Keychain Access utility refers to this value as “Ask Permission.” This return value is no longer used, but may occur in older versions of macOS.

Either ask the user what to do or reject the certificate. If you ask the user what to do in macOS, use an instance of the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class.

# kSecTrustResultConfirm (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.3+ (deprecated in 10.9) · tvOS 9.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

User confirmation is required before proceeding.

## Declaration

```objectivec
kSecTrustResultConfirm
```

<a id="Discussion"></a>

## Discussion

This value indicates that the user previously chose to always be asked for permission before accepting one of the certificates in the chain. The Keychain Access utility refers to this value as “Ask Permission.” This return value is no longer used, but may occur in older versions of macOS.

Either ask the user what to do or reject the certificate. If you ask the user what to do in macOS, use an instance of the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class.
