> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkheartbeatseriesquery/init(heartbeatseries:datahandler:)](https://developer.apple.com/documentation/healthkit/hkheartbeatseriesquery/init(heartbeatseries:datahandler:))

# init(heartbeatSeries:dataHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a new heartbeat series query.

## Declaration

```swift
init(heartbeatSeries: HKHeartbeatSeriesSample, dataHandler: @escaping @Sendable (HKHeartbeatSeriesQuery, TimeInterval, Bool, Bool, (any Error)?) -> Void)
```

## Parameters

- `heartbeatSeries`: The series sample containing the heartbeat data.
- `dataHandler`: The handler called by the query. The handler takes the following parameters:

  - **`query`**: The query that returned the heartbeat data.
  - **`timeSinceSeriesStart`**: The time of the heartbeat, measured from the series builder’s start date. This must be a positive value.
  - **`precededByGap`**: A Boolean value that indicates whether this heartbeat was immediately preceded by a gap in the data, indicating that one or more heartbeats may be missing.
  - **`done`**: A Boolean value that indicates whether the query is complete.
  - **`error`**: If an error occurred, this contains an object that describes the error; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The system calls the `dataHandler` once for each heartbeat until either the `done` parameter is [true](../../foundation/nsexpression/true.md), or you call [stop(\_:)](../hkhealthstore/stop%28__%29.md).

# initWithHeartbeatSeries:dataHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new heartbeat series query.

## Declaration

```objectivec
- (instancetype) initWithHeartbeatSeries:(HKHeartbeatSeriesSample *) heartbeatSeries dataHandler:(void (^)(HKHeartbeatSeriesQuery *query, NSTimeInterval timeSinceSeriesStart, BOOL precededByGap, BOOL done, NSError *error)) dataHandler;
```

## Parameters

- `heartbeatSeries`: The series sample containing the heartbeat data.
- `dataHandler`: The handler called by the query. The handler takes the following parameters:

  - **`query`**: The query that returned the heartbeat data.
  - **`timeSinceSeriesStart`**: The time of the heartbeat, measured from the series builder’s start date. This must be a positive value.
  - **`precededByGap`**: A Boolean value that indicates whether this heartbeat was immediately preceded by a gap in the data, indicating that one or more heartbeats may be missing.
  - **`done`**: A Boolean value that indicates whether the query is complete.
  - **`error`**: If an error occurred, this contains an object that describes the error; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

The system calls the `dataHandler` once for each heartbeat until either the `done` parameter is [trueExpression](../../foundation/nsexpression/true.md), or you call [stopQuery:](../hkhealthstore/stop%28__%29.md).
