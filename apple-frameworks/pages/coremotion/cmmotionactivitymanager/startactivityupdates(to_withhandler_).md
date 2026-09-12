> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivitymanager/startactivityupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager/startactivityupdates(to:withhandler:))

# startActivityUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts the delivery of current motion data updates to your app.

## Declaration

```swift
func startActivityUpdates(to queue: OperationQueue, withHandler handler: @escaping CMMotionActivityHandler)
```

## Parameters

- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute when a change in the current type of motion is detected. For information about the parameters of this block, see [CMMotionActivityHandler](../cmmotionactivityhandler.md). This property must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates the tracking of motion data asynchronously. Upon calling this method, the motion activity manager executes the `handler` block on the specified `queue`, reporting the current motion in effect for the device. After that, the motion activity manager executes the `handler` block only when the motion data changes.

The `handler` block is executed on a best effort basis and updates are not delivered while your app is suspended. If updates arrived while your app was suspended, the last update is delivered to your app when it resumes execution. To get all of the updates that occurred while your app was suspended, use the [queryActivityStarting(from:to:to:withHandler:)](queryactivitystarting%28from_to_to_withhandler_%29.md) method.

Upon starting activity updates, the motion activity manager reports changes to its block until you call the [stopActivityUpdates()](stopactivityupdates%28%29.md) method. If you call this method again with a new block, the activity manager stops delivering updates to the old block and delivers them to the new block instead. Updates stop altogether when the motion activity manager object itself is deallocated.

## See Also

### Starting and Stopping Activity Updates

- [stopActivityUpdates()](stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app
- [CMMotionActivityHandler](../cmmotionactivityhandler.md): A block that reports the current motion associated with the device.

# startActivityUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Starts the delivery of current motion data updates to your app.

## Declaration

```objectivec
- (void) startActivityUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMMotionActivityHandler) handler;
```

## Parameters

- `queue`: The operation queue on which to execute the specified `handler` block. You can specify a custom queue or use the operation queue associated with your app’s main thread. This parameter must not be `nil`.
- `handler`: The block to execute when a change in the current type of motion is detected. For information about the parameters of this block, see [CMMotionActivityHandler](../cmmotionactivityhandler.md). This property must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates the tracking of motion data asynchronously. Upon calling this method, the motion activity manager executes the `handler` block on the specified `queue`, reporting the current motion in effect for the device. After that, the motion activity manager executes the `handler` block only when the motion data changes.

The `handler` block is executed on a best effort basis and updates are not delivered while your app is suspended. If updates arrived while your app was suspended, the last update is delivered to your app when it resumes execution. To get all of the updates that occurred while your app was suspended, use the [queryActivityStartingFromDate:toDate:toQueue:withHandler:](queryactivitystarting%28from_to_to_withhandler_%29.md) method.

Upon starting activity updates, the motion activity manager reports changes to its block until you call the [stopActivityUpdates](stopactivityupdates%28%29.md) method. If you call this method again with a new block, the activity manager stops delivering updates to the old block and delivers them to the new block instead. Updates stop altogether when the motion activity manager object itself is deallocated.

## See Also

### Starting and Stopping Activity Updates

- [stopActivityUpdates](stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app
- [CMMotionActivityHandler](../cmmotionactivityhandler.md): A block that reports the current motion associated with the device.
