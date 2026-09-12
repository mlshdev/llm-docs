> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplepredicate/visionprescription(_:)](https://developer.apple.com/documentation/healthkit/hksamplepredicate/visionprescription(_:))

# visionPrescription(\_:)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Returns a predicate that matches prescription samples.

## Declaration

```swift
static func visionPrescription(_ predicate: NSPredicate? = nil) -> HKSamplePredicate<HKVisionPrescription>
```

## Parameters

- `predicate`: A predicate that further filters the matching prescriptions.

<a id="Discussion"></a>

## Discussion

Use this method to create a predicate that matches vision prescriptions.

```swift
// Create a predicate that matches samples stored today.
let end = Date()
let start = Calendar.current.startOfDay(for: Date())
let datePredicate = HKQuery.predicateForSamples(withStart: start, end: end)

// Create a predicate that matches vision prescriptions samples stored today.
let predicate = HKSamplePredicate.visionPrescription(datePredicate)
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
- [sample(type:predicate:)](sample%28type_predicate_%29.md): Returns a sample predicate that matches samples.
- [workout(\_:)](workout%28__%29.md): Returns a sample predicate that matches workout samples.
- [workoutRoute(\_:)](workoutroute%28__%29.md): Returns a sample predicate that matches samples containing workout route data.
