> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/resigncurrent()](https://developer.apple.com/documentation/foundation/progress/resigncurrent())

# resignCurrent() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Restores the previous progress object to become the current progress object on the thread.

## Declaration

```swift
func resignCurrent()
```

<a id="Discussion"></a>

## Discussion

This method restores the current progress object to what it was before invoking [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md).

Use this method after building your tree of progress objects, as [Reporting Progress for Multiple Operations](../progress.md#Reporting-Progress-for-Multiple-Operations) describes.

## See Also

### Accessing the Current Progress Object

- [current()](current%28%29.md): Returns the progress instance, if any.
- [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrent(withPendingUnitCount:using:)](performascurrent%28withpendingunitcount_using_%29.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.

# resignCurrent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Restores the previous progress object to become the current progress object on the thread.

## Declaration

```objectivec
- (void) resignCurrent;
```

<a id="Discussion"></a>

## Discussion

This method restores the current progress object to what it was before invoking [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md).

Use this method after building your tree of progress objects, as [Reporting Progress for Multiple Operations](../progress.md#Reporting-Progress-for-Multiple-Operations) describes.

## See Also

### Accessing the Current Progress Object

- [currentProgress](current%28%29.md): Returns the progress instance, if any.
- [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md): Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.
- [performAsCurrentWithPendingUnitCount:usingBlock:](../nsprogress/performascurrentwithpendingunitcount_usingblock_.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
