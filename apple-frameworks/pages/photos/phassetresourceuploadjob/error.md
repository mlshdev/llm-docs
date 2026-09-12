> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/error](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/error)

# error (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

The error that caused the job to fail.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="return-value"></a>

## Return Value

An error object describing the failure, or `nil` if the job has not failed.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This property is populated when the job reaches the `PHAssetResourceUploadJobStateFailed` state. It provides detailed information about why the upload failed, including network errors, server errors, or client-side errors.

> **Note**

> The error provided is sanitized and may not be the actual error returned from URLResponse.

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# error (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

The error that caused the job to fail.

## Declaration

```objectivec
@property (readonly, nullable) NSError * error;
```

<a id="return-value"></a>

## Return Value

An error object describing the failure, or `nil` if the job has not failed.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This property is populated when the job reaches the `PHAssetResourceUploadJobStateFailed` state. It provides detailed information about why the upload failed, including network errors, server errors, or client-side errors.

> **Note**

> The error provided is sanitized and may not be the actual error returned from URLResponse.

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
