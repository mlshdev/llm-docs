> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/executing-sample-queries](https://developer.apple.com/documentation/healthkit/executing-sample-queries)

# Executing Sample Queries (Swift)

**Framework:** HealthKit  
**Kind:** Article

Create, run, and sort sample queries.

<a id="overview"></a>

## Overview

Use sample queries to read samples from the HealthKit store. Each query returns a single type of sample, such as step count or heart rate. You can filter results further with a predicate, or sort the results using sort descriptors.

<a id="Create-and-Run-the-Query"></a>

### Create and Run the Query

You create a sample query by calling the [init(sampleType:predicate:limit:sortDescriptors:resultsHandler:)](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md) initializer. Start by creating the sample type.

```swift
guard let sampleType = HKSampleType.quantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryEnergyConsumed) else {
    fatalError("*** This method should never fail ***")
}
```

Then create the query itself. This query returns all dietary energy consumed samples. Its results handler checks for any errors before processing the samples, then dispatches updates to the user interface to the main queue.

```swift
let query = HKSampleQuery(sampleType: sampleType, predicate: nil, limit: Int(HKObjectQueryNoLimit), sortDescriptors: nil) {
    query, results, error in
    
    guard let samples = results as? [HKQuantitySample] else {
        // Handle any errors here.
        return
    }
    
    for sample in samples {
        // Process each sample here.
    }
    
    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

After the query is instantiated, you run it by calling the HealthKit store’s [execute(\_:)](hkhealthstore/execute%28__%29.md) method.

```swift
store.execute(query)
```

This method runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily the same thread).

<a id="Filter-and-Sort-Results"></a>

### Filter and Sort Results

By default, a query returns all samples of the specified type. Often you want the HealthKit store to filter the results, and only return a specific subset of samples. You may also want the store to sort the results before returning them.

To filter the results, create a predicate for your samples. The following code limits the search results to samples with a start date between midnight last night and midnight tonight.

```swift
let calendar = NSCalendar.current
let now = Date()
let components = calendar.dateComponents([.year, .month, .day], from: now)
    
guard let startDate = calendar.date(from: components) else {
    fatalError("*** Unable to create the start date ***")
}
 
guard let endDate = calendar.date(byAdding: .day, value: 1, to: startDate) else {
    fatalError("*** Unable to create the end date ***")
}

let today = HKQuery.predicateForSamples(withStart: startDate, end: endDate, options: [])
```

To sort the results, create one or more sort descriptors. The following code sorts the results by their start dates.

```swift
let sortByDate = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)
```

Then create a query using both the predicate and an array of sort descriptors.

```swift
let filteredAndSortedQuery = HKSampleQuery(sampleType: sampleType,
                                           predicate: today,
                                           limit: Int(HKObjectQueryNoLimit),
                                           sortDescriptors: [sortByDate]) {
    query, results, error in
    // Process the results here.
}
```

## See Also

### Creating Sample Queries

- [init(sampleType:predicate:limit:sortDescriptors:resultsHandler:)](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [init(queryDescriptors:limit:resultsHandler:)](hksamplequery/init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [init(queryDescriptors:limit:sortDescriptors:resultsHandler:)](hksamplequery/init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.

# Executing Sample Queries (Objective-C)

**Framework:** HealthKit  
**Kind:** Article

Create, run, and sort sample queries.

<a id="overview"></a>

## Overview

Use sample queries to read samples from the HealthKit store. Each query returns a single type of sample, such as step count or heart rate. You can filter results further with a predicate, or sort the results using sort descriptors.

<a id="Create-and-Run-the-Query"></a>

### Create and Run the Query

You create a sample query by calling the [initWithSampleType:predicate:limit:sortDescriptors:resultsHandler:](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md) initializer. Start by creating the sample type.

```swift
guard let sampleType = HKSampleType.quantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryEnergyConsumed) else {
    fatalError("*** This method should never fail ***")
}
```

Then create the query itself. This query returns all dietary energy consumed samples. Its results handler checks for any errors before processing the samples, then dispatches updates to the user interface to the main queue.

```swift
let query = HKSampleQuery(sampleType: sampleType, predicate: nil, limit: Int(HKObjectQueryNoLimit), sortDescriptors: nil) {
    query, results, error in
    
    guard let samples = results as? [HKQuantitySample] else {
        // Handle any errors here.
        return
    }
    
    for sample in samples {
        // Process each sample here.
    }
    
    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

After the query is instantiated, you run it by calling the HealthKit store’s [executeQuery:](hkhealthstore/execute%28__%29.md) method.

```swift
store.execute(query)
```

This method runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily the same thread).

<a id="Filter-and-Sort-Results"></a>

### Filter and Sort Results

By default, a query returns all samples of the specified type. Often you want the HealthKit store to filter the results, and only return a specific subset of samples. You may also want the store to sort the results before returning them.

To filter the results, create a predicate for your samples. The following code limits the search results to samples with a start date between midnight last night and midnight tonight.

```swift
let calendar = NSCalendar.current
let now = Date()
let components = calendar.dateComponents([.year, .month, .day], from: now)
    
guard let startDate = calendar.date(from: components) else {
    fatalError("*** Unable to create the start date ***")
}
 
guard let endDate = calendar.date(byAdding: .day, value: 1, to: startDate) else {
    fatalError("*** Unable to create the end date ***")
}

let today = HKQuery.predicateForSamples(withStart: startDate, end: endDate, options: [])
```

To sort the results, create one or more sort descriptors. The following code sorts the results by their start dates.

```swift
let sortByDate = NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)
```

Then create a query using both the predicate and an array of sort descriptors.

```swift
let filteredAndSortedQuery = HKSampleQuery(sampleType: sampleType,
                                           predicate: today,
                                           limit: Int(HKObjectQueryNoLimit),
                                           sortDescriptors: [sortByDate]) {
    query, results, error in
    // Process the results here.
}
```

## See Also

### Creating Sample Queries

- [initWithSampleType:predicate:limit:sortDescriptors:resultsHandler:](hksamplequery/init%28sampletype_predicate_limit_sortdescriptors_resultshandler_%29.md): Instantiates and returns a sample query.
- [initWithQueryDescriptors:limit:resultsHandler:](hksamplequery/init%28querydescriptors_limit_resultshandler_%29.md): Creates a query for samples that match any of the descriptors you provided.
- [initWithQueryDescriptors:limit:sortDescriptors:resultsHandler:](hksamplequery/init%28querydescriptors_limit_sortdescriptors_resultshandler_%29.md): Creates a query for samples that match any of the query descriptors you provided, sorted by the sort descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [HealthKit sort descriptors](healthkit-sort-descriptors.md): Identifiers for sorting results.
