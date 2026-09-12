> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/creationrequestfordownloadjob(resource:)](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/creationrequestfordownloadjob(resource:))

# creationRequestForDownloadJob(resource:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

Creates a download-only job request for the specified asset resource.

## Declaration

```swift
class func creationRequestForDownloadJob(resource: PHAssetResource) -> Self
```

## Parameters

- `resource`: The asset resource to download.

<a id="return-value"></a>

## Return Value

A change request for the created job.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This method registers a job that requests an asset resource be downloaded from iCloud to the device without uploading it to a remote server. The download operation is performed asynchronously by the system over time. This is useful when you need to ensure a resource is available locally for processing.

The job will transition through the same states as upload jobs (`PHAssetResourceUploadJobStateRegistered`, `PHAssetResourceUploadJobStatePending`, and eventually `PHAssetResourceUploadJobStateSucceeded` or `PHAssetResourceUploadJobStateFailed`), but will only perform a download operation.

Use `fetchJobsWithAction:options:` to check the job’s state. When the job reaches `PHAssetResourceUploadJobStateSucceeded`, the download has completed successfully.

> **Note**

> The system may subsequently purge the downloaded resource due to system conditions.

## See Also

### Creating jobs

- [creationRequestForJob(destination:resource:)](creationrequestforjob%28destination_resource_%29.md): Creates an asset resource upload job and returns the change request.

# creationRequestForDownloadJobWithResource: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates a download-only job request for the specified asset resource.

## Declaration

```objectivec
+ (instancetype) creationRequestForDownloadJobWithResource:(PHAssetResource *) resource;
```

## Parameters

- `resource`: The asset resource to download.

<a id="return-value"></a>

## Return Value

A change request for the created job.

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

This method registers a job that requests an asset resource be downloaded from iCloud to the device without uploading it to a remote server. The download operation is performed asynchronously by the system over time. This is useful when you need to ensure a resource is available locally for processing.

The job will transition through the same states as upload jobs (`PHAssetResourceUploadJobStateRegistered`, `PHAssetResourceUploadJobStatePending`, and eventually `PHAssetResourceUploadJobStateSucceeded` or `PHAssetResourceUploadJobStateFailed`), but will only perform a download operation.

Use `fetchJobsWithAction:options:` to check the job’s state. When the job reaches `PHAssetResourceUploadJobStateSucceeded`, the download has completed successfully.

> **Note**

> The system may subsequently purge the downloaded resource due to system conditions.

## See Also

### Creating jobs

- [creationRequestForJobWithDestination:resource:](creationrequestforjob%28destination_resource_%29.md): Creates an asset resource upload job and returns the change request.
