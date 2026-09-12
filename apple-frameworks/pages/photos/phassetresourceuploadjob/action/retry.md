> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/action/retry](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/action/retry)

# PHAssetResourceUploadJob.Action.retry (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+

A job to retry processing.

## Declaration

```swift
case retry
```

## Mentioned In

- [Uploading asset resources in the background](../../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

A retryable job has a [state](../state-swift.property.md) of `failed` and hasn’t previously been retried.

Call [retry(destination:)](../../phassetresourceuploadjobchangerequest/retry%28destination_%29.md) to retry the job.

## See Also

### Actions

- [PHAssetResourceUploadJob.Action.acknowledge](acknowledge.md): A job that requires acknowledgement.

# PHAssetResourceUploadJobActionRetry (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A job to retry processing.

## Declaration

```objectivec
PHAssetResourceUploadJobActionRetry
```

## Mentioned In

- [Uploading asset resources in the background](../../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

A retryable job has a [state](../state-swift.property.md) of `failed` and hasn’t previously been retried.

Call [retryWithDestination:](../../phassetresourceuploadjobchangerequest/retry%28destination_%29.md) to retry the job.

## See Also

### Actions

- [PHAssetResourceUploadJobActionAcknowledge](acknowledge.md): A job that requires acknowledgement.
