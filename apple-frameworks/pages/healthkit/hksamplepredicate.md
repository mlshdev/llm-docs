> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplepredicate](https://developer.apple.com/documentation/healthkit/hksamplepredicate)

# HKSamplePredicate

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A predicate for queries that return a collection of matching sample objects.

## Declaration

```swift
struct HKSamplePredicate<Sample> where Sample : HKSample
```

<a id="overview"></a>

## Overview

The [HKSamplePredicate](hksamplepredicate.md) structure bundles an [HKSampleType](hksampletype.md) and an optional [NSPredicate](../foundation/nspredicate.md). The structure is generic. You can create it for any [HKSampleType](hksampletype.md) subclass, and it automatically sets the `Sample` type to the matching [HKSampleType](hksampletype.md) subtype. As a result, any query that you build using this structure returns properly typed results.

To create an [HKSamplePredicate](hksamplepredicate.md) instance, call one of its constructor methods.

```swift
let stepType = HKQuantityType(.stepCount)
let predicate = HKSamplePredicate.quantitySample(type: stepType)

let descriptor = HKSampleQueryDescriptor(
    predicates:[predicate],
    sortDescriptors: [],
    limit: 10)

// The results are an array of HKQuantitySample objects.
let results = try await descriptor.result(for: store)
```

## Topics

### Creating Sample Predicates

- [audiogram(\_:)](hksamplepredicate/audiogram%28__%29.md): Returns a sample predicate that matches audiogram samples.
- [categorySample(type:predicate:)](hksamplepredicate/categorysample%28type_predicate_%29.md): Returns a sample predicate that matches category samples.
- [clinicalRecord(type:predicate:)](hksamplepredicate/clinicalrecord%28type_predicate_%29.md): Returns a sample predicate that matches clinical record samples.
- [correlation(type:predicate:)](hksamplepredicate/correlation%28type_predicate_%29.md): Returns a sample predicate that matches samples that contain correlated data.
- [electrocardiogram(\_:)](hksamplepredicate/electrocardiogram%28__%29.md): Returns a sample predicate that matches electrocardiogram samples.
- [heartbeatSeries(\_:)](hksamplepredicate/heartbeatseries%28__%29.md): Returns a sample predicate that matches heartbeat series samples.
- [quantitySample(type:predicate:)](hksamplepredicate/quantitysample%28type_predicate_%29.md): Returns a sample predicate that matches quantity samples.
- [sample(type:predicate:)](hksamplepredicate/sample%28type_predicate_%29.md): Returns a sample predicate that matches samples.
- [visionPrescription(\_:)](hksamplepredicate/visionprescription%28__%29.md): Conforms when `Sample` inherits `HKSample`. Returns a predicate that matches prescription samples.
- [workout(\_:)](hksamplepredicate/workout%28__%29.md): Returns a sample predicate that matches workout samples.
- [workoutRoute(\_:)](hksamplepredicate/workoutroute%28__%29.md): Returns a sample predicate that matches samples containing workout route data.

### Accessing Sample Predicate Data

- [nsPredicate](hksamplepredicate/nspredicate.md): An optional predicate that further restricts the results that the query returns.
- [sampleType](hksamplepredicate/sampletype.md): The type of samples that the query returns.

### Type Methods

- [gad7Assessment(\_:)](hksamplepredicate/gad7assessment%28__%29.md): Conforms when `Sample` inherits `HKSample`.
- [phq9Assessment(\_:)](hksamplepredicate/phq9assessment%28__%29.md): Conforms when `Sample` inherits `HKSample`.
- [stateOfMind(\_:)](hksamplepredicate/stateofmind%28__%29.md): Conforms when `Sample` inherits `HKSample`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Swift concurrency support

- [Running Queries with Swift Concurrency](running-queries-with-swift-concurrency.md): Use Swift concurrency to manage one-shot and long-running queries.
- [HKAsyncQuery](hkasyncquery.md): A protocol that defines an asynchronous method for running queries.
- [HKAsyncSequenceQuery](hkasyncsequencequery.md): A protocol that defines a method for running queries that returns results using an asynchronous sequence.
