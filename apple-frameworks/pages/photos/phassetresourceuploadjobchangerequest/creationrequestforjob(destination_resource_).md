> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/creationrequestforjob(destination:resource:)

# creationRequestForJob(destination:resource:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

Creates an asset resource upload job and returns the change request.

## Declaration

```swift
class func creationRequestForJob(destination: URLRequest, resource: PHAssetResource) -> Self
```

## Parameters

- `destination`: The destination [NSURLRequest](../../foundation/nsurlrequest.md) to which this asset resource will be sent.
- `resource`: The asset resource to be uploaded.

<a id="return-value"></a>

## Return Value

A change request for the created job.

<a id="discussion"></a>

## Discussion

This method creates an upload job and returns a change request that can be used to access the placeholder for the created job. Use the placeholder to obtain the local identifier before the change block completes.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library [performChanges(\_:completionHandler:)](../phphotolibrary/performchanges%28__completionhandler_%29.md) request will fail with a [PHPhotosError.Code.limitExceeded](../phphotoserror-swift.struct/code/limitexceeded.md) error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.

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

## Parameters

- `destination`: The destination [NSURLRequest](../../foundation/nsurlrequest.md) to which this asset resource will be sent.
- `resource`: The asset resource to be uploaded.

<a id="return-value"></a>

## Return Value

A change request for the created job.

<a id="discussion"></a>

## Discussion

This method creates an upload job and returns a change request that can be used to access the placeholder for the created job. Use the placeholder to obtain the local identifier before the change block completes.

If the number of jobs exceeds [jobLimit](../phassetresourceuploadjob/joblimit.md) the photo library [performChanges:completionHandler:](../phphotolibrary/performchanges%28__completionhandler_%29.md) request will fail with a [PHPhotosErrorLimitExceeded](../phphotoserror-swift.struct/code/limitexceeded.md) error. To generate jobs after this limit is triggered, you must acknowledge succeeded/failed jobs, and wait for the registered/pending ones to finish uploading, which will make those jobs also succeeded/failed.

## See Also

### Creating jobs

- [creationRequestForDownloadJobWithResource:](creationrequestfordownloadjob%28resource_%29.md): Creates a download-only job request for the specified asset resource.
