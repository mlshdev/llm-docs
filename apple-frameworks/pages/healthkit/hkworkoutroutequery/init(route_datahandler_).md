> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutequery/init(route:datahandler:)](https://developer.apple.com/documentation/healthkit/hkworkoutroutequery/init(route:datahandler:))

# init(route:dataHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Creates a new query to access the location data associated with a workout route.

## Declaration

```swift
init(route workoutRoute: HKWorkoutRoute, dataHandler: @escaping @Sendable (HKWorkoutRouteQuery, [CLLocation]?, Bool, (any Error)?) -> Void)
```

## Parameters

- `workoutRoute`: The workout route containing the location data.
- `dataHandler`: A block called each time the system returns a batch of location data. This block may be called one or more times.

  The block is passed the following parameters:

  - **`query`**: The query that returns the location data.
  - **`routeData`**: A batch of location data, or `nil` if an error has occurred.
  - **`done`**: A Boolean value that indicates whether the query is complete. It is [true](https://developer.apple.com/documentation/swift/true) if all the location data has been returned. If one or more additional batches of data are still pending, it is [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized route query.

## See Also

### Creating route queries

- [init(route:dateInterval:dataHandler:)](init%28route_dateinterval_datahandler_%29.md): Creates a new query to access the location data associated with a workout route during the specified date interval.

# initWithRoute:dataHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a new query to access the location data associated with a workout route.

## Declaration

```objectivec
- (instancetype) initWithRoute:(HKWorkoutRoute *) workoutRoute dataHandler:(void (^)(HKWorkoutRouteQuery *query, NSArray<CLLocation *> *routeData, BOOL done, NSError *error)) dataHandler;
```

## Parameters

- `workoutRoute`: The workout route containing the location data.
- `dataHandler`: A block called each time the system returns a batch of location data. This block may be called one or more times.

  The block is passed the following parameters:

  - **`query`**: The query that returns the location data.
  - **`routeData`**: A batch of location data, or `nil` if an error has occurred.
  - **`done`**: A Boolean value that indicates whether the query is complete. It is [true](https://developer.apple.com/documentation/swift/true) if all the location data has been returned. If one or more additional batches of data are still pending, it is [false](https://developer.apple.com/documentation/swift/false).
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A newly initialized route query.

## See Also

### Creating route queries

- [initWithRoute:dateInterval:dataHandler:](init%28route_dateinterval_datahandler_%29.md): Creates a new query to access the location data associated with a workout route during the specified date interval.
