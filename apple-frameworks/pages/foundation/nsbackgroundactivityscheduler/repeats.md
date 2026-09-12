> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/repeats](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/repeats)

# repeats (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the activity should be rescheduled after it completes.

## Declaration

```swift
var repeats: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [TimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.

# repeats (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the activity should be rescheduled after it completes.

## Declaration

```objectivec
@property BOOL repeats;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [false](https://developer.apple.com/documentation/swift/false). See [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [shouldDefer](shoulddefer.md): A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.
- [tolerance](tolerance.md): A value of type [NSTimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.
