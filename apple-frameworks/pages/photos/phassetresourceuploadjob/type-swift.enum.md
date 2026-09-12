> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/type-swift.enum](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/type-swift.enum)

# PHAssetResourceUploadJob.Type (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

Indicates whether a job downloads and then uploads an asset to the server or only downloads it.

## Declaration

```swift
enum `Type`
```

## Topics

### Enumeration Cases

- [PHAssetResourceUploadJob.Type.downloadOnly](type-swift.enum/downloadonly.md): A download job type (will download the resource from iCloud if required)
- [PHAssetResourceUploadJob.Type.upload](type-swift.enum/upload.md): An upload job type (will download the resource from iCloud if required. then upload)

### Initializers

- [init(rawValue:)](type-swift.enum/init%28rawvalue_%29.md)

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
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

# PHAssetResourceUploadJobType (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

Indicates whether a job downloads and then uploads an asset to the server or only downloads it.

## Declaration

```objectivec
enum PHAssetResourceUploadJobType : int16_t;
```

## Topics

### Enumeration Cases

- [PHAssetResourceUploadJobTypeDownloadOnly](type-swift.enum/downloadonly.md): A download job type (will download the resource from iCloud if required)
- [PHAssetResourceUploadJobTypeUpload](type-swift.enum/upload.md): An upload job type (will download the resource from iCloud if required. then upload)

## See Also

### Inspecting a job

- [type](type-swift.property.md): The type of this upload job.
- [destination](destination.md): The destination to send the job’s resource.
- [resource](resource.md): Deprecated. The asset resource this job promises to upload.
- [state](state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](error.md): The error that caused the job to fail.
- [responseHeaderFields](responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.
