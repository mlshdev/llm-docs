> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepcounter/stopstepcountingupdates()](https://developer.apple.com/documentation/coremotion/cmstepcounter/stopstepcountingupdates())

# stopStepCountingUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Stops the delivery of step-counting updates to your app.

> Use CMPedometer instead

## Declaration

```swift
func stopStepCountingUpdates()
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the delivery of updates that you started by calling the [startStepCountingUpdates(to:updateOn:withHandler:)](startstepcountingupdates%28to_updateon_withhandler_%29.md) method. This method does not stop queries started using the [queryStepCountStarting(from:to:to:withHandler:)](querystepcountstarting%28from_to_to_withhandler_%29.md) method.

## See Also

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdates(to:updateOn:withHandler:)](startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [CMStepUpdateHandler](../cmstepupdatehandler.md): A block that reports the number of steps recorded since updates began.

# stopStepCountingUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Stops the delivery of step-counting updates to your app.

> Use CMPedometer instead

## Declaration

```objectivec
- (void) stopStepCountingUpdates;
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the delivery of updates that you started by calling the [startStepCountingUpdatesToQueue:updateOn:withHandler:](startstepcountingupdates%28to_updateon_withhandler_%29.md) method. This method does not stop queries started using the [queryStepCountStartingFrom:to:toQueue:withHandler:](querystepcountstarting%28from_to_to_withhandler_%29.md) method.

## See Also

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdatesToQueue:updateOn:withHandler:](startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [CMStepUpdateHandler](../cmstepupdatehandler.md): A block that reports the number of steps recorded since updates began.
