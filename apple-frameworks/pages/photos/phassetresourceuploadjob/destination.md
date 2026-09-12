> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/destination](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/destination)

# destination (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The destination to send the job’s resource.

## Declaration

```swift
var destination: URLRequest { get }
```

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# destination (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The destination to send the job’s resource.

## Declaration

```objectivec
@property (strong, readonly) NSURLRequest * destination;
```

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
