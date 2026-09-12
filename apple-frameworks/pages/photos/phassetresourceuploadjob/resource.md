> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/resource](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/resource)

# resource (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0) · Mac Catalyst 26.1+ (deprecated in 27.0)

The asset resource this job promises to upload.

> Use +\[PHAssetResource assetResourceForUploadJob:\] instead

## Declaration

```swift
var resource: PHAssetResource { get }
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# resource (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ (deprecated in 27.0) · iPadOS 26.1+ (deprecated in 27.0)

The asset resource this job promises to upload.

> Use +\[PHAssetResource assetResourceForUploadJob:\] instead

## Declaration

```objectivec
@property (strong, readonly) PHAssetResource * resource;
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
