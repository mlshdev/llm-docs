> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest)

# PHAssetResourceUploadJobChangeRequest (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Use within an application’s `com.apple.photos.background-upload` extension to create and change [PHAssetResourceUploadJob](phassetresourceuploadjob.md) records.

## Declaration

```swift
class PHAssetResourceUploadJobChangeRequest
```

<a id="overview"></a>

## Overview

When the extension’s principal class receives a call to `process` background uploads, it can create new [PHAssetResourceUploadJob](phassetresourceuploadjob.md)s through calls to perform changes on a PHPhotoLibrary using [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md) and any in-flight upload jobs can be handled by updating their state to mark them as acknowledged, or to be retried. The maximum number of jobs that can be in flight is limited to the `PHAssetResourceUploadJob.jobLimit`.

[PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md) can only be created or used within a photo library change block. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Creating a change request

- [init(for:)](phassetresourceuploadjobchangerequest/init%28for_%29.md): Creates a request for modifying the specified upload job.

### Creating jobs

- [creationRequestForDownloadJob(resource:)](phassetresourceuploadjobchangerequest/creationrequestfordownloadjob%28resource_%29.md): Creates a download-only job request for the specified asset resource.
- [creationRequestForJob(destination:resource:)](phassetresourceuploadjobchangerequest/creationrequestforjob%28destination_resource_%29.md): Creates an asset resource upload job and returns the change request.

### Processing jobs

- [acknowledge()](phassetresourceuploadjobchangerequest/acknowledge%28%29.md): Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](phassetresourceuploadjob/joblimit.md).
- [retry(destination:)](phassetresourceuploadjobchangerequest/retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](phassetresourceuploadjob/joblimit.md).
- [cancel()](phassetresourceuploadjobchangerequest/cancel%28%29.md): Cancels an upload job that is registered or pending.

### Accessing details about the job

- [placeholderForCreatedAssetResourceUploadJob](phassetresourceuploadjobchangerequest/placeholderforcreatedassetresourceuploadjob.md): A placeholder for the asset resource upload job created by this request.

### Deprecated

- [createJob(destination:resource:)](phassetresourceuploadjobchangerequest/createjob%28destination_resource_%29.md): Deprecated. Creates an asset resource upload job.

### Initializers

- [init(forUploadJob:)](phassetresourceuploadjobchangerequest/init%28foruploadjob_%29.md)

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Background resource upload extensions

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md): Enable reliable cloud backup for photo library assets with background processing.
- [PHBackgroundResourceUploadExtension](phbackgroundresourceuploadextension.md): Deprecated.
- [PHAssetResourceUploadJob](phassetresourceuploadjob.md): An object that represents a request to upload an asset resource.

# PHAssetResourceUploadJobChangeRequest (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Use within an application’s `com.apple.photos.background-upload` extension to create and change [PHAssetResourceUploadJob](phassetresourceuploadjob.md) records.

## Declaration

```objectivec
@interface PHAssetResourceUploadJobChangeRequest : PHChangeRequest
```

<a id="overview"></a>

## Overview

When the extension’s principal class receives a call to `process` background uploads, it can create new [PHAssetResourceUploadJob](phassetresourceuploadjob.md)s through calls to perform changes on a PHPhotoLibrary using [PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md) and any in-flight upload jobs can be handled by updating their state to mark them as acknowledged, or to be retried. The maximum number of jobs that can be in flight is limited to the `PHAssetResourceUploadJob.jobLimit`.

[PHAssetResourceUploadJobChangeRequest](phassetresourceuploadjobchangerequest.md) can only be created or used within a photo library change block. For details on change blocks, see [PHPhotoLibrary](phphotolibrary.md).

## Topics

### Creating a change request

- [changeRequestForUploadJob:](phassetresourceuploadjobchangerequest/init%28for_%29.md): Creates a request for modifying the specified upload job.

### Creating jobs

- [creationRequestForDownloadJobWithResource:](phassetresourceuploadjobchangerequest/creationrequestfordownloadjob%28resource_%29.md): Creates a download-only job request for the specified asset resource.
- [creationRequestForJobWithDestination:resource:](phassetresourceuploadjobchangerequest/creationrequestforjob%28destination_resource_%29.md): Creates an asset resource upload job and returns the change request.

### Processing jobs

- [acknowledge](phassetresourceuploadjobchangerequest/acknowledge%28%29.md): Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](phassetresourceuploadjob/joblimit.md).
- [retryWithDestination:](phassetresourceuploadjobchangerequest/retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](phassetresourceuploadjob/joblimit.md).
- [cancel](phassetresourceuploadjobchangerequest/cancel%28%29.md): Cancels an upload job that is registered or pending.

### Accessing details about the job

- [placeholderForCreatedAssetResourceUploadJob](phassetresourceuploadjobchangerequest/placeholderforcreatedassetresourceuploadjob.md): A placeholder for the asset resource upload job created by this request.

### Deprecated

- [createJobWithDestination:resource:](phassetresourceuploadjobchangerequest/createjob%28destination_resource_%29.md): Deprecated. Creates an asset resource upload job.

## Relationships

### Inherits From

- [PHChangeRequest](phchangerequest.md)

## See Also

### Background resource upload extensions

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md): Enable reliable cloud backup for photo library assets with background processing.
- [PHAssetResourceUploadJob](phassetresourceuploadjob.md): An object that represents a request to upload an asset resource.
