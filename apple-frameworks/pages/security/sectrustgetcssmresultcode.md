> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgetcssmresultcode](https://developer.apple.com/documentation/security/sectrustgetcssmresultcode)

# SecTrustGetCssmResultCode

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.7)

Retrieves the CSSM result code from the most recent trust evaluation for a trust management object.

## Declaration

```objectivec
OSStatus SecTrustGetCssmResultCode(SecTrustRef trust, OSStatus *resultCode);
```

## Parameters

- `trust`: The trust management object for which you wish to retrieve a result code.
- `resultCode`: On return, the CSSM result code produced by the most recent call to the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function for the trust management object specified in the `trust` parameter.  The value of this parameter is undefined if `SecTrustEvaluate` has not been called.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecTrustNotAvailable](errsectrustnotavailable.md) if the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function has not been called for the specified trust.

<a id="Discussion"></a>

## Discussion

Whereas the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function returns one of the Security Framework result codes (see [Certificate, Key, and Trust Services](certificate-key-and-trust-services.md)), the `SecTrustGetCssmResultCode` function returns the CSSM result code as enumerated in `Security.framework/cssmerr.h`. Call this function to get a more specific reason for a failure than provided by `SecTrustEvaluate`. Other functions that might be of interest are the [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) function, which returns detailed results for each certificate in the certificate chain, and the [SecTrustGetCssmResult](sectrustgetcssmresult.md) function, which returns the results in a format that can be passed directly to CSSM functions.

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md): Returns the result code from the most recent trust evaluation.
