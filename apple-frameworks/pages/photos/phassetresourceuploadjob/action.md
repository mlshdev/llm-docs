> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/action](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/action)

# PHAssetResourceUploadJob.Action (Swift)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

An action to perform on an upload job.

## Declaration

```swift
enum Action
```

<a id="overview"></a>

## Overview

Determine the available jobs for an action by calling the [fetchJobs(action:options:)](fetchjobs%28action_options_%29.md) method.

## Topics

### Actions

- [PHAssetResourceUploadJob.Action.acknowledge](action/acknowledge.md): A job that requires acknowledgement.
- [PHAssetResourceUploadJob.Action.retry](action/retry.md): A job to retry processing.

### Initializers

- [init(rawValue:)](action/init%28rawvalue_%29.md)

### Enumeration Cases

- [PHAssetResourceUploadJob.Action.process](action/process.md): A job to process.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fetching jobs

- [jobLimit](joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [fetchJobs(action:options:)](fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.

# PHAssetResourceUploadJobAction (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

An action to perform on an upload job.

## Declaration

```objectivec
enum PHAssetResourceUploadJobAction : NSInteger;
```

<a id="overview"></a>

## Overview

Determine the available jobs for an action by calling the [fetchJobsWithAction:options:](fetchjobs%28action_options_%29.md) method.

## Topics

### Actions

- [PHAssetResourceUploadJobActionAcknowledge](action/acknowledge.md): A job that requires acknowledgement.
- [PHAssetResourceUploadJobActionRetry](action/retry.md): A job to retry processing.

### Enumeration Cases

- [PHAssetResourceUploadJobActionProcess](action/process.md): A job to process.

## See Also

### Fetching jobs

- [jobLimit](joblimit.md): The maximum number of unacknowledged upload jobs allowed.
- [fetchJobsWithAction:options:](fetchjobs%28action_options_%29.md): Returns all asset resource upload jobs applicable for a given action.
