> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquantityseriessamplequery/init(sample:quantityhandler:)](https://developer.apple.com/documentation/healthkit/hkquantityseriessamplequery/init(sample:quantityhandler:))

# init(sample:quantityHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

Creates a new series query.

> Use [init(quantityType:predicate:quantityHandler:)](init%28quantitytype_predicate_quantityhandler_%29.md) instead.

## Declaration

```swift
init(sample quantitySample: HKQuantitySample, quantityHandler: @escaping @Sendable (HKQuantitySeriesSampleQuery, HKQuantity?, Date?, Bool, (any Error)?) -> Void)
```

# initWithSample:quantityHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 13.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

Creates a new series query.

> Use [initWithQuantityType:predicate:quantityHandler:](init%28quantitytype_predicate_quantityhandler_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithSample:(HKQuantitySample *) quantitySample quantityHandler:(void (^)(HKQuantitySeriesSampleQuery *query, HKQuantity *quantity, NSDate *date, BOOL done, NSError *error)) quantityHandler;
```
