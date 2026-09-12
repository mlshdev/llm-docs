> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/discovering-why-a-trust-evaluation-failed](https://developer.apple.com/documentation/security/discovering-why-a-trust-evaluation-failed)

# Discovering Why a Trust Evaluation Failed (Swift)

**Framework:** Security  
**Kind:** Article

Determine whether you can recover from a failed trust evaluation.

<a id="overview"></a>

## Overview

Many factors affect the outcome of a trust evaluation. These include whether the system can locate all of the intermediate certificates, the validity of the certificates in the chain, and the characteristics of the certificates. Some issues, like a revoked certificate, result in an absolute failure and should *not* be circumvented. In other cases, you might get a different result by changing the conditions of the evaluation. For example, an expired certificate might have been valid when the corresponding identity was used to sign a document.

To get the specific reason for trust failure, examine the error parameter provided in the evaluation callback described in [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md). The error’s code indicates the reason, or in the case of multiple errors, the most serious reason for the failure. For example, a revoked certificate results in an error with the code [errSecCertificateRevoked](errseccertificaterevoked.md), while an expired certificate produces [errSecCertificateExpired](errseccertificateexpired.md).

To determine whether the system considers the failure recoverable, use the [SecTrustGetTrustResult(\_:\_:)](sectrustgettrustresult%28____%29.md) method.

**Swift**

```swift
var trustResult = SecTrustResultType.invalid
SecTrustGetTrustResult(trust, &trustResult)
if trustResult == .recoverableTrustFailure {
    // Make changes and try again.
}
```

**Objective-C**

```objc
SecTrustResultType trustResult;
SecTrustGetTrustResult(trust, &trustResult);
if (trustResult == kSecTrustResultRecoverableTrustFailure) {
    // Make changes and try again.
}
```

For a result of [SecTrustResultType.recoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md), and based on the error you receive, you may be able to remedy problems by reconfiguring and reevaluating the trust, as described in [Configuring a Trust](configuring-a-trust.md).

# Discovering Why a Trust Evaluation Failed (Objective-C)

**Framework:** Security  
**Kind:** Article

Determine whether you can recover from a failed trust evaluation.

<a id="overview"></a>

## Overview

Many factors affect the outcome of a trust evaluation. These include whether the system can locate all of the intermediate certificates, the validity of the certificates in the chain, and the characteristics of the certificates. Some issues, like a revoked certificate, result in an absolute failure and should *not* be circumvented. In other cases, you might get a different result by changing the conditions of the evaluation. For example, an expired certificate might have been valid when the corresponding identity was used to sign a document.

To get the specific reason for trust failure, examine the error parameter provided in the evaluation callback described in [Evaluating a Trust and Parsing the Result](evaluating-a-trust-and-parsing-the-result.md). The error’s code indicates the reason, or in the case of multiple errors, the most serious reason for the failure. For example, a revoked certificate results in an error with the code [errSecCertificateRevoked](errseccertificaterevoked.md), while an expired certificate produces [errSecCertificateExpired](errseccertificateexpired.md).

To determine whether the system considers the failure recoverable, use the [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) method.

**Swift**

```swift
var trustResult = SecTrustResultType.invalid
SecTrustGetTrustResult(trust, &trustResult)
if trustResult == .recoverableTrustFailure {
    // Make changes and try again.
}
```

**Objective-C**

```objc
SecTrustResultType trustResult;
SecTrustGetTrustResult(trust, &trustResult);
if (trustResult == kSecTrustResultRecoverableTrustFailure) {
    // Make changes and try again.
}
```

For a result of [kSecTrustResultRecoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md), and based on the error you receive, you may be able to remedy problems by reconfiguring and reevaluating the trust, as described in [Configuring a Trust](configuring-a-trust.md).
