> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability/kind-swift.enum/percent](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability/kind-swift.enum/percent)

# CLSProgressReportingCapability.Kind.percent (Swift)

**Framework:** ClassKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The percentage of the total task that has been completed.

## Declaration

```swift
case percent
```

<a id="Discussion"></a>

## Discussion

Add this capability to indicate that a context reports a task’s percentage completion on a periodic basis by setting the associated activity’s [progress](../../clsactivity/progress.md) property, or by calling the activity’s [addProgressRange(fromStart:toEnd:)](../../clsactivity/addprogressrange%28fromstart_toend_%29.md) method.

## See Also

### Reporting capabilities

- [CLSProgressReportingCapability.Kind.duration](duration.md): Time spent performing the task.
- [CLSProgressReportingCapability.Kind.binary](binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapability.Kind.quantity](quantity.md): A discrete value.
- [CLSProgressReportingCapability.Kind.score](score.md): A score.

# CLSProgressReportingCapabilityKindPercent (Objective-C)

**Framework:** ClassKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The percentage of the total task that has been completed.

## Declaration

```objectivec
CLSProgressReportingCapabilityKindPercent
```

<a id="Discussion"></a>

## Discussion

Add this capability to indicate that a context reports a task’s percentage completion on a periodic basis by setting the associated activity’s [progress](../../clsactivity/progress.md) property, or by calling the activity’s [addProgressRangeFromStart:toEnd:](../../clsactivity/addprogressrange%28fromstart_toend_%29.md) method.

## See Also

### Reporting capabilities

- [CLSProgressReportingCapabilityKindDuration](duration.md): Time spent performing the task.
- [CLSProgressReportingCapabilityKindBinary](binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapabilityKindQuantity](quantity.md): A discrete value.
- [CLSProgressReportingCapabilityKindScore](score.md): A score.
