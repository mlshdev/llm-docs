> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/launchtaskerror](https://developer.apple.com/documentation/metrickit/metricmanager/launchtaskerror)

# MetricManager.LaunchTaskError

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

An error that describes a problem that occurred while tracking an extended launch task.

## Declaration

```swift
struct LaunchTaskError
```

## Mentioned In

- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`LaunchTaskError` is delivered to the `onTrackingError` closure passed to [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-48k2s.md) or [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-jnu1.md). Inspect [reason](launchtaskerror/reason-swift.property.md) to determine the cause:

```swift
await manager.trackLaunchTask(id: "initial-data-load", onTrackingError: { error in
    print("Tracking error for \(error.taskID): \(error.reason)")
}) {
    await loadInitialData()
}
```

## Topics

### Error details

- [taskID](launchtaskerror/taskid.md): The task ID that caused the error
- [reason](launchtaskerror/reason-swift.property.md): The reason for the error
- [MetricManager.LaunchTaskError.Reason](launchtaskerror/reason-swift.enum.md): A value that describes why a launch task tracking operation failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Extended launch

- [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-48k2s.md): Measures the duration of an asynchronous extended launch task.
- [trackLaunchTask(id:onTrackingError:\_:)](tracklaunchtask%28id_ontrackingerror___%29-jnu1.md): Measures the duration of a synchronous extended launch task.
- [LaunchTaskID](../launchtaskid.md): An identifier for a task measured as part of an extended app launch.
