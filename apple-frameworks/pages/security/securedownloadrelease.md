> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/securedownloadrelease

# SecureDownloadRelease

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Releases the memory associated with a secure download object.

## Declaration

```objectivec
OSStatus SecureDownloadRelease(SecureDownloadRef downloadRef);
```

## Parameters

- `downloadRef`: The secure download object to release.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).
