> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/canresumedownloaddecoded(withencodingmimetype:)](https://developer.apple.com/documentation/foundation/nsurldownload/canresumedownloaddecoded(withencodingmimetype:))

# canResumeDownloadDecoded(withEncodingMIMEType:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.2+

Returns whether a URL download object can resume a download that was decoded with the specified MIME type.

## Declaration

```swift
class func canResumeDownloadDecoded(withEncodingMIMEType MIMEType: String) -> Bool
```

## Parameters

- `MIMEType`: The MIME type the caller wants to know about.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the URL download object can resume a download that was decoded with the specified MIME type, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The MIME type of a file, in conjunction with the value returned by the [download(\_:shouldDecodeSourceDataOfMIMEType:)](../nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md) delegate method, determines whether the `NSURLDownload` class should decode or decompress the incoming data as it is received.

Some compression techniques, such as the `DEFLATE` algorithm (`gzip`) use symbol dictionaries that vary during the compression process, making it impractical to decompress only a portion of the data starting in the middle. For this reason, this method returns [false](https://developer.apple.com/documentation/swift/false) unless both of the following conditions are met:

- The MIME type is of a type that the `NSURLDownload` class knows how to decompress or decode.
- The decoding can be safely resumed.

In practice, this method returns [true](https://developer.apple.com/documentation/swift/true) for MacBinary and BinHex, otherwise [false](https://developer.apple.com/documentation/swift/false).

If your app needs to be able to resume file downloads in `gzip` format, your [download(\_:shouldDecodeSourceDataOfMIMEType:)](../nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md) method must return [false](https://developer.apple.com/documentation/swift/false), and you must decode the resulting file yourself after you finish downloading it in its entirety.

## See Also

### Resuming partial downloads

- [init(resumeData:delegate:path:)](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](resumedata.md): Returns the resume data for a download that is not yet complete.
- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

# canResumeDownloadDecodedWithEncodingMIMEType: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.2+

Returns whether a URL download object can resume a download that was decoded with the specified MIME type.

## Declaration

```objectivec
+ (BOOL) canResumeDownloadDecodedWithEncodingMIMEType:(NSString *) MIMEType;
```

## Parameters

- `MIMEType`: The MIME type the caller wants to know about.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the URL download object can resume a download that was decoded with the specified MIME type, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The MIME type of a file, in conjunction with the value returned by the [download:shouldDecodeSourceDataOfMIMEType:](../nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md) delegate method, determines whether the `NSURLDownload` class should decode or decompress the incoming data as it is received.

Some compression techniques, such as the `DEFLATE` algorithm (`gzip`) use symbol dictionaries that vary during the compression process, making it impractical to decompress only a portion of the data starting in the middle. For this reason, this method returns [false](https://developer.apple.com/documentation/swift/false) unless both of the following conditions are met:

- The MIME type is of a type that the `NSURLDownload` class knows how to decompress or decode.
- The decoding can be safely resumed.

In practice, this method returns [true](https://developer.apple.com/documentation/swift/true) for MacBinary and BinHex, otherwise [false](https://developer.apple.com/documentation/swift/false).

If your app needs to be able to resume file downloads in `gzip` format, your [download:shouldDecodeSourceDataOfMIMEType:](../nsurldownloaddelegate/download%28__shoulddecodesourcedataofmimetype_%29.md) method must return [false](https://developer.apple.com/documentation/swift/false), and you must decode the resulting file yourself after you finish downloading it in its entirety.

## See Also

### Resuming partial downloads

- [initWithResumeData:delegate:path:](init%28resumedata_delegate_path_%29.md): Deprecated. Returns an initialized NSURLDownload object that will resume downloading the specified data to the specified file and begins the download.
- [resumeData](resumedata.md): Returns the resume data for a download that is not yet complete.
- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.
