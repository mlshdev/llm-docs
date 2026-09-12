> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/discreteprogress(totalunitcount:)](https://developer.apple.com/documentation/foundation/progress/discreteprogress(totalunitcount:))

# discreteProgress(totalUnitCount:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.

## Declaration

```swift
class func discreteProgress(totalUnitCount unitCount: Int64) -> Progress
```

## Parameters

- `unitCount`: The total number of units of work to assign to the progress instance.

<a id="return-value"></a>

## Return Value

A new progress instance with its containing progress object set to `nil.`

<a id="Discussion"></a>

## Discussion

Use this method to create the top-level progress object that your custom classes return. The receiver of the returned progress object can add it to a progress tree using `Progress/addChild(_:withPendingUnitCount:)`.

You’re responsible for updating the progress count of the created progress object. You can invoke this method on one thread and then message the returned `NSProgress` on another thread. For example, you can capture the created progress instance in a block that you pass to [dispatch_async](../../dispatch/dispatch_async.md). In that block, you can invoke methods like [becomeCurrent(withPendingUnitCount:)](becomecurrent%28withpendingunitcount_%29.md) or [resignCurrent()](resigncurrent%28%29.md), and set the [completedUnitCount](completedunitcount.md) or [isCancelled](iscancelled.md) properties as your app finishes its work.

## See Also

### Creating Progress Objects

- [init(parent:userInfo:)](init%28parent_userinfo_%29.md): Creates a new progress instance.
- [init(totalUnitCount:)](init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [init(totalUnitCount:parent:pendingUnitCount:)](init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.

# discreteProgressWithTotalUnitCount: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a progress instance with the specified unit count that isn’t part of any existing progress tree.

## Declaration

```objectivec
+ (NSProgress *) discreteProgressWithTotalUnitCount:(int64_t) unitCount;
```

## Parameters

- `unitCount`: The total number of units of work to assign to the progress instance.

<a id="return-value"></a>

## Return Value

A new progress instance with its containing progress object set to `nil.`

<a id="Discussion"></a>

## Discussion

Use this method to create the top-level progress object that your custom classes return. The receiver of the returned progress object can add it to a progress tree using `Progress/addChild(_:withPendingUnitCount:)`.

You’re responsible for updating the progress count of the created progress object. You can invoke this method on one thread and then message the returned `NSProgress` on another thread. For example, you can capture the created progress instance in a block that you pass to [dispatch_async](../../dispatch/dispatch_async.md). In that block, you can invoke methods like [becomeCurrentWithPendingUnitCount:](becomecurrent%28withpendingunitcount_%29.md) or [resignCurrent](resigncurrent%28%29.md), and set the [completedUnitCount](completedunitcount.md) or [cancelled](iscancelled.md) properties as your app finishes its work.

## See Also

### Creating Progress Objects

- [initWithParent:userInfo:](init%28parent_userinfo_%29.md): Creates a new progress instance.
- [progressWithTotalUnitCount:](init%28totalunitcount_%29.md): Creates and returns a progress instance.
- [progressWithTotalUnitCount:parent:pendingUnitCount:](init%28totalunitcount_parent_pendingunitcount_%29.md): Creates a progress instance for the specified progress object with a unit count that’s a portion of the containing object’s total unit count.
