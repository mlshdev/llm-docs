> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/init(totalunitcount:parent:pendingunitcount:)](https://developer.apple.com/documentation/foundation/progress/init(totalunitcount:parent:pendingunitcount:))

# init(totalUnitCount:parent:pendingUnitCount:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

## Declaration

```swift
init(totalUnitCount unitCount: Int64, parent: Progress, pendingUnitCount portionOfParentTotalUnitCount: Int64)
```

## Parameters

- `unitCount`: The total number of units of work to assign to the progress instance.
- `parent`: The containing progress object for the created [Progress](../progress.md) object.
- `portionOfParentTotalUnitCount`: The unit count for the progress object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a progress object with a specified containing progress object and unit count.

In many cases, you can precede code that does a substantial amount of work with an invocation of this method, then repeatedly set the [completedUnitCount](completedunitcount.md) or [isCancelled](iscancelled.md) property in the loop that does the work.

You can invoke this method on one thread and then message the returned [Progress](../progress.md) on another thread. For example, you can capture the created progress instance in a block that you pass to [dispatch_async](../../dispatch/dispatch_async.md). In that block, you can invoke methods like [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md) or [resignCurrent()](resigncurrent%28%29.md), and set the [completedUnitCount](completedunitcount.md) or [isCancelled](iscancelled.md) properties as your app finishes its work.

## See Also

### Creating Progress Objects

- [init(parent:userInfo:)](init%28parent_userinfo_%29.md): Creates a new progress instance.
- [discreteProgress(totalUnitCount:)](discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [init(totalUnitCount:)](init%28totalunitcount_%29.md): Creates and returns a progress instance.

# progressWithTotalUnitCount:parent:pendingUnitCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

## Declaration

```objectivec
+ (NSProgress *) progressWithTotalUnitCount:(int64_t) unitCount parent:(NSProgress *) parent pendingUnitCount:(int64_t) portionOfParentTotalUnitCount;
```

## Parameters

- `unitCount`: The total number of units of work to assign to the progress instance.
- `parent`: The containing progress object for the created [NSProgress](../progress.md) object.
- `portionOfParentTotalUnitCount`: The unit count for the progress object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize a progress object with a specified containing progress object and unit count.

In many cases, you can precede code that does a substantial amount of work with an invocation of this method, then repeatedly set the [completedUnitCount](completedunitcount.md) or [cancelled](iscancelled.md) property in the loop that does the work.

You can invoke this method on one thread and then message the returned [NSProgress](../progress.md) on another thread. For example, you can capture the created progress instance in a block that you pass to [dispatch_async](../../dispatch/dispatch_async.md). In that block, you can invoke methods like [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md) or [resignCurrent](resigncurrent%28%29.md), and set the [completedUnitCount](completedunitcount.md) or [cancelled](iscancelled.md) properties as your app finishes its work.

## See Also

### Creating Progress Objects

- [initWithParent:userInfo:](init%28parent_userinfo_%29.md): Creates a new progress instance.
- [discreteProgressWithTotalUnitCount:](discreteprogress%28totalunitcount_%29.md): Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.
- [progressWithTotalUnitCount:](init%28totalunitcount_%29.md): Creates and returns a progress instance.
