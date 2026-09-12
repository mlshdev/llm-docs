> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/type-swift.property](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/type-swift.property)

# type (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The type of this upload job.

## Declaration

```swift
var type: PHAssetResourceUploadJob.Type { get }
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Inspecting a job

- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# type (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The type of this upload job.

## Declaration

```objectivec
@property (readonly) PHAssetResourceUploadJobType type;
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Inspecting a job

- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
