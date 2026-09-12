> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/cancel()](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/cancel())

# cancel() (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 27.0+

Cancels an upload job that is registered or pending.

## Declaration

```swift
func cancel()
```

<a id="discussion"></a>

## Discussion

Use this method to cancel an upload job that has not yet completed. This is useful when a resource is uploaded through another path (e.g., the main app) and the background upload job is no longer needed, avoiding wasteful duplicate uploads.

Only jobs in the `PHAssetResourceUploadJobStateRegistered` or `PHAssetResourceUploadJobStatePending` states can be cancelled. Cancelled jobs transition to the `PHAssetResourceUploadJobStateCancelled` state and are automatically acknowledged.

## See Also

### Processing jobs

- [acknowledge()](acknowledge%28%29.md): Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).
- [retry(destination:)](retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).

# cancel (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 27.0+ · macOS 27.0+

Cancels an upload job that is registered or pending.

## Declaration

```objectivec
- (void) cancel;
```

<a id="discussion"></a>

## Discussion

Use this method to cancel an upload job that has not yet completed. This is useful when a resource is uploaded through another path (e.g., the main app) and the background upload job is no longer needed, avoiding wasteful duplicate uploads.

Only jobs in the `PHAssetResourceUploadJobStateRegistered` or `PHAssetResourceUploadJobStatePending` states can be cancelled. Cancelled jobs transition to the `PHAssetResourceUploadJobStateCancelled` state and are automatically acknowledged.

## See Also

### Processing jobs

- [acknowledge](acknowledge%28%29.md): Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).
- [retryWithDestination:](retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).
