> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuseractivity/delegate](https://developer.apple.com/documentation/foundation/nsuseractivity/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user activity object’s delegate.

## Declaration

```swift
weak var delegate: (any NSUserActivityDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The user activity delegate is informed when the activity is being saved or continued. For more information on how to implement the delegate, see [NSUserActivityDelegate](../nsuseractivitydelegate.md).

## See Also

### Monitoring activity-related behaviors

- [NSUserActivityDelegate](../nsuseractivitydelegate.md): The interface through which a user activity instance notifies its delegate of updates.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user activity object’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSUserActivityDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The user activity delegate is informed when the activity is being saved or continued. For more information on how to implement the delegate, see [NSUserActivityDelegate](../nsuseractivitydelegate.md).

## See Also

### Monitoring activity-related behaviors

- [NSUserActivityDelegate](../nsuseractivitydelegate.md): The interface through which a user activity instance notifies its delegate of updates.
