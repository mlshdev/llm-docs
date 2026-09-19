> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmmotionactivitymanager/stopactivityupdates()

# stopActivityUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the delivery of motion updates to your app

## Declaration

```swift
func stopActivityUpdates()
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the delivery of updates that you started by calling the [startActivityUpdates(to:withHandler:)](startactivityupdates%28to_withhandler_%29.md) method. This method does not stop queries started using the [queryActivityStarting(from:to:to:withHandler:)](queryactivitystarting%28from_to_to_withhandler_%29.md) method.

## See Also

### Starting and Stopping Activity Updates

- [startActivityUpdates(to:withHandler:)](startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [CMMotionActivityHandler](../cmmotionactivityhandler.md): A block that reports the current motion associated with the device.

# stopActivityUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

Stops the delivery of motion updates to your app

## Declaration

```objectivec
- (void) stopActivityUpdates;
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the delivery of updates that you started by calling the [startActivityUpdatesToQueue:withHandler:](startactivityupdates%28to_withhandler_%29.md) method. This method does not stop queries started using the [queryActivityStartingFromDate:toDate:toQueue:withHandler:](queryactivitystarting%28from_to_to_withhandler_%29.md) method.

## See Also

### Starting and Stopping Activity Updates

- [startActivityUpdatesToQueue:withHandler:](startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [CMMotionActivityHandler](../cmmotionactivityhandler.md): A block that reports the current motion associated with the device.
