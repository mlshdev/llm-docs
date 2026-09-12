> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplepredicate/heartbeatseries(_:)](https://developer.apple.com/documentation/healthkit/hksamplepredicate/heartbeatseries(_:))

# heartbeatSeries(\_:)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Returns a sample predicate that matches heartbeat series samples.

## Declaration

```swift
static func heartbeatSeries(_ predicate: NSPredicate? = nil) -> HKSamplePredicate<HKHeartbeatSeriesSample>
```

## Parameters

- `predicate`: An optional predicate that further restricts the results that the query returns.

<a id="Discussion"></a>

## Discussion

Use this method to create an [HKSamplePredicate](../hksamplepredicate.md) instance that you can use to query for [HKHeartbeatSeriesSample](../hkheartbeatseriessample.md) objects.

## See Also

### Creating Sample Predicates

- [audiogram(\_:)](audiogram%28__%29.md): Returns a sample predicate that matches audiogram samples.
- [categorySample(type:predicate:)](categorysample%28type_predicate_%29.md): Returns a sample predicate that matches category samples.
- [clinicalRecord(type:predicate:)](clinicalrecord%28type_predicate_%29.md): Returns a sample predicate that matches clinical record samples.
- [correlation(type:predicate:)](correlation%28type_predicate_%29.md): Returns a sample predicate that matches samples that contain correlated data.
- [electrocardiogram(\_:)](electrocardiogram%28__%29.md): Returns a sample predicate that matches electrocardiogram samples.
- [quantitySample(type:predicate:)](quantitysample%28type_predicate_%29.md): Returns a sample predicate that matches quantity samples.
- [sample(type:predicate:)](sample%28type_predicate_%29.md): Returns a sample predicate that matches samples.
- [visionPrescription(\_:)](visionprescription%28__%29.md): Conforms when `Sample` inherits `HKSample`. Returns a predicate that matches prescription samples.
- [workout(\_:)](workout%28__%29.md): Returns a sample predicate that matches workout samples.
- [workoutRoute(\_:)](workoutroute%28__%29.md): Returns a sample predicate that matches samples containing workout route data.
