> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/progressreportingcapabilities](https://developer.apple.com/documentation/classkit/clscontext/progressreportingcapabilities)

# progressReportingCapabilities (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The kinds of progress reporting that the context can perform.

## Declaration

```swift
var progressReportingCapabilities: Set<CLSProgressReportingCapability> { get }
```

<a id="Discussion"></a>

## Discussion

Use progress reporting capabilities to tell teachers what kinds of metrics — like duration, percentage completion, or a score — that a context records.

By default, all contexts have a [CLSProgressReportingCapability.Kind.duration](../clsprogressreportingcapability/kind-swift.enum/duration.md) capability, because the framework automatically measures time spent on activities —– the time between when you call the [start()](../clsactivity/start%28%29.md) and [stop()](../clsactivity/stop%28%29.md) methods. You can add one or more other capabilities using the [addProgressReportingCapabilities(\_:)](addprogressreportingcapabilities%28__%29.md) method, corresponding to the other kinds of activity that you report for a context. For example, if you set the [progress](../clsactivity/progress.md) property of an activity, add the [CLSProgressReportingCapability.Kind.percent](../clsprogressreportingcapability/kind-swift.enum/percent.md) capability. Typically, you perform this configuration when creating the context.

The values that you put in the progress reporting capability set don’t affect your ability to record metrics. But they do affect the presentation of your app in the Schoolwork app.

To revert to the default state of reporting only duration, call the [resetProgressReportingCapabilities()](resetprogressreportingcapabilities%28%29.md) method.

## See Also

### Indicating progress reporting capabilities

- [addProgressReportingCapabilities(\_:)](addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities()](resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.
- [CLSProgressReportingCapability](../clsprogressreportingcapability.md): A progress reporting capability supported by a context.

# progressReportingCapabilities (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The kinds of progress reporting that the context can perform.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSSet<CLSProgressReportingCapability *> * progressReportingCapabilities;
```

<a id="Discussion"></a>

## Discussion

Use progress reporting capabilities to tell teachers what kinds of metrics — like duration, percentage completion, or a score — that a context records.

By default, all contexts have a [CLSProgressReportingCapabilityKindDuration](../clsprogressreportingcapability/kind-swift.enum/duration.md) capability, because the framework automatically measures time spent on activities —– the time between when you call the [start](../clsactivity/start%28%29.md) and [stop](../clsactivity/stop%28%29.md) methods. You can add one or more other capabilities using the [addProgressReportingCapabilities:](addprogressreportingcapabilities%28__%29.md) method, corresponding to the other kinds of activity that you report for a context. For example, if you set the [progress](../clsactivity/progress.md) property of an activity, add the [CLSProgressReportingCapabilityKindPercent](../clsprogressreportingcapability/kind-swift.enum/percent.md) capability. Typically, you perform this configuration when creating the context.

The values that you put in the progress reporting capability set don’t affect your ability to record metrics. But they do affect the presentation of your app in the Schoolwork app.

To revert to the default state of reporting only duration, call the [resetProgressReportingCapabilities](resetprogressreportingcapabilities%28%29.md) method.

## See Also

### Indicating progress reporting capabilities

- [addProgressReportingCapabilities:](addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities](resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.
- [CLSProgressReportingCapability](../clsprogressreportingcapability.md): A progress reporting capability supported by a context.
