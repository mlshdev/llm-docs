> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/securedownloadtrustsetupcallback

# SecureDownloadTrustSetupCallback

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Determines whether trust for a particular signer should be evaluated.

## Declaration

```objectivec
typedef enum _SecureDownloadTrustCallbackResult (*)(struct __SecTrust *, void *) SecureDownloadTrustSetupCallback;
```

## Parameters

- `trustRef`: The trust used for this evaluation.
- `setupContext`: An arbitrary value that you passed in as the `setupContext` parameter to the [SecureDownloadCreateWithTicket](securedownloadcreatewithticket.md) function.

<a id="return-value"></a>

## Return Value

A trust callback result that indicates whether or not a signer should be evaluated.
