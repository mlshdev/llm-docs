> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/securedownloadgetdownloadsize](https://developer.apple.com/documentation/security/securedownloadgetdownloadsize)

# SecureDownloadGetDownloadSize

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the size of the expected download.

## Declaration

```objectivec
OSStatus SecureDownloadGetDownloadSize(SecureDownloadRef downloadRef, SInt64 *downloadSize);
```

## Parameters

- `downloadRef`: The secure download object to query.
- `downloadSize`: A pointer that the function fills with the the download size.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).
