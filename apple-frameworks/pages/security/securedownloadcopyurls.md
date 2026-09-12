> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/securedownloadcopyurls](https://developer.apple.com/documentation/security/securedownloadcopyurls)

# SecureDownloadCopyURLs

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 12.0)

Returns a list of URLs from which the data can be downloaded.

## Declaration

```objectivec
OSStatus SecureDownloadCopyURLs(SecureDownloadRef downloadRef, CFArrayRef*urls);
```

## Parameters

- `downloadRef`: The secure download object to query.
- `urls`: A pointer to a [CFArrayRef](../corefoundation/cfarray.md) object that the function sets to point at a new array containing one or more [CFURLRef](../corefoundation/cfurl.md) objects indicating the urls to download.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Download Result Codes](secure-download-result-codes.md).

<a id="Discussion"></a>

## Discussion

The first URL in the list is the preferred download location. The other URLs are backup locations in case earlier locations in the list can’t be accessed.
