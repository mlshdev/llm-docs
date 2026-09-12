> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustgetcssmresult](https://developer.apple.com/documentation/security/sectrustgetcssmresult)

# SecTrustGetCssmResult

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.7)

Retrieves the CSSM trust result.

## Declaration

```objectivec
OSStatus SecTrustGetCssmResult(SecTrustRef trust, CSSM_TP_VERIFY_CONTEXT_RESULT_PTR*result);
```

## Parameters

- `trust`: A trust management object that has previously been sent to the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function for evaluation.
- `result`: On return, points to the CSSM trust result pointer. You should not modify or free this data, as it is owned by the system.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

After calling the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function, you can call the [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) function or the `SecTrustGetCssmResult` function to get information about the certificates in the certificate chain and everything that might be wrong with each certificate. Whereas the [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md) function returns the information in a form that you can interpret without extensive knowledge of CSSM, the `SecTrustGetCssmResult` function returns information in a form that can be passed directly to CSSM functions. See *Common Security: CDSA and CSSM, version 2 (with corrigenda)* from The Open Group ([http://www.opengroup.org/security/cdsa.htm](http://www.opengroup.org/security/cdsa.htm) for more information about the `CSSM_TP_VERIFY_CONTEXT_RESULT` structure pointed to by the `result` parameter.

It is safe to call this function concurrently on two or more threads as long as it is not used to get values from a trust management object that is simultaneously being changed by another function. For example, you can call this function on two threads at the same time, but not if you are simultaneously calling the [SecTrustSetVerifyDate](sectrustsetverifydate%28____%29.md) function for the same trust management object on another thread.

## See Also

### Related Documentation

- [SecTrustGetTrustResult](sectrustgettrustresult%28____%29.md): Returns the result code from the most recent trust evaluation.
