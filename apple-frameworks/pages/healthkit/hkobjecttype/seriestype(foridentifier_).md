> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/seriestype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/seriestype(foridentifier:))

# seriesType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the shared series type for the provided identifier.

## Declaration

```swift
class func seriesType(forIdentifier identifier: String) -> HKSeriesType?
```

## Parameters

- `identifier`: A series type identifier. In iOS 11 and watchOS 4, there is only one series type identifier: [HKWorkoutRouteTypeIdentifier](../hkworkoutroutetypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKSeriesType](../hkseriestype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKSeriesType](../hkseriestype.md) concrete subclass. HealthKit uses series types to represent samples that store a series of items. You can’t directly instantiate these samples; instead, use a [HKSeriesBuilder](../hkseriesbuilder.md) subclass to create them. Use series types to ask  for permission to read series data from the HealthKit store.

## See Also

### Related Documentation

- [workoutRoute()](../hkseriestype/workoutroute%28%29.md): Returns a series type object for workout routes.
- [HKWorkoutRoute](../hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteBuilder](../hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.

# seriesTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the shared series type for the provided identifier.

## Declaration

```objectivec
+ (HKSeriesType *) seriesTypeForIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: A series type identifier. In iOS 11 and watchOS 4, there is only one series type identifier: [HKWorkoutRouteTypeIdentifier](../hkworkoutroutetypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKSeriesType](../hkseriestype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKSeriesType](../hkseriestype.md) concrete subclass. HealthKit uses series types to represent samples that store a series of items. You can’t directly instantiate these samples; instead, use a [HKSeriesBuilder](../hkseriesbuilder.md) subclass to create them. Use series types to ask  for permission to read series data from the HealthKit store.

## See Also

### Related Documentation

- [workoutRouteType](../hkseriestype/workoutroute%28%29.md): Returns a series type object for workout routes.
- [HKWorkoutRoute](../hkworkoutroute.md): A sample that contains a workout’s route data.
- [HKWorkoutRouteBuilder](../hkworkoutroutebuilder.md): A builder object that incrementally constructs a workout route.
