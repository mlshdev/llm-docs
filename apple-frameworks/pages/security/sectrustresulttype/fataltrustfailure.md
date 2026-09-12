> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/fataltrustfailure](https://developer.apple.com/documentation/security/sectrustresulttype/fataltrustfailure)

# SecTrustResultType.fatalTrustFailure (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust is denied and no simple fix is available.

## Declaration

```swift
case fatalTrustFailure
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation failed because a certificate in the chain is defective. This usually represents a fundamental defect in the certificate data, such as an invalid encoding for a critical `subjectAltName` extension, an unsupported critical extension, or some other critical portion of the certificate that couldn’t be interpreted. Changing parameter values and reevaluating is unlikely to succeed unless you provide different certificates.

You might receive the [SecTrustResultType.fatalTrustFailure](fataltrustfailure.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings(\_:\_:\_:)](../sectrustsettingssettrustsettings%28______%29.md) method.

# kSecTrustResultFatalTrustFailure (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust is denied and no simple fix is available.

## Declaration

```objectivec
kSecTrustResultFatalTrustFailure
```

<a id="Discussion"></a>

## Discussion

This value indicates that evaluation failed because a certificate in the chain is defective. This usually represents a fundamental defect in the certificate data, such as an invalid encoding for a critical `subjectAltName` extension, an unsupported critical extension, or some other critical portion of the certificate that couldn’t be interpreted. Changing parameter values and reevaluating is unlikely to succeed unless you provide different certificates.

You might receive the [kSecTrustResultFatalTrustFailure](fataltrustfailure.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings](../sectrustsettingssettrustsettings%28______%29.md) method.
