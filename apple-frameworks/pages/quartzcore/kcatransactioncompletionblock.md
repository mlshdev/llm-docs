> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/kcatransactioncompletionblock](https://developer.apple.com/documentation/quartzcore/kcatransactioncompletionblock)

# kCATransactionCompletionBlock (Swift)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
let kCATransactionCompletionBlock: String
```

<a id="Discussion"></a>

## Discussion

A completion block object that is guaranteed to be called (on the main thread) as soon as all animations subsequently added by this transaction group have completed (or have been removed.) If no animations are added before the current transaction group is committed (or the completion block is set to a different value,) the block will be invoked immediately.

## See Also

### Constants

- [kCATransactionAnimationDuration](kcatransactionanimationduration.md): Duration, in seconds, for animations triggered within the transaction group.
- [kCATransactionDisableActions](kcatransactiondisableactions.md): A key whose value indicates whether implicit actions for property changes made within the transaction group are suppressed.
- [kCATransactionAnimationTimingFunction](kcatransactionanimationtimingfunction.md)

# kCATransactionCompletionBlock (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern NSString * const kCATransactionCompletionBlock;
```

<a id="Discussion"></a>

## Discussion

A completion block object that is guaranteed to be called (on the main thread) as soon as all animations subsequently added by this transaction group have completed (or have been removed.) If no animations are added before the current transaction group is committed (or the completion block is set to a different value,) the block will be invoked immediately.

## See Also

### Constants

- [kCATransactionAnimationDuration](kcatransactionanimationduration.md): Duration, in seconds, for animations triggered within the transaction group.
- [kCATransactionDisableActions](kcatransactiondisableactions.md): A key whose value indicates whether implicit actions for property changes made within the transaction group are suppressed.
- [kCATransactionAnimationTimingFunction](kcatransactionanimationtimingfunction.md)
