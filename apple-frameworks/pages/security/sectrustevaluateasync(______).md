> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustevaluateasync(_:_:_:)](https://developer.apple.com/documentation/security/sectrustevaluateasync(_:_:_:))

# SecTrustEvaluateAsync(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15) · tvOS 7.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 6.0)

Evaluates a trust object asynchronously on the specified dispatch queue.

> Use [SecTrustEvaluateAsyncWithError(\_:\_:\_:)](sectrustevaluateasyncwitherror%28______%29.md) instead.

## Declaration

```swift
func SecTrustEvaluateAsync(_ trust: SecTrust, _ queue: dispatch_queue_t?, _ result: @escaping SecTrustCallback) -> OSStatus
```

## Parameters

- `trust`: The trust management object to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `queue`: The dispatch queue on which the result block should execute.
- `result`: A block called with the result of evaluation. See [SecTrustResultType](sectrustresulttype.md) for descriptions of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is functionally equivalent to [SecTrustEvaluate(\_:\_:)](sectrustevaluate%28____%29.md) except that it performs evaluation asynchronously and calls a block when evaluation completes. For a detailed discussion of the evaluation process, see [SecTrustEvaluate(\_:\_:)](sectrustevaluate%28____%29.md).

# SecTrustEvaluateAsync (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.15) · tvOS 7.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 6.0)

Evaluates a trust object asynchronously on the specified dispatch queue.

> Use [SecTrustEvaluateAsyncWithError](sectrustevaluateasyncwitherror%28______%29.md) instead.

## Declaration

```objectivec
OSStatus SecTrustEvaluateAsync(SecTrustRef trust, dispatch_queue_t queue, SecTrustCallback result);
```

## Parameters

- `trust`: The trust management object to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `queue`: The dispatch queue on which the result block should execute.
- `result`: A block called with the result of evaluation. See [SecTrustResultType](sectrustresulttype.md) for descriptions of possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is functionally equivalent to [SecTrustEvaluate](sectrustevaluate%28____%29.md) except that it performs evaluation asynchronously and calls a block when evaluation completes. For a detailed discussion of the evaluation process, see [SecTrustEvaluate](sectrustevaluate%28____%29.md).
