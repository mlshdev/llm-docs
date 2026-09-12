> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutroutebuilder/insertroutedata(_:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutroutebuilder/insertroutedata(_:completion:))

# insertRouteData(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Adds route data to the builder.

## Declaration

```swift
func insertRouteData(_ routeData: [CLLocation], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func insertRouteData(_ routeData: [CLLocation]) async throws
```

## Parameters

- `routeData`: An array containing one or more location objects.
- `completion`: A block called after the system adds the collection data to the builder. The system passes the block the following parameters:

  - **`success`**: A Boolean value that indicates whether the  builder successfully received the route data.
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

<a id="Discussion"></a>

## Discussion

Use this method to asynchronously add one or more [CLLocation](../../corelocation/cllocation.md) objects to the series. The [CLLocation](../../corelocation/cllocation.md) objects may be inserted in any order; the builder sorts them by date when finalizing the route.

## See Also

### Building the route

- [finishRoute(with:metadata:completion:)](finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [addMetadata(\_:completion:)](addmetadata%28__completion_%29.md): Adds metadata to the builder.

# insertRouteData:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Adds route data to the builder.

## Declaration

```objectivec
- (void) insertRouteData:(NSArray<CLLocation *> *) routeData completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `routeData`: An array containing one or more location objects.
- `completion`: A block called after the system adds the collection data to the builder. The system passes the block the following parameters:

  - **`success`**: A Boolean value that indicates whether the  builder successfully received the route data.
  - **`error`**: An object that describes the error, if an error has occurred; otherwise, `nil`.

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

<a id="Discussion"></a>

## Discussion

Use this method to asynchronously add one or more [CLLocation](../../corelocation/cllocation.md) objects to the series. The [CLLocation](../../corelocation/cllocation.md) objects may be inserted in any order; the builder sorts them by date when finalizing the route.

## See Also

### Building the route

- [finishRouteWithWorkout:metadata:completion:](finishroute%28with_metadata_completion_%29.md): Creates, saves, and associates the route with the provided workout.
- [addMetadata:completion:](addmetadata%28__completion_%29.md): Adds metadata to the builder.
