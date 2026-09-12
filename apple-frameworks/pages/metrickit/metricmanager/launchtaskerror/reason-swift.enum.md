> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum](https://developer.apple.com/documentation/metrickit/metricmanager/launchtaskerror/reason-swift.enum)

# MetricManager.LaunchTaskError.Reason

**Framework:** MetricKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A value that describes why a launch task tracking operation failed.

## Declaration

```swift
enum Reason
```

## Topics

### Error reasons

- [MetricManager.LaunchTaskError.Reason.invalidID](reason-swift.enum/invalidid.md): The task ID is a null value or exceeds the maximum 128 character length.
- [MetricManager.LaunchTaskError.Reason.maxCountExceeded](reason-swift.enum/maxcountexceeded.md): Exceeded the maximum number of tasks.
- [MetricManager.LaunchTaskError.Reason.pastDeadline](reason-swift.enum/pastdeadline.md): The start call was made too late.
- [MetricManager.LaunchTaskError.Reason.duplicateTask](reason-swift.enum/duplicatetask.md): A task with the same ID has already been started.
- [MetricManager.LaunchTaskError.Reason.taskUnknown](reason-swift.enum/taskunknown.md): The task hasn’t been started or has already been finished.
- [MetricManager.LaunchTaskError.Reason.internalFailure](reason-swift.enum/internalfailure.md): Internal failures happened inside the framework.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Error details

- [taskID](taskid.md): The task ID that caused the error
- [reason](reason-swift.property.md): The reason for the error
