> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/fetchjobs(action:options:)](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/fetchjobs(action:options:))

# fetchJobs(action:options:) (Swift)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Returns all asset resource upload jobs applicable for a given action.

## Declaration

```swift
class func fetchJobs(action: PHAssetResourceUploadJob.Action, options: PHFetchOptions?) -> PHFetchResult<PHAssetResourceUploadJob>
```

## Parameters

- `action`: The actions a client can take on a job.
- `options`: The fetch options to be passed in.

<a id="return-value"></a>

## Return Value

The jobs available on which you can apply an action found in [PHAssetResourceUploadJob.Action](action.md).

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Fetching jobs

- [jobLimit](joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [PHAssetResourceUploadJob.Action](action.md): An action to perform on an upload job.

# fetchJobsWithAction:options: (Objective-C)

**Framework:** Photos  
**Kind:** Type Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Returns all asset resource upload jobs applicable for a given action.

## Declaration

```objectivec
+ (PHFetchResult<PHAssetResourceUploadJob *> *) fetchJobsWithAction:(PHAssetResourceUploadJobAction) action options:(PHFetchOptions *) options;
```

## Parameters

- `action`: The actions a client can take on a job.
- `options`: The fetch options to be passed in.

<a id="return-value"></a>

## Return Value

The jobs available on which you can apply an action found in [PHAssetResourceUploadJobAction](action.md).

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Fetching jobs

- [jobLimit](joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [PHAssetResourceUploadJobAction](action.md): An action to perform on an upload job.
