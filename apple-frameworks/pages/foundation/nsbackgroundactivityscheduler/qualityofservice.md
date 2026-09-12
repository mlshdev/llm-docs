> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/qualityofservice](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/qualityofservice)

# qualityOfService (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.

## Declaration

```swift
var qualityOfService: QualityOfService { get set }
```

<a id="Discussion"></a>

## Discussion

Options include:

- NSQualityOfServiceUserInteractive
- NSQualityOfServiceUserInitiated
- NSQualityOfServiceUtility
- NSQualityOfServiceBackground

The default value is `NSQualityOfServiceBackground`. If you upgrade the quality of service above this level, the system schedules the activity more aggressively. The default value is the recommended value for most activities. See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties). For information about quality of service, see [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [TimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.

# qualityOfService (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.

## Declaration

```objectivec
@property NSQualityOfService qualityOfService;
```

<a id="Discussion"></a>

## Discussion

Options include:

- NSQualityOfServiceUserInteractive
- NSQualityOfServiceUserInitiated
- NSQualityOfServiceUtility
- NSQualityOfServiceBackground

The default value is `NSQualityOfServiceBackground`. If you upgrade the quality of service above this level, the system schedules the activity more aggressively. The default value is the recommended value for most activities. See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties). For information about quality of service, see [Prioritize Work at the Task Level](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/PrioritizeWorkAtTheTaskLevel.html#//apple_ref/doc/uid/TP40013929-CH35) in [Energy Efficiency Guide for Mac Apps](https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/index.html#//apple_ref/doc/uid/TP40013929).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [NSTimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.
