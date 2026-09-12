> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/responseheaderfields](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/responseheaderfields)

# responseHeaderFields (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

The HTTP response headers received from the server upon completion of the upload.

## Declaration

```swift
var responseHeaderFields: [String : String]? { get }
```

<a id="return-value"></a>

## Return Value

A dictionary of response header fields, or `nil` if the job has not completed or no HTTP response was received.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This property is populated when the job reaches a terminal state (`PHAssetResourceUploadJobStateSucceeded` or `PHAssetResourceUploadJobStateFailed`). It contains the HTTP response headers returned by the destination server.

Header field names are normalized to lowercase for consistent lookup.

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.

# responseHeaderFields (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

The HTTP response headers received from the server upon completion of the upload.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSString *> * responseHeaderFields;
```

<a id="return-value"></a>

## Return Value

A dictionary of response header fields, or `nil` if the job has not completed or no HTTP response was received.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This property is populated when the job reaches a terminal state (`PHAssetResourceUploadJobStateSucceeded` or `PHAssetResourceUploadJobStateFailed`). It contains the HTTP response headers returned by the destination server.

Header field names are normalized to lowercase for consistent lookup.

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
