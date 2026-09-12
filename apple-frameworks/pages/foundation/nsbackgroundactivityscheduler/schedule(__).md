> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbackgroundactivityscheduler/schedule(_:)](https://developer.apple.com/documentation/foundation/nsbackgroundactivityscheduler/schedule(_:))

# schedule(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Begins scheduling the background activity.

## Declaration

```swift
func schedule(_ block: @escaping @Sendable (@escaping NSBackgroundActivityScheduler.CompletionHandler) -> Void)
```

## Parameters

- `block`: A block of code to execute when the scheduler runs. This block will be called on a serial background queue appropriate for the level of quality of service specified. See [qualityOfService](qualityofservice.md).

<a id="Discussion"></a>

## Discussion

When your block is called, it’s passed a completion handler as an argument. Configure the block to invoke this handler, passing it a result of type [NSBackgroundActivityScheduler.Result](result.md) to indicate whether the activity finished ([NSBackgroundActivityScheduler.Result.finished](result/finished.md)) or should be deferred ([NSBackgroundActivityScheduler.Result.deferred](result/deferred.md)) and rescheduled for a later time. Failure to invoke the completion handler results in the activity not being rescheduled. For work that will be deferred and rescheduled, the block may optionally adjust scheduler properties, such as [interval](interval.md) or [tolerance](tolerance.md), before calling the completion handler. See [Schedule Activity with scheduleWithBlock:](../nsbackgroundactivityscheduler.md#Schedule-Activity-with-scheduleWithBlock).

## See Also

### Related Documentation

- [NSBackgroundActivityScheduler.Result](result.md): These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

### Scheduling Activity

- [NSBackgroundActivityScheduler.CompletionHandler](completionhandler.md)

# scheduleWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Begins scheduling the background activity.

## Declaration

```objectivec
- (void) scheduleWithBlock:(void (^)(NSBackgroundActivityCompletionHandler completionHandler)) block;
```

## Parameters

- `block`: A block of code to execute when the scheduler runs. This block will be called on a serial background queue appropriate for the level of quality of service specified. See [qualityOfService](qualityofservice.md).

<a id="Discussion"></a>

## Discussion

When your block is called, it’s passed a completion handler as an argument. Configure the block to invoke this handler, passing it a result of type [NSBackgroundActivityResult](result.md) to indicate whether the activity finished ([NSBackgroundActivityResultFinished](result/finished.md)) or should be deferred ([NSBackgroundActivityResultDeferred](result/deferred.md)) and rescheduled for a later time. Failure to invoke the completion handler results in the activity not being rescheduled. For work that will be deferred and rescheduled, the block may optionally adjust scheduler properties, such as [interval](interval.md) or [tolerance](tolerance.md), before calling the completion handler. See [Schedule Activity with scheduleWithBlock:](../nsbackgroundactivityscheduler.md#Schedule-Activity-with-scheduleWithBlock).

## See Also

### Related Documentation

- [NSBackgroundActivityResult](result.md): These constants indicate whether background activity has been completed successfully or whether additional processing should be deferred until a more optimal time.

### Scheduling Activity

- [NSBackgroundActivityCompletionHandler](completionhandler.md)
