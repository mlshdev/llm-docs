> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/securedownloadfinished](https://developer.apple.com/documentation/security/securedownloadfinished)

# SecureDownloadFinished

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Concludes the secure download process.

## Declaration

```objectivec
OSStatus SecureDownloadFinished(SecureDownloadRef downloadRef);
```

## Parameters

- `downloadRef`: The secure download object to finish.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this after all data has been received.
