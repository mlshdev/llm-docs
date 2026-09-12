> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequery/init(querydescriptors:limit:resultshandler:)](https://developer.apple.com/documentation/healthkit/hksamplequery/init(querydescriptors:limit:resultshandler:))

# init(queryDescriptors:limit:resultsHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a query for samples that match any of the descriptors you provided.

## Declaration

```swift
init(queryDescriptors: [HKQueryDescriptor], limit: Int, resultsHandler: @escaping @Sendable (HKSampleQuery, [HKSample]?, (any Error)?) -> Void)
```

## Parameters

- `queryDescriptors`: An array of descriptors that specify the types of samples that the query returns.
- `limit`: The maximum number of samples that the query return. If you want to return all matching samples, use [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`results`**: An array containing the samples the query found, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a sample query for data that matches any of the [HKQueryDescriptor](../hkquerydescriptor.md) objects. Each descriptor can specify a different data type.

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [execute(\_:)](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the system executes the results handler on the background queue, returning samples that match any of the descriptors. You typically dispatch these results to the main queue to update the user interface.

For example, the following code returns all the step count and push count samples:

```swift
// Create the data types.
let stepCountType = HKQuantityType(.stepCount)
let pushCountType = HKQuantityType(.pushCount)

// Specify the desired sample types.
let stepDescriptor = HKQueryDescriptor(sampleType: stepCountType, predicate: nil)
let pushDescriptor = HKQueryDescriptor(sampleType: pushCountType, predicate: nil)

// Create the query.
let query = HKSampleQuery(queryDescriptors: [stepDescriptor, pushDescriptor],
                          limit: HKObjectQueryNoLimit) { (query, samples, error) in
    
    if let error = error {
        // Handle errors here.
    }
    
    
    DispatchQueue.main.async {
        // Process the samples here.
    }
}

// Run the query.
store.execute(query)
```

## See Also

### Creating Sample Queries

- [Executing Sample Queries](../executing-sample-queries.md): Create, run, and sort sample queries.
- [init(sampleType:predicate:limit:sortDescriptors:resultsHandler:)](init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [init(queryDescriptors:limit:sortDescriptors:resultsHandler:)](init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](../healthkit-sort-descriptors.md): Identifiers for sorting results.

# initWithQueryDescriptors:limit:resultsHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a query for samples that match any of the descriptors you provided.

## Declaration

```objectivec
- (instancetype) initWithQueryDescriptors:(NSArray<HKQueryDescriptor *> *) queryDescriptors limit:(NSInteger) limit resultsHandler:(void (^)(HKSampleQuery *query, NSArray<__kindof HKSample *> *results, NSError *error)) resultsHandler;
```

## Parameters

- `queryDescriptors`: An array of descriptors that specify the types of samples that the query returns.
- `limit`: The maximum number of samples that the query return. If you want to return all matching samples, use [HKObjectQueryNoLimit](../hkobjectquerynolimit.md).
- `resultsHandler`: A block that the HealthKit store calls after it finishes executing the query.

  This block takes the following parameters:

  - **`query`**: A reference to the query that called this block.
  - **`results`**: An array containing the samples the query found, or `nil` if an error occurs.
  - **`error`**: If an error occurs, an object describing the error; otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a sample query for data that matches any of the [HKQueryDescriptor](../hkquerydescriptor.md) objects. Each descriptor can specify a different data type.

After instantiating the query, call the [HKHealthStore](../hkhealthstore.md) class’s [executeQuery:](../hkhealthstore/execute%28__%29.md) method to run this query. Queries run on an anonymous background queue. As soon as the query is complete, the system executes the results handler on the background queue, returning samples that match any of the descriptors. You typically dispatch these results to the main queue to update the user interface.

For example, the following code returns all the step count and push count samples:

```swift
// Create the data types.
let stepCountType = HKQuantityType(.stepCount)
let pushCountType = HKQuantityType(.pushCount)

// Specify the desired sample types.
let stepDescriptor = HKQueryDescriptor(sampleType: stepCountType, predicate: nil)
let pushDescriptor = HKQueryDescriptor(sampleType: pushCountType, predicate: nil)

// Create the query.
let query = HKSampleQuery(queryDescriptors: [stepDescriptor, pushDescriptor],
                          limit: HKObjectQueryNoLimit) { (query, samples, error) in
    
    if let error = error {
        // Handle errors here.
    }
    
    
    DispatchQueue.main.async {
        // Process the samples here.
    }
}

// Run the query.
store.execute(query)
```

## See Also

### Creating Sample Queries

- [Executing Sample Queries](../executing-sample-queries.md): Create, run, and sort sample queries.
- [initWithSampleType:predicate:limit:sortDescriptors:resultsHandler:](init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [initWithQueryDescriptors:limit:sortDescriptors:resultsHandler:](init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](../hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](../healthkit-sort-descriptors.md): Identifiers for sorting results.
