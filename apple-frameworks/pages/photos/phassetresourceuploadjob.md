> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob](https://developer.apple.com/documentation/photos/phassetresourceuploadjob)

# PHAssetResourceUploadJob (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

An object that represents a request to upload an asset resource.

## Declaration

```swift
class PHAssetResourceUploadJob
```

<a id="overview"></a>

## Overview

Use within an application’s `com.apple.photos.background-upload` extension to request an upload of a [PHAssetResource](phassetresource.md) to a destination [NSURLRequest](../foundation/nsurlrequest.md).

When the extension’s principal class receives a call to [process()](phbackgroundresourceuploadextension/process%28%29.md) background uploads, it can create new [PHAssetResourceUploadJob](phassetresourceuploadjob.md) objects using [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md).

The maximum number of jobs that can be in flight is limited to the [jobLimit](phassetresourceuploadjob/joblimit.md). To make space for new jobs, you must call `PHAssetResourceUploadJobChangeRequest/fetchJobsWithAction:options:` and retry/acknowledge them with `PHAssetResourceUploadJobChangeRequest/acknowledge:` or [retry(destination:)](phassetresourceuploadjobchangerequest/retry%28destination_%29.md) respectively.

## Topics

### Fetching jobs

- [jobLimit](phassetresourceuploadjob/joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [fetchJobs(action:options:)](phassetresourceuploadjob/fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.
- [PHAssetResourceUploadJob.Action](phassetresourceuploadjob/action.md): An action to perform on an upload job.

### Inspecting a job

- [type](phassetresourceuploadjob/type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJob.Type](phassetresourceuploadjob/type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](phassetresourceuploadjob/destination.md): The destination to send the job’s resource.
- [resource](phassetresourceuploadjob/resource.md): Deprecated. The asset resource this job promises to upload.
- [state](phassetresourceuploadjob/state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJob.State](phassetresourceuploadjob/state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](phassetresourceuploadjob/error.md): The error that caused the job to fail.
- [responseHeaderFields](phassetresourceuploadjob/responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

## Relationships

### Inherits From

- [PHObject](phobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Background resource upload extensions

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md): Enable reliable cloud backup for photo library assets with background processing.
- [PHBackgroundResourceUploadExtension](phbackgroundresourceuploadextension.md): Deprecated.
- [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md): Use within an application’s `com.apple.photos.background-upload` extension to create and change [PHAssetResourceUploadJob](phassetresourceuploadjob.md) records.

# PHAssetResourceUploadJob (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

An object that represents a request to upload an asset resource.

## Declaration

```objectivec
@interface PHAssetResourceUploadJob : PHObject
```

<a id="overview"></a>

## Overview

Use within an application’s `com.apple.photos.background-upload` extension to request an upload of a [PHAssetResource](phassetresource.md) to a destination [NSURLRequest](../foundation/nsurlrequest.md).

When the extension’s principal class receives a call to [process()](phbackgroundresourceuploadextension/process%28%29.md) background uploads, it can create new [PHAssetResourceUploadJob](phassetresourceuploadjob.md) objects using [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md).

The maximum number of jobs that can be in flight is limited to the [jobLimit](phassetresourceuploadjob/joblimit.md). To make space for new jobs, you must call `PHAssetResourceUploadJobChangeRequest/fetchJobsWithAction:options:` and retry/acknowledge them with `PHAssetResourceUploadJobChangeRequest/acknowledge:` or [retryWithDestination:](phassetresourceuploadjobchangerequest/retry%28destination_%29.md) respectively.

## Topics

### Fetching jobs

- [jobLimit](phassetresourceuploadjob/joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [fetchJobsWithAction:options:](phassetresourceuploadjob/fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.
- [PHAssetResourceUploadJobAction](phassetresourceuploadjob/action.md): An action to perform on an upload job.

### Inspecting a job

- [type](phassetresourceuploadjob/type-swift.property.md): The type of this upload job.
- [PHAssetResourceUploadJobType](phassetresourceuploadjob/type-swift.enum.md): Indicates whether a job downloads and then uploads an asset to the server or only downloads it.
- [destination](phassetresourceuploadjob/destination.md): The destination to send the job’s resource.
- [resource](phassetresourceuploadjob/resource.md): Deprecated. The asset resource this job promises to upload.
- [state](phassetresourceuploadjob/state-swift.property.md): The state of this upload job.
- [PHAssetResourceUploadJobState](phassetresourceuploadjob/state-swift.enum.md): The stages of an upload job’s life cycle, from registered with the system through to completion.
- [error](phassetresourceuploadjob/error.md): The error that caused the job to fail.
- [responseHeaderFields](phassetresourceuploadjob/responseheaderfields.md): The HTTP response headers received from the server upon completion of the upload.

## Relationships

### Inherits From

- [PHObject](phobject.md)

## See Also

### Background resource upload extensions

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md): Enable reliable cloud backup for photo library assets with background processing.
- [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md): Use within an application’s `com.apple.photos.background-upload` extension to create and change [PHAssetResourceUploadJob](phassetresourceuploadjob.md) records.
