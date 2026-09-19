> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/kcatransactiondisableactions

# kCATransactionDisableActions (Swift)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A key whose value indicates whether implicit actions for property changes made within the transaction group are suppressed.

## Declaration

```swift
let kCATransactionDisableActions: String
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), implicit actions for property changes made within the transaction group are suppressed.  The value for this key must be an instance of [NSNumber](../foundation/nsnumber.md).

## See Also

### Constants

- [kCATransactionAnimationDuration](kcatransactionanimationduration.md): Duration, in seconds, for animations triggered within the transaction group.
- [kCATransactionAnimationTimingFunction](kcatransactionanimationtimingfunction.md)
- [kCATransactionCompletionBlock](kcatransactioncompletionblock.md)

# kCATransactionDisableActions (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A key whose value indicates whether implicit actions for property changes made within the transaction group are suppressed.

## Declaration

```objectivec
extern NSString * const kCATransactionDisableActions;
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), implicit actions for property changes made within the transaction group are suppressed.  The value for this key must be an instance of [NSNumber](../foundation/nsnumber.md).

## See Also

### Constants

- [kCATransactionAnimationDuration](kcatransactionanimationduration.md): Duration, in seconds, for animations triggered within the transaction group.
- [kCATransactionAnimationTimingFunction](kcatransactionanimationtimingfunction.md)
- [kCATransactionCompletionBlock](kcatransactioncompletionblock.md)
