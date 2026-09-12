> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserannotatedmedicationquery/init(predicate:limit:resultshandler:)](https://developer.apple.com/documentation/healthkit/hkuserannotatedmedicationquery/init(predicate:limit:resultshandler:))

# init(predicate:limit:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(predicate: NSPredicate?, limit: Int, resultsHandler: @escaping (HKUserAnnotatedMedicationQuery, HKUserAnnotatedMedication?, Bool, (any Error)?) -> Void)
```

## Parameters

- `predicate`: The predicate which user annotated medications should match.
- `limit`: The maximum number of  user annotated medications to return.  Pass HKObjectQueryNoLimit for no limit.
- `resultsHandler`: The block to invoke with results to deliver to the client. The results handler will be called with done = YES when there are no more user annotated medications to enumerate.

<a id="discussion"></a>

## Discussion

Returns a query that will retrieve HKUserAnnotatedMedications matching the given predicate and limit.

# initWithPredicate:limit:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
- (instancetype) initWithPredicate:(NSPredicate *) predicate limit:(NSUInteger) limit resultsHandler:(void (^)(HKUserAnnotatedMedicationQuery *query, HKUserAnnotatedMedication *userAnnotatedMedication, BOOL done, NSError *error)) resultsHandler;
```

## Parameters

- `predicate`: The predicate which user annotated medications should match.
- `limit`: The maximum number of  user annotated medications to return.  Pass HKObjectQueryNoLimit for no limit.
- `resultsHandler`: The block to invoke with results to deliver to the client. The results handler will be called with done = YES when there are no more user annotated medications to enumerate.

<a id="discussion"></a>

## Discussion

Returns a query that will retrieve HKUserAnnotatedMedications matching the given predicate and limit.
