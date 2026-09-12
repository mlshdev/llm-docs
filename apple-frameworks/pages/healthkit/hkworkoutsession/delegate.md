> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/delegate](https://developer.apple.com/documentation/healthkit/hkworkoutsession/delegate)

# delegate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session’s delegate.

## Declaration

```swift
weak var delegate: (any HKWorkoutSessionDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications when a workout session’s state changes or when a workout session fails.

## See Also

### Monitoring the session

- [HKWorkoutSessionDelegate](../hkworkoutsessiondelegate.md): The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.

# delegate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<HKWorkoutSessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate receives notifications when a workout session’s state changes or when a workout session fails.

## See Also

### Monitoring the session

- [HKWorkoutSessionDelegate](../hkworkoutsessiondelegate.md): The session delegate protocol that defines an interface for receiving notifications about errors and changes in the workout session’s state.
