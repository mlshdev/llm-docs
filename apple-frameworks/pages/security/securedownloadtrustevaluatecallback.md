> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/securedownloadtrustevaluatecallback](https://developer.apple.com/documentation/security/securedownloadtrustevaluatecallback)

# SecureDownloadTrustEvaluateCallback

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Optionally queries the user how to handle a failed trust evaluation.

## Declaration

```objectivec
typedef enum SecTrustResultType (*)(struct __SecTrust *, enum SecTrustResultType, void *) SecureDownloadTrustEvaluateCallback;
```

## Parameters

- `trustRef`: The trust used for this evaluation.
- `result`: The result of the trust evaluation.
- `evaluateContext`: An arbitrary value that you passed in as the `evaluateContext` parameter to the [SecureDownloadCreateWithTicket](securedownloadcreatewithticket.md) function.

<a id="return-value"></a>

## Return Value

A trust evaluation result.
