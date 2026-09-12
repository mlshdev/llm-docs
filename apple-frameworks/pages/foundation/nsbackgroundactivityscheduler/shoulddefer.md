> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/shoulddefer](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/shoulddefer)

# shouldDefer (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.

## Declaration

```swift
var shouldDefer: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Your app can check the `shouldDefer` property while executing scheduled background activity. If this property contains a value of [true](https://developer.apple.com/documentation/swift/true), system conditions have changed since the time the activity started and deferral is recommended. For example, perhaps the user unplugged the Mac and it’s now running on battery power. In this case, your app should finish what it’s currently doing, save its state, and invoke its completion handler with a value of [NSBackgroundActivityScheduler.Result.deferred](result/deferred.md). The system will invoke your activity again at a more optimal time, and your app can restore its previous state and resume where it left off. See [Detect Whether to Defer Activity](../nsbackgroundactivityscheduler.md#Detect-Whether-to-Defer-Activity) and [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Related Documentation

- [NSBackgroundActivityScheduler.Result](result.md): These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [tolerance](tolerance.md): A value of type [TimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.

# shouldDefer (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether your app should stop performing background activity and resume at a more optimal time.

## Declaration

```objectivec
@property (readonly) BOOL shouldDefer;
```

<a id="Discussion"></a>

## Discussion

Your app can check the `shouldDefer` property while executing scheduled background activity. If this property contains a value of [true](https://developer.apple.com/documentation/swift/true), system conditions have changed since the time the activity started and deferral is recommended. For example, perhaps the user unplugged the Mac and it’s now running on battery power. In this case, your app should finish what it’s currently doing, save its state, and invoke its completion handler with a value of [NSBackgroundActivityResultDeferred](result/deferred.md). The system will invoke your activity again at a more optimal time, and your app can restore its previous state and resume where it left off. See [Detect Whether to Defer Activity](../nsbackgroundactivityscheduler.md#Detect-Whether-to-Defer-Activity) and [Configure Scheduler Properties](../nsbackgroundactivityscheduler.md#Configure-Scheduler-Properties).

## See Also

### Related Documentation

- [NSBackgroundActivityResult](result.md): These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

### Background Scheduler Attributes

- [identifier](identifier.md): A unique reverse DNS notation string, such as `com.example.MyApp.updatecheck`, that identifies the activity.
- [repeats](repeats.md): A Boolean value indicating whether the activity should be rescheduled after it completes.
- [interval](interval.md): An integer providing a suggested interval between scheduling and invoking the activity.
- [qualityOfService](qualityofservice.md): A value of type `NSQualityOfService`, which controls how aggressively the system schedules the activity.
- [tolerance](tolerance.md): A value of type [NSTimeInterval](../timeinterval.md), which specifies a range of time during which the background activity may occur.
