> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/tracklaunchtask(id:ontrackingerror:_:)-48k2s](https://developer.apple.com/documentation/metrickit/metricmanager/tracklaunchtask(id:ontrackingerror:_:)-48k2s)

# trackLaunchTask(id:onTrackingError:\_:)

**Framework:** MetricKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Measures the duration of an asynchronous extended launch task.

## Declaration

```swift
@MainActor final func trackLaunchTask<Result, Failure>(id: LaunchTaskID, onTrackingError: ((MetricManager.LaunchTaskError) -> Void)? = nil, _ operation: () async throws(Failure) -> Result) async throws(Failure) -> Result where Failure : Error
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

Use this method to wrap asynchronous work that extends your app’s perceived launch time, such as fetching configuration data, loading initial content, or initializing a local database. Pass a [LaunchTaskID](../launchtaskid.md) and an `async` closure wrapping the work to measure. Measurement begins when the closure starts and ends it when the closure returns,  regardless of whether the closure throws.

```swift
await manager.trackLaunchTask(id: "initial-data-load") {
    await loadInitialData()
}
```

Pass an `onTrackingError` closure to observe [MetricManager.LaunchTaskError](launchtaskerror.md) values without interrupting the tracked work:

```swift
await manager.trackLaunchTask(id: "initial-data-load", onTrackingError: { error in
    logger.warning("Tracking error: \(error.reason)")
}) {
    await loadInitialData()
}
```

To track synchronous launch work instead, use [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-jnu1.md).

## See Also

### Extended launch

- [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-jnu1.md): Measures the duration of a synchronous extended launch task.
- [MetricManager.LaunchTaskError](launchtaskerror.md): An error that describes a problem that occurred while tracking an extended launch task.
- [LaunchTaskID](../launchtaskid.md): An identifier for a task measured as part of an extended app launch.
