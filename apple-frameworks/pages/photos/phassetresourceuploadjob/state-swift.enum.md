> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/state-swift.enum](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/state-swift.enum)

# PHAssetResourceUploadJob.State (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The stages of an upload job’s life cycle, from registered with the system through to completion.

## Declaration

```swift
enum State
```

## Topics

### States

- [PHAssetResourceUploadJob.State.registered](state-swift.enum/registered.md): The job has been registered.
- [PHAssetResourceUploadJob.State.pending](state-swift.enum/pending.md): A request has been made to send the asset resource to the destination, but has not yet been fulfilled.
- [PHAssetResourceUploadJob.State.succeeded](state-swift.enum/succeeded.md): The job has sent over successfully.
- [PHAssetResourceUploadJob.State.failed](state-swift.enum/failed.md): The job has failed to send over.
- [PHAssetResourceUploadJob.State.cancelled](state-swift.enum/cancelled.md): The job has been cancelled.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# PHAssetResourceUploadJobState (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The stages of an upload job’s life cycle, from registered with the system through to completion.

## Declaration

```objectivec
enum PHAssetResourceUploadJobState : NSInteger;
```

## Topics

### States

- [PHAssetResourceUploadJobStateRegistered](state-swift.enum/registered.md): The job has been registered.
- [PHAssetResourceUploadJobStatePending](state-swift.enum/pending.md): A request has been made to send the asset resource to the destination, but has not yet been fulfilled.
- [PHAssetResourceUploadJobStateSucceeded](state-swift.enum/succeeded.md): The job has sent over successfully.
- [PHAssetResourceUploadJobStateFailed](state-swift.enum/failed.md): The job has failed to send over.
- [PHAssetResourceUploadJobStateCancelled](state-swift.enum/cancelled.md): The job has been cancelled.

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
