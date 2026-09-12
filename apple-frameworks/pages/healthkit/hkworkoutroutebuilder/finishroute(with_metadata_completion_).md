> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutebuilder/finishroute(with:metadata:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutroutebuilder/finishroute(with:metadata:completion:))

# finishRoute(with:metadata:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Creates, saves, and associates the route with the provided workout.

## Declaration

```swift
func finishRoute(with workout: HKWorkout, metadata: [String : Any]?, completion: @escaping @Sendable (HKWorkoutRoute?, (any Error)?) -> Void)
```

```swift
func finishRoute(with workout: HKWorkout, metadata: [String : Any]?) async throws -> HKWorkoutRoute
```

## Parameters

- `workout`: The workout to associate with the route. You must have already saved this workout to the HealthKit store.
- `metadata`: The metadata dictionary can contain extra information describing this sample. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values may be [HKQuantity](../hkquantity.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own custom keys as needed to extend the HealthKit quantity sample’s capabilities.
- `completion`: A block called after the system has saved the route data. The system passes the block the following parameters:

  - **`workoutRoute`**: The workout route, or `nil` if an error occurred. If successful, the system has already associated the route with the provided workout and saved it to the HealthKit store.
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

<a id="Discussion"></a>

## Discussion

Call this method after adding all the route data to the builder. The builder creates the route and saves it to the HealthKit store. It also associates the route with the provided workout. You cannot associate the route with another workout.

> **Note**

>  You must call [finishRoute(with:metadata:completion:)](finishroute%28with_metadata_completion_%29.md) before the system deallocates the builder. Failure to do so results in a loss of all route data added to the builder.

This method fails if you haven’t added any location data to the builder. The completion handler returns an error and `nil` for the route.

Additionally, this method invalidates the builder. Any further calls to the builder returns an error. To subsequently access the workout route, use a query (for example, an [HKSampleQuery](../hksamplequery.md) object).

## See Also

### Building the route

- [insertRouteData(\_:completion:)](insertroutedata%28__completion_%29.md): Adds route data to the builder.
- [addMetadata(\_:completion:)](addmetadata%28__completion_%29.md): Adds metadata to the builder.

# finishRouteWithWorkout:metadata:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Creates, saves, and associates the route with the provided workout.

## Declaration

```objectivec
- (void) finishRouteWithWorkout:(HKWorkout *) workout metadata:(NSDictionary<NSString *,id> *) metadata completion:(void (^)(HKWorkoutRoute *workoutRoute, NSError *error)) completion;
```

## Parameters

- `workout`: The workout to associate with the route. You must have already saved this workout to the HealthKit store.
- `metadata`: The metadata dictionary can contain extra information describing this sample. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values may be [HKQuantity](../hkquantity.md), [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

  Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own custom keys as needed to extend the HealthKit quantity sample’s capabilities.
- `completion`: A block called after the system has saved the route data. The system passes the block the following parameters:

  - **`workoutRoute`**: The workout route, or `nil` if an error occurred. If successful, the system has already associated the route with the provided workout and saved it to the HealthKit store.
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

<a id="Discussion"></a>

## Discussion

Call this method after adding all the route data to the builder. The builder creates the route and saves it to the HealthKit store. It also associates the route with the provided workout. You cannot associate the route with another workout.

> **Note**

>  You must call [finishRouteWithWorkout:metadata:completion:](finishroute%28with_metadata_completion_%29.md) before the system deallocates the builder. Failure to do so results in a loss of all route data added to the builder.

This method fails if you haven’t added any location data to the builder. The completion handler returns an error and `nil` for the route.

Additionally, this method invalidates the builder. Any further calls to the builder returns an error. To subsequently access the workout route, use a query (for example, an [HKSampleQuery](../hksamplequery.md) object).

## See Also

### Building the route

- [insertRouteData:completion:](insertroutedata%28__completion_%29.md): Adds route data to the builder.
- [addMetadata:completion:](addmetadata%28__completion_%29.md): Adds metadata to the builder.
