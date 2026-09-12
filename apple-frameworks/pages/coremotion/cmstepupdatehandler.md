> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepupdatehandler](https://developer.apple.com/documentation/coremotion/cmstepupdatehandler)

# CMStepUpdateHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A block that reports the number of steps recorded since updates began.

## Declaration

```swift
typealias CMStepUpdateHandler = (Int, Date, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameters:

- **`numberOfSteps`**: The total number of steps since the [startStepCountingUpdates(to:updateOn:withHandler:)](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md) method was called.
- **`timestamp`**: The time at which the current step count was reported.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the number of steps was determined correctly.

## See Also

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdates(to:updateOn:withHandler:)](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [stopStepCountingUpdates()](cmstepcounter/stopstepcountingupdates%28%29.md): Deprecated. Stops the delivery of step-counting updates to your app.

# CMStepUpdateHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A block that reports the number of steps recorded since updates began.

## Declaration

```objectivec
typedef void (^)(long, NSDate *, NSError *) CMStepUpdateHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameters:

- **`numberOfSteps`**: The total number of steps since the [startStepCountingUpdatesToQueue:updateOn:withHandler:](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md) method was called.
- **`timestamp`**: The time at which the current step count was reported.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the number of steps was determined correctly.

## See Also

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdatesToQueue:updateOn:withHandler:](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [stopStepCountingUpdates](cmstepcounter/stopstepcountingupdates%28%29.md): Deprecated. Stops the delivery of step-counting updates to your app.
