> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/resumedata](https://developer.apple.com/documentation/foundation/nsurldownload/resumedata)

# resumeData (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns the resume data for a download that is not yet complete.

## Declaration

```swift
var resumeData: Data? { get }
```

<a id="return-value"></a>

## Return Value

The resume data for a download that is not yet complete. This data represents the necessary state information that an `NSURLDownload` object needs to resume a download. The resume data can later be used when initializing a download with [init(resumeData:delegate:path:)](init%28resumedata_delegate_path_%29.md). Returns `nil` if the download is not able to be resumed.

<a id="Discussion"></a>

## Discussion

Resume data is returned only if both the protocol and the server support resuming. For details on how to resume a connection, see the documentation for [init(resumeData:delegate:path:)](init%28resumedata_delegate_path_%29.md).

## See Also

### Resuming partial downloads

- [canResumeDownloadDecoded(withEncodingMIMEType:)](canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [init(resumeData:delegate:path:)](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

# resumeData (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns the resume data for a download that is not yet complete.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * resumeData;
```

<a id="return-value"></a>

## Return Value

The resume data for a download that is not yet complete. This data represents the necessary state information that an `NSURLDownload` object needs to resume a download. The resume data can later be used when initializing a download with [initWithResumeData:delegate:path:](init%28resumedata_delegate_path_%29.md). Returns `nil` if the download is not able to be resumed.

<a id="Discussion"></a>

## Discussion

Resume data is returned only if both the protocol and the server support resuming. For details on how to resume a connection, see the documentation for [initWithResumeData:delegate:path:](init%28resumedata_delegate_path_%29.md).

## See Also

### Resuming partial downloads

- [canResumeDownloadDecodedWithEncodingMIMEType:](canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [initWithResumeData:delegate:path:](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.
