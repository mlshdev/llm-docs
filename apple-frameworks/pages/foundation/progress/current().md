> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/current()](https://developer.apple.com/documentation/foundation/progress/current())

# current() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the progress instance, if any.

## Declaration

```swift
class func current() -> Progress?
```

<a id="return-value"></a>

## Return Value

The progress instance for the current thread, if any.

<a id="Discussion"></a>

## Discussion

If you invoke [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md) on the current thread, this method returns the progress instance.

Use this per-thread [current()](current%28%29.md) value to allow code that performs work to report useful progress even when it’s widely separated from the code that actually presents progress information to the user, and without requiring layers of intervening code to pass around an [Progress](../progress.md) instance.

To ensure that you report progress in known units of work, you typically work with a suboperation progress object that you create by calling [discreteProgress(totalUnitCount:)](discreteprogress%28totalunitcount_%29.md).

## See Also

### Accessing the Current Progress Object

- [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrent(withPendingUnitCount:using:)](performascurrent%28withpendingunitcount_using_%29.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent()](resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.

# currentProgress (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the progress instance, if any.

## Declaration

```objectivec
+ (NSProgress *) currentProgress;
```

<a id="return-value"></a>

## Return Value

The progress instance for the current thread, if any.

<a id="Discussion"></a>

## Discussion

If you invoke [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md) on the current thread, this method returns the progress instance.

Use this per-thread [currentProgress](current%28%29.md) value to allow code that performs work to report useful progress even when it’s widely separated from the code that actually presents progress information to the user, and without requiring layers of intervening code to pass around an [NSProgress](../progress.md) instance.

To ensure that you report progress in known units of work, you typically work with a suboperation progress object that you create by calling [discreteProgressWithTotalUnitCount:](discreteprogress%28totalunitcount_%29.md).

## See Also

### Accessing the Current Progress Object

- [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrentWithPendingUnitCount:usingBlock:](../nsprogress/performascurrentwithpendingunitcount_usingblock_.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent](resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.
