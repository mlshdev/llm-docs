> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplepredicate/sample(type:predicate:)](https://developer.apple.com/documentation/healthkit/hksamplepredicate/sample(type:predicate:))

# sample(type:predicate:)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Returns a sample predicate that matches samples.

## Declaration

```swift
static func sample(type sampleType: HKSampleType, predicate: NSPredicate? = nil) -> HKSamplePredicate<HKSample>
```

## Parameters

- `sampleType`: A type that matches samples.
- `predicate`: An optional predicate that further restricts the results that the query returns.

<a id="Discussion"></a>

## Discussion

Use this method to create an [HKSamplePredicate](../hksamplepredicate.md) instance that you can use to query for a heterogenous set of sample types.

```swift
let stepType = HKQuantityType(.stepCount)
// Normally, you'd create a quantity predicate for step counts.
let stepPredicate = HKSamplePredicate.sample(type: stepType)

let highHeartRateType = HKCategoryType(.highHeartRateEvent)
// Normally, you'd create a category predicate for high heart rate events.
let highHeartRatePredicate = HKSamplePredicate.sample(type: highHeartRateType)

// By using sample predicates, you can query for different sample types.
let descriptor = HKSampleQueryDescriptor(
    predicates: [stepPredicate, highHeartRatePredicate],
    sortDescriptors: [],
    limit: 10)

// However, the results are an array of HKSample objects.
// You'll need to downcast them to access the data.
let results = try await descriptor.result(for: store)
```

## See Also

### Creating Sample Predicates

- [audiogram(\_:)](audiogram%28__%29.md): Returns a sample predicate that matches audiogram samples.
- [categorySample(type:predicate:)](categorysample%28type_predicate_%29.md): Returns a sample predicate that matches category samples.
- [clinicalRecord(type:predicate:)](clinicalrecord%28type_predicate_%29.md): Returns a sample predicate that matches clinical record samples.
- [correlation(type:predicate:)](correlation%28type_predicate_%29.md): Returns a sample predicate that matches samples that contain correlated data.
- [electrocardiogram(\_:)](electrocardiogram%28__%29.md): Returns a sample predicate that matches electrocardiogram samples.
- [heartbeatSeries(\_:)](heartbeatseries%28__%29.md): Returns a sample predicate that matches heartbeat series samples.
- [quantitySample(type:predicate:)](quantitysample%28type_predicate_%29.md): Returns a sample predicate that matches quantity samples.
- [visionPrescription(\_:)](visionprescription%28__%29.md): Conforms when `Sample` inherits `HKSample`. Returns a predicate that matches prescription samples.
- [workout(\_:)](workout%28__%29.md): Returns a sample predicate that matches workout samples.
- [workoutRoute(\_:)](workoutroute%28__%29.md): Returns a sample predicate that matches samples containing workout route data.
