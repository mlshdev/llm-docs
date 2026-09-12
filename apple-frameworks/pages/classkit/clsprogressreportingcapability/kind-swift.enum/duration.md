> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability/kind-swift.enum/duration](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability/kind-swift.enum/duration)

# CLSProgressReportingCapability.Kind.duration (Swift)

**Framework:** ClassKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Time spent performing the task.

## Declaration

```swift
case duration
```

<a id="Discussion"></a>

## Discussion

The framework automatically measures the time that a student spends working on a task, so all contexts have a [CLSProgressReportingCapability.Kind.duration](duration.md) capability by default. You can replace the default one with a new one if you want to customize the [details](../details.md) string.

## See Also

### Reporting capabilities

- [CLSProgressReportingCapability.Kind.percent](percent.md): The percentage of the total task that has been completed.
- [CLSProgressReportingCapability.Kind.binary](binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapability.Kind.quantity](quantity.md): A discrete value.
- [CLSProgressReportingCapability.Kind.score](score.md): A score.

# CLSProgressReportingCapabilityKindDuration (Objective-C)

**Framework:** ClassKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Time spent performing the task.

## Declaration

```objectivec
CLSProgressReportingCapabilityKindDuration
```

<a id="Discussion"></a>

## Discussion

The framework automatically measures the time that a student spends working on a task, so all contexts have a [CLSProgressReportingCapabilityKindDuration](duration.md) capability by default. You can replace the default one with a new one if you want to customize the [details](../details.md) string.

## See Also

### Reporting capabilities

- [CLSProgressReportingCapabilityKindPercent](percent.md): The percentage of the total task that has been completed.
- [CLSProgressReportingCapabilityKindBinary](binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapabilityKindQuantity](quantity.md): A discrete value.
- [CLSProgressReportingCapabilityKindScore](score.md): A score.
