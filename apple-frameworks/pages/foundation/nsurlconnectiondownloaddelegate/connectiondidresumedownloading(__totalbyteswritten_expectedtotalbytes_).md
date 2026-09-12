> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondownloaddelegate/connectiondidresumedownloading(_:totalbyteswritten:expectedtotalbytes:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondownloaddelegate/connectiondidresumedownloading(_:totalbyteswritten:expectedtotalbytes:))

# connectionDidResumeDownloading(\_:totalBytesWritten:expectedTotalBytes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.

## Declaration

```swift
optional func connectionDidResumeDownloading(_ connection: NSURLConnection, totalBytesWritten: Int64, expectedTotalBytes: Int64)
```

## Parameters

- `connection`: The URL connection object downloading the asset.
- `totalBytesWritten`: The total number of bytes of the downloading asset that have been written to the destination file.
- `expectedTotalBytes`: The total number of bytes of the URL asset once it is completely downloaded and written to a file.

<a id="Discussion"></a>

## Discussion

This method is invoked once a suspended download of a URL asset resumes downloading. In response, the delegate can display a progress indicator, setting the initial value of the indicator to where it was when downloading was suspended. After the URL-connection object sends this message, it sends one or more [connection(\_:didWriteData:totalBytesWritten:expectedTotalBytes:)](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md) to the delegate until the download concludes.

## See Also

### Managing Downloads of URL Assets

- [connection(\_:didWriteData:totalBytesWritten:expectedTotalBytes:)](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidFinishDownloading(\_:destinationURL:)](connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

# connectionDidResumeDownloading:totalBytesWritten:expectedTotalBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.

## Declaration

```objectivec
- (void) connectionDidResumeDownloading:(NSURLConnection *) connection totalBytesWritten:(long long) totalBytesWritten expectedTotalBytes:(long long) expectedTotalBytes;
```

## Parameters

- `connection`: The URL connection object downloading the asset.
- `totalBytesWritten`: The total number of bytes of the downloading asset that have been written to the destination file.
- `expectedTotalBytes`: The total number of bytes of the URL asset once it is completely downloaded and written to a file.

<a id="Discussion"></a>

## Discussion

This method is invoked once a suspended download of a URL asset resumes downloading. In response, the delegate can display a progress indicator, setting the initial value of the indicator to where it was when downloading was suspended. After the URL-connection object sends this message, it sends one or more [connection:didWriteData:totalBytesWritten:expectedTotalBytes:](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md) to the delegate until the download concludes.

## See Also

### Managing Downloads of URL Assets

- [connection:didWriteData:totalBytesWritten:expectedTotalBytes:](connection%28__didwritedata_totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.
- [connectionDidFinishDownloading:destinationURL:](connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.
