> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondownloaddelegate/connection(_:didwritedata:totalbyteswritten:expectedtotalbytes:)](https://developer.apple.com/documentation/foundation/nsurlconnectiondownloaddelegate/connection(_:didwritedata:totalbyteswritten:expectedtotalbytes:))

# connection(\_:didWriteData:totalBytesWritten:expectedTotalBytes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.

## Declaration

```swift
optional func connection(_ connection: NSURLConnection, didWriteData bytesWritten: Int64, totalBytesWritten: Int64, expectedTotalBytes: Int64)
```

## Parameters

- `connection`: The URL connection object downloading the asset.
- `bytesWritten`: The number of bytes written since the last call of this method.
- `totalBytesWritten`: The total number of bytes of the downloading asset that have been written to the file.
- `expectedTotalBytes`: The total number of bytes of the URL asset once it is completely downloaded and written to a file. This parameter can be zero if the total number of bytes is not known.

<a id="Discussion"></a>

## Discussion

This method is invoked repeatedly during the download of a URL asset to the destination file. The delegate typically uses the values of the three “bytes” parameters to update a progress indicator in the application’s user interface.

## See Also

### Managing Downloads of URL Assets

- [connectionDidResumeDownloading(\_:totalBytesWritten:expectedTotalBytes:)](connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.
- [connectionDidFinishDownloading(\_:destinationURL:)](connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.

# connection:didWriteData:totalBytesWritten:expectedTotalBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sent to the delegate to deliver progress information for a download of a URL asset to a destination file.

## Declaration

```objectivec
- (void) connection:(NSURLConnection *) connection didWriteData:(long long) bytesWritten totalBytesWritten:(long long) totalBytesWritten expectedTotalBytes:(long long) expectedTotalBytes;
```

## Parameters

- `connection`: The URL connection object downloading the asset.
- `bytesWritten`: The number of bytes written since the last call of this method.
- `totalBytesWritten`: The total number of bytes of the downloading asset that have been written to the file.
- `expectedTotalBytes`: The total number of bytes of the URL asset once it is completely downloaded and written to a file. This parameter can be zero if the total number of bytes is not known.

<a id="Discussion"></a>

## Discussion

This method is invoked repeatedly during the download of a URL asset to the destination file. The delegate typically uses the values of the three “bytes” parameters to update a progress indicator in the application’s user interface.

## See Also

### Managing Downloads of URL Assets

- [connectionDidResumeDownloading:totalBytesWritten:expectedTotalBytes:](connectiondidresumedownloading%28__totalbyteswritten_expectedtotalbytes_%29.md): Sent to the delegate when an URL connection resumes downloading a URL asset that was earlier suspended.
- [connectionDidFinishDownloading:destinationURL:](connectiondidfinishdownloading%28__destinationurl_%29.md): Sent to the delegate when the URL connection has successfully downloaded the URL asset to a destination file.
