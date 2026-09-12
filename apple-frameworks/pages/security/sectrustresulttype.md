> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustresulttype](https://developer.apple.com/documentation/security/sectrustresulttype)

# SecTrustResultType (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust evaluation result codes.

## Declaration

```swift
enum SecTrustResultType
```

<a id="overview"></a>

## Overview

You get one of these constants when you call the [SecTrustGetTrustResult(\_:\_:)](sectrustgettrustresult%28____%29.md) method after evaluating a trust instance with either the [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) method or the [SecTrustEvaluateAsyncWithError(\_:\_:\_:)](sectrustevaluateasyncwitherror%28______%29.md) method. If evaluation fails and [SecTrustGetTrustResult(\_:\_:)](sectrustgettrustresult%28____%29.md) reports [SecTrustResultType.recoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md), you might be able to change parameters like the evaluation date, and reevaluate to obtain a passing result, as described in [Configuring a Trust](configuring-a-trust.md).

See an individual constant below for more information about how to handle that result type in your app.

## Topics

### Result Codes

- [SecTrustResultType.unspecified](sectrustresulttype/unspecified.md): The user did not specify a trust setting.
- [SecTrustResultType.proceed](sectrustresulttype/proceed.md): The user granted permission to trust the certificate for the purposes designated in the specified policies.
- [SecTrustResultType.deny](sectrustresulttype/deny.md): The user specified that the certificate should not be trusted.
- [SecTrustResultType.recoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md): Trust is denied, but recovery may be possible.
- [SecTrustResultType.fatalTrustFailure](sectrustresulttype/fataltrustfailure.md): Trust is denied and no simple fix is available.
- [SecTrustResultType.otherError](sectrustresulttype/othererror.md): A value that indicates a failure other than trust evaluation.
- [SecTrustResultType.invalid](sectrustresulttype/invalid.md): An indication of an invalid setting or result.
- [SecTrustResultType.confirm](sectrustresulttype/confirm.md): Deprecated. User confirmation is required before proceeding.

### Initializers

- [init(rawValue:)](sectrustresulttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecTrustResultType (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Trust evaluation result codes.

## Declaration

```objectivec
enum SecTrustResultType : uint32_t;
```

<a id="overview"></a>

## Overview

You get one of these constants when you call the [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) method after evaluating a trust instance with either the [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) method or the [SecTrustEvaluateAsyncWithError](sectrustevaluateasyncwitherror%28______%29.md) method. If evaluation fails and [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) reports [kSecTrustResultRecoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md), you might be able to change parameters like the evaluation date, and reevaluate to obtain a passing result, as described in [Configuring a Trust](configuring-a-trust.md).

See an individual constant below for more information about how to handle that result type in your app.

## Topics

### Result Codes

- [kSecTrustResultUnspecified](sectrustresulttype/unspecified.md): The user did not specify a trust setting.
- [kSecTrustResultProceed](sectrustresulttype/proceed.md): The user granted permission to trust the certificate for the purposes designated in the specified policies.
- [kSecTrustResultDeny](sectrustresulttype/deny.md): The user specified that the certificate should not be trusted.
- [kSecTrustResultRecoverableTrustFailure](sectrustresulttype/recoverabletrustfailure.md): Trust is denied, but recovery may be possible.
- [kSecTrustResultFatalTrustFailure](sectrustresulttype/fataltrustfailure.md): Trust is denied and no simple fix is available.
- [kSecTrustResultOtherError](sectrustresulttype/othererror.md): A value that indicates a failure other than trust evaluation.
- [kSecTrustResultInvalid](sectrustresulttype/invalid.md): An indication of an invalid setting or result.
- [kSecTrustResultConfirm](sectrustresulttype/confirm.md): Deprecated. User confirmation is required before proceeding.
