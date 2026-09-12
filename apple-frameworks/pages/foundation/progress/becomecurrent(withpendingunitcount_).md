> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/becomecurrent(withpendingunitcount:)](https://developer.apple.com/documentation/foundation/progress/becomecurrent(withpendingunitcount:))

# becomeCurrent(withPendingUnitCount:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.

## Declaration

```swift
func becomeCurrent(withPendingUnitCount unitCount: Int64)
```

## Parameters

- `unitCount`: The number of units of work for the next progress object that initializes when you invoke [init(parent:userInfo:)](init%28parent_userinfo_%29.md) in the current thread with this progress object as the containing progress object.

  The number represents the portion of work to perform in relation to the total number of units of work, which is the value of the progress object’s [totalUnitCount](totalunitcount.md) property. The units of work for this parameter must be the same units of work in the progress object’s [totalUnitCount](totalunitcount.md) property.

<a id="Discussion"></a>

## Discussion

Use this method to build a tree of progress objects, as [Reporting Progress for Multiple Operations](../progress.md#Reporting-Progress-for-Multiple-Operations) describes.

## See Also

### Accessing the Current Progress Object

- [current()](current%28%29.md): Returns the progress instance, if any.
- [performAsCurrent(withPendingUnitCount:using:)](performascurrent%28withpendingunitcount_using_%29.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent()](resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.

# becomeCurrentWithPendingUnitCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the progress object as the current object of the current thread, and assigns the amount of work for the next suboperation progress object to perform.

## Declaration

```objectivec
- (void) becomeCurrentWithPendingUnitCount:(int64_t) unitCount;
```

## Parameters

- `unitCount`: The number of units of work for the next progress object that initializes when you invoke [initWithParent:userInfo:](init%28parent_userinfo_%29.md) in the current thread with this progress object as the containing progress object.

  The number represents the portion of work to perform in relation to the total number of units of work, which is the value of the progress object’s [totalUnitCount](totalunitcount.md) property. The units of work for this parameter must be the same units of work in the progress object’s [totalUnitCount](totalunitcount.md) property.

<a id="Discussion"></a>

## Discussion

Use this method to build a tree of progress objects, as [Reporting Progress for Multiple Operations](../progress.md#Reporting-Progress-for-Multiple-Operations) describes.

## See Also

### Accessing the Current Progress Object

- [currentProgress](current%28%29.md): Returns the progress instance, if any.
- [performAsCurrentWithPendingUnitCount:usingBlock:](../nsprogress/performascurrentwithpendingunitcount_usingblock_.md): Retrieves the current thread’s progress object, executes the specified block, and increments the progress object by the specified units of work.
- [resignCurrent](resigncurrent%28%29.md): Restores the previous progress object to become the current progress object on the thread.
