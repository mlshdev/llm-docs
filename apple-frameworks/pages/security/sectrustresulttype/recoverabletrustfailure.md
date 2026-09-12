> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype/recoverabletrustfailure](https://developer.apple.com/documentation/security/sectrustresulttype/recoverabletrustfailure)

# SecTrustResultType.recoverableTrustFailure (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust is denied, but recovery may be possible.

## Declaration

```swift
case recoverableTrustFailure
```

## Mentioned In

- [Discovering Why a Trust Evaluation Failed](../discovering-why-a-trust-evaluation-failed.md)

<a id="Discussion"></a>

## Discussion

This value indicates that you should not trust the chain as is, but that the chain could be trusted with some minor change to the evaluation context, such as ignoring expired certificates or adding another anchor to the set of trusted anchors.

The way you handle this depends on the situation. For example, if you are performing signature validation and you know when the message was originally received, you should check again using that date to see if the message was valid when you originally received it.

You can also call the [SecTrustCopyResult(\_:)](../sectrustcopyresult%28__%29.md) method to get more information about the results of the trust evaluation. If applicable, you can call one or more of the methods that start with `SecTrustSet` to correct or bypass the problem. Alternatively, in macOS, you can inform the user of the problem and call the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class to let the user change the trust setting for the certificate.

After correcting the problem, reevaluate the trust. Each time you call [SecTrustEvaluateWithError(\_:\_:)](../sectrustevaluatewitherror%28____%29.md) or [SecTrustEvaluateAsyncWithError(\_:\_:\_:)](../sectrustevaluateasyncwitherror%28______%29.md), the method discards the results of any previous evaluation and replaces them with the new results.

You might receive the [SecTrustResultType.recoverableTrustFailure](recoverabletrustfailure.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings(\_:\_:\_:)](../sectrustsettingssettrustsettings%28______%29.md) method.

# kSecTrustResultRecoverableTrustFailure (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust is denied, but recovery may be possible.

## Declaration

```objectivec
kSecTrustResultRecoverableTrustFailure
```

## Mentioned In

- [Discovering Why a Trust Evaluation Failed](../discovering-why-a-trust-evaluation-failed.md)

<a id="Discussion"></a>

## Discussion

This value indicates that you should not trust the chain as is, but that the chain could be trusted with some minor change to the evaluation context, such as ignoring expired certificates or adding another anchor to the set of trusted anchors.

The way you handle this depends on the situation. For example, if you are performing signature validation and you know when the message was originally received, you should check again using that date to see if the message was valid when you originally received it.

You can also call the [SecTrustCopyResult](../sectrustcopyresult%28__%29.md) method to get more information about the results of the trust evaluation. If applicable, you can call one or more of the methods that start with `SecTrustSet` to correct or bypass the problem. Alternatively, in macOS, you can inform the user of the problem and call the [SFCertificateTrustPanel](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel) class to let the user change the trust setting for the certificate.

After correcting the problem, reevaluate the trust. Each time you call [SecTrustEvaluateWithError](../sectrustevaluatewitherror%28____%29.md) or [SecTrustEvaluateAsyncWithError](../sectrustevaluateasyncwitherror%28______%29.md), the method discards the results of any previous evaluation and replaces them with the new results.

You might receive the [kSecTrustResultRecoverableTrustFailure](recoverabletrustfailure.md) value after an evaluation, but you can’t store the value as part of the user trust settings with a call to the [SecTrustSettingsSetTrustSettings](../sectrustsettingssettrustsettings%28______%29.md) method.
