> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondownloaddelegate/connectiondidfinishdownloading(_:destinationurl:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondownloaddelegate/connectiondidfinishdownloading(_:destinationurl:))

# connectionDidFinishDownloading(\_:destinationURL:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

## Declaration

```swift
func connectionDidFinishDownloading(_ connection: NSURLConnection, destinationURL: URL)
```

## Parameters

- `connection`: The URL connection object that downloaded the asset.
- `destinationURL`: A file URL specifying a destination in the file system. For iOS applications, this is a location in the application sandbox.

<a id="Discussion"></a>

## Discussion

This method will be called once after a successful download. The file downloaded to `destinationURL` is guaranteed to exist there only for the duration of this method implementation; the delegate should copy or move the file to a more persistent and appropriate location.

## See Also

### Managing Downloads of URL Assets

- [connection(\_:didWriteData:totalBytesWritten:expectedTotalBytes:)](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidResumeDownloading(\_:totalBytesWritten:expectedTotalBytes:)](connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.

# connectionDidFinishDownloading:destinationURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

## Declaration

```objectivec
- (void) connectionDidFinishDownloading:(NSURLConnection *) connection destinationURL:(NSURL *) destinationURL;
```

## Parameters

- `connection`: The URL connection object that downloaded the asset.
- `destinationURL`: A file URL specifying a destination in the file system. For iOS applications, this is a location in the application sandbox.

<a id="Discussion"></a>

## Discussion

This method will be called once after a successful download. The file downloaded to `destinationURL` is guaranteed to exist there only for the duration of this method implementation; the delegate should copy or move the file to a more persistent and appropriate location.

## See Also

### Managing Downloads of URL Assets

- [connection:didWriteData:totalBytesWritten:expectedTotalBytes:](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidResumeDownloading:totalBytesWritten:expectedTotalBytes:](connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.
