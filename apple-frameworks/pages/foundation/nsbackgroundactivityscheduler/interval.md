> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/interval](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/interval)

# interval (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An integer providing a suggested interval between scheduling and invoking the activity.

## Declaration

```swift
var interval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

For repeating activities, the value of this property is also the suggested interval between invocations. See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [TimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.

# interval (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An integer providing a suggested interval between scheduling and invoking the activity.

## Declaration

```objectivec
@property NSTimeInterval interval;
```

<a id="Discussion"></a>

## Discussion

For repeating activities, the value of this property is also the suggested interval between invocations. See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [NSTimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.
