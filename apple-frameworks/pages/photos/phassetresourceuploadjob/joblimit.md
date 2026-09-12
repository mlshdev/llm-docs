> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/joblimit](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/joblimit)

# jobLimit (Swift)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The maximum number of unacknowledged upload jobs allowed.

## Declaration

```swift
class var jobLimit: Int { get }
```

<a id="discussion"></a>

## Discussion

This includes jobs that are in-flight and those that have succeeded or failed.

## See Also

### Fetching jobs

- [fetchJobs(action:options:)](fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.
- [PHAssetResourceUploadJob.Action](action.md): An action to perform on an upload job.

# jobLimit (Objective-C)

**Framework:** Photos  
**Kind:** Type Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

The maximum number of unacknowledged upload jobs allowed.

## Declaration

```objectivec
@property (class, readonly) NSInteger jobLimit;
```

<a id="discussion"></a>

## Discussion

This includes jobs that are in-flight and those that have succeeded or failed.

## See Also

### Fetching jobs

- [fetchJobsWithAction:options:](fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.
- [PHAssetResourceUploadJobAction](action.md): An action to perform on an upload job.
