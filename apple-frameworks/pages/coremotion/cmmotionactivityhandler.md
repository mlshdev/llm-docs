> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivityhandler](https://developer.apple.com/documentation/coremotion/cmmotionactivityhandler)

# CMMotionActivityHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block that reports the current motion associated with the device.

## Declaration

```swift
typealias CMMotionActivityHandler = (CMMotionActivity?) -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameter:

- **`activity`**: The motion activity object that defines the current type of motion for the device.

## See Also

### Starting and Stopping Activity Updates

- [startActivityUpdates(to:withHandler:)](cmmotionactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [stopActivityUpdates()](cmmotionactivitymanager/stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app

# CMMotionActivityHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block that reports the current motion associated with the device.

## Declaration

```objectivec
typedef void (^)(CMMotionActivity *) CMMotionActivityHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameter:

- **`activity`**: The motion activity object that defines the current type of motion for the device.

## See Also

### Starting and Stopping Activity Updates

- [startActivityUpdatesToQueue:withHandler:](cmmotionactivitymanager/startactivityupdates%28to_withhandler_%29.md): Starts the delivery of current motion data updates to your app.
- [stopActivityUpdates](cmmotionactivitymanager/stopactivityupdates%28%29.md): Stops the delivery of motion updates to your app
