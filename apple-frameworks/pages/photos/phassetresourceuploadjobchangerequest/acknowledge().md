> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phassetresourceuploadjobchangerequest/acknowledge()](https://developer.apple.com/documentation/photos/phassetresourceuploadjobchangerequest/acknowledge())

# acknowledge() (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).

## Declaration

```swift
func acknowledge()
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Processing jobs

- [retry(destination:)](retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).
- [cancel()](cancel%28%29.md): Cancels an upload job that is registered or pending.

# acknowledge (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 27.0+ · macOS 27.0+

Acknowledges a successful or failed job. Jobs must be acknowledged to free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).

## Declaration

```objectivec
- (void) acknowledge;
```

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Processing jobs

- [retryWithDestination:](retry%28destination_%29.md): Retries a job that is failed, unacknowledged, and has not been retried before. Successful retries also free up space for [jobLimit](../phassetresourceuploadjob/joblimit.md).
- [cancel](cancel%28%29.md): Cancels an upload job that is registered or pending.
