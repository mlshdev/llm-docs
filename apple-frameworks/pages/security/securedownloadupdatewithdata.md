> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/securedownloadupdatewithdata

# SecureDownloadUpdateWithData

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Checks data received during download for validity.

## Declaration

```objectivec
OSStatus SecureDownloadUpdateWithData(SecureDownloadRef downloadRef, CFDataRef data);
```

## Parameters

- `downloadRef`: The secure download object to query.
- `data`: The data to check.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md). If the data is invalid, the result code is `enum (unnamed)-3yczz/errSecureDownloadInvalidDownload`.

<a id="Discussion"></a>

## Discussion

Call this function each time data is received.
