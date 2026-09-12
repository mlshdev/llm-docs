> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/securedownloadcopyname](https://developer.apple.com/documentation/security/securedownloadcopyname)

# SecureDownloadCopyName

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns the printable name of the download ticket.

## Declaration

```objectivec
OSStatus SecureDownloadCopyName(SecureDownloadRef downloadRef, CFStringRef*name);
```

## Parameters

- `downloadRef`: The secure download to query.
- `name`: A pointer to a CFStringRef object that the function fills with the secure download’s name.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).
