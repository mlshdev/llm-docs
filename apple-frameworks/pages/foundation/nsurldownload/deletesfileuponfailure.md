> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/deletesfileuponfailure](https://developer.apple.com/documentation/foundation/nsurldownload/deletesfileuponfailure)

# deletesFileUponFailure (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

## Declaration

```swift
var deletesFileUponFailure: Bool { get set }
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if partially downloaded files should be deleted when a download stops prematurely, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Resuming partial downloads

- [canResumeDownloadDecoded(withEncodingMIMEType:)](canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [init(resumeData:delegate:path:)](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](resumedata.md): Returns the resume data for a download that is not yet complete.

# deletesFileUponFailure (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

## Declaration

```objectivec
@property BOOL deletesFileUponFailure;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if partially downloaded files should be deleted when a download stops prematurely, [false](https://developer.apple.com/documentation/swift/false) otherwise. The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Resuming partial downloads

- [canResumeDownloadDecodedWithEncodingMIMEType:](canresumedownloaddecoded%28withencodingmimetype_%29.md): Returns whether a URL download object can resume a download that was decoded with the specified MIME type.
- [initWithResumeData:delegate:path:](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](resumedata.md): Returns the resume data for a download that is not yet complete.
