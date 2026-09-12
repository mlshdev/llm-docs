> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionactivityqueryhandler](https://developer.apple.com/documentation/coremotion/cmmotionactivityqueryhandler)

# CMMotionActivityQueryHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block that reports the motion updates that occurred between the specified query interval.

## Declaration

```swift
typealias CMMotionActivityQueryHandler = ([CMMotionActivity]?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameters:

- **`activities`**: An array of [CMMotionActivity](cmmotionactivity.md) objects indicating the updates that occurred. The objects in the array are ordered by the time at which they occurred in the specified time interval. Use the [startDate](cmmotionactivity/startdate.md) property in each motion object to determine when the update occurred.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the motion data was determined correctly.

## See Also

### Getting Historical Activity Data

- [queryActivityStarting(from:to:to:withHandler:)](cmmotionactivitymanager/queryactivitystarting%28from_to_to_withhandler_%29.md): Gathers and returns historical motion data for the specified time period

# CMMotionActivityQueryHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A block that reports the motion updates that occurred between the specified query interval.

## Declaration

```objectivec
typedef void (^)(NSArray<CMMotionActivity *> *, NSError *) CMMotionActivityQueryHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes the following parameters:

- **`activities`**: An array of [CMMotionActivity](cmmotionactivity.md) objects indicating the updates that occurred. The objects in the array are ordered by the time at which they occurred in the specified time interval. Use the [startDate](cmmotionactivity/startdate.md) property in each motion object to determine when the update occurred.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the motion data was determined correctly.

## See Also

### Getting Historical Activity Data

- [queryActivityStartingFromDate:toDate:toQueue:withHandler:](cmmotionactivitymanager/queryactivitystarting%28from_to_to_withhandler_%29.md): Gathers and returns historical motion data for the specified time period
