> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/securedownloadcopycreationdate

# SecureDownloadCopyCreationDate

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns download ticket’s creation date.

## Declaration

```objectivec
OSStatus SecureDownloadCopyCreationDate(SecureDownloadRef downloadRef, CFDateRef*date);
```

## Parameters

- `downloadRef`: The secure download to query.
- `date`: A pointer to a [CFDateRef](../corefoundation/cfdate.md) object that the function fills with the download’s creation date.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).
