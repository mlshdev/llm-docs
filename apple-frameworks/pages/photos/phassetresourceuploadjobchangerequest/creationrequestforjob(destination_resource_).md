> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/creationrequestforjob(destination:resource:)](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/creationrequestforjob(destination:resource:))

# creationRequestForJob(destination:resource:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

Creates an asset resource upload job and returns the change request.

## Declaration

```swift
class func creationRequestForJob(destination: URLRequest, resource: PHAssetResource) -> Self
```

<a id="return-value"></a>

## Return Value

A change request for the created job.

<a id="discussion"></a>

## Discussion

This method creates an upload job and returns a change request that can be used to access the placeholder for the created job. Use the placeholder to obtain the local identifier before the change block completes.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library `performChanges` request will fail with a `PHPhotosErrorLimitExceeded` error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.

- Parameter:

  - destination: the destination [NSURLRequest](../../foundation/nsurlrequest.md) to which this asset resource will be sent.
  - resource: the asset resource to be uploaded.

## See Also

### Creating jobs

- [creationRequestForDownloadJob(resource:)](creationrequestfordownloadjob%28resource_%29.md): Creates a download-only job request for the specified asset resource.

# creationRequestForJobWithDestination:resource: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

Creates an asset resource upload job and returns the change request.

## Declaration

```objectivec
+ (instancetype) creationRequestForJobWithDestination:(NSURLRequest *) destination resource:(PHAssetResource *) resource;
```

<a id="return-value"></a>

## Return Value

A change request for the created job.

<a id="discussion"></a>

## Discussion

This method creates an upload job and returns a change request that can be used to access the placeholder for the created job. Use the placeholder to obtain the local identifier before the change block completes.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library `performChanges` request will fail with a `PHPhotosErrorLimitExceeded` error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.

- Parameter:

  - destination: the destination [NSURLRequest](../../foundation/nsurlrequest.md) to which this asset resource will be sent.
  - resource: the asset resource to be uploaded.

## See Also

### Creating jobs

- [creationRequestForDownloadJobWithResource:](creationrequestfordownloadjob%28resource_%29.md): Creates a download-only job request for the specified asset resource.
