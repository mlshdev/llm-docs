> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepqueryhandler](https://developer.apple.com/documentation/coremotion/cmstepqueryhandler)

# CMStepQueryHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A block that reports the number of steps for a query operation.

## Declaration

```swift
typealias CMStepQueryHandler = (Int, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

This block takes two parameters:

- **`numberOfSteps`**: The number of steps that occurred between the start and end times specified by the query.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the number of steps was determined correctly.

## See Also

### Getting Historical Step Counting Data

- [queryStepCountStarting(from:to:to:withHandler:)](cmstepcounter/querystepcountstarting%28from_to_to_withhandler_%29.md): Deprecated. Gathers and returns historical step count data for the specified time period.

# CMStepQueryHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

A block that reports the number of steps for a query operation.

## Declaration

```objectivec
typedef void (^)(long, NSError *) CMStepQueryHandler;
```

<a id="Discussion"></a>

## Discussion

This block takes two parameters:

- **`numberOfSteps`**: The number of steps that occurred between the start and end times specified by the query.
- **`error`**: An error object indicating that there was a problem gathering the data or `nil` if the number of steps was determined correctly.

## See Also

### Getting Historical Step Counting Data

- [queryStepCountStartingFrom:to:toQueue:withHandler:](cmstepcounter/querystepcountstarting%28from_to_to_withhandler_%29.md): Deprecated. Gathers and returns historical step count data for the specified time period.
