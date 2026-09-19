> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkouteffortrelationshipquery/init(predicate:anchor:options:resultshandler:)

# init(predicate:anchor:options:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
init(predicate: NSPredicate?, anchor: HKQueryAnchor?, options: HKWorkoutEffortRelationshipQueryOptions, resultsHandler: @escaping @Sendable (HKWorkoutEffortRelationshipQuery, [HKWorkoutEffortRelationship]?, HKQueryAnchor?, (any Error)?) -> Void)
```

# initWithPredicate:anchor:options:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
- (instancetype) initWithPredicate:(NSPredicate *) predicate anchor:(HKQueryAnchor *) anchor options:(HKWorkoutEffortRelationshipQueryOptions) options resultsHandler:(void (^)(HKWorkoutEffortRelationshipQuery *query, NSArray<HKWorkoutEffortRelationship *> *relationships, HKQueryAnchor *newAnchor, NSError *error)) resultsHandler;
```
