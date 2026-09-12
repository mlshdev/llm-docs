> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjob/action/acknowledge](https://developer.apple.com/documentation/photos/phassetresourceuploadjob/action/acknowledge)

# PHAssetResourceUploadJob.Action.acknowledge (Swift)

**Framework:** Photos  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+

A job that requires acknowledgement.

## Declaration

```swift
case acknowledge
```

## Mentioned In

- [Uploading asset resources in the background](../../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

An acknowledgeable job has a [state](../state-swift.property.md) of `succeeded` or `failed` and hasn’t been acknowledged.

Call [acknowledge()](../../phassetresourceuploadjobchangerequest/acknowledge%28%29.md) to acknowledge a job and free queue capacity for new uploads.

## See Also

### Actions

- [PHAssetResourceUploadJob.Action.retry](retry.md): A job to retry processing.

# PHAssetResourceUploadJobActionAcknowledge (Objective-C)

**Framework:** Photos  
**Kind:** Enumeration Case  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

A job that requires acknowledgement.

## Declaration

```objectivec
PHAssetResourceUploadJobActionAcknowledge
```

## Mentioned In

- [Uploading asset resources in the background](../../../photokit/uploading-asset-resources-in-the-background.md)

<a id="discussion"></a>

## Discussion

An acknowledgeable job has a [state](../state-swift.property.md) of `succeeded` or `failed` and hasn’t been acknowledged.

Call [acknowledge](../../phassetresourceuploadjobchangerequest/acknowledge%28%29.md) to acknowledge a job and free queue capacity for new uploads.

## See Also

### Actions

- [PHAssetResourceUploadJobActionRetry](retry.md): A job to retry processing.
