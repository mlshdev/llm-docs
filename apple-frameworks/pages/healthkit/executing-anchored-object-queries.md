> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/executing-anchored-object-queries](https://developer.apple.com/documentation/healthkit/executing-anchored-object-queries)

# Executing Anchored Object Queries (Swift)

**Framework:** HealthKit  
**Kind:** Article

Create and run an anchored object query.

<a id="overview"></a>

## Overview

Anchored object queries return changes that occurred since the previous query. These queries can also continue running in a background queue, notifying your app about any updates to the specified samples.

<a id="Create-an-Anchored-Object-Query"></a>

### Create an Anchored Object Query

You create an anchored object query by calling the [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md) initializer. Start by creating the type object for the desired samples. The following example creates a type object for step counts.

```swift
guard let stepCountType = HKObjectType.quantityType(forIdentifier: .stepCount) else {
    // This should never fail when using a defined constant.
    fatalError("*** Unable to get the step count type ***")
}
```

Next, use the type object to build an anchored object query. The following example queries for all step count samples; it doesn’t use a predicate or limit to filter the results.

```swift
let query = HKAnchoredObjectQuery(type: stepCountType,
                                  predicate: nil,
                                  anchor: myAnchor,
                                  limit: HKObjectQueryNoLimit)
{ (query, samplesOrNil, deletedObjectsOrNil, newAnchor, errorOrNil) in
    
    guard let samples = samplesOrNil, let deletedObjects = deletedObjectsOrNil else {
        // Properly handle the error.
        return
    }
    
    myAnchor = newAnchor
    
    for stepCountSample in samples {
        // Process the new step count samples.
    }
    
    for deletedStepCountSamples in deletedObjects {
        // Process the deleted step count samples.
    }

    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

After the query is instantiated, call the HealthKit store’s [execute(\_:)](hkhealthstore/execute%28__%29.md) method. This runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily the same thread).

```swift
store.execute(query)
```

When you run the query, the system passes the current results to the results handler. If the `myAnchor` property is `nil`, the query returns all the step count data currently available in the HealthKit store. On subsequent runs, the code uses the anchor returned by the previous query. These queries return only the changes since the previous run.

<a id="Create-a-Long-Running-Query"></a>

### Create a Long-Running Query

Optionally, add an update handler to create a long-running query.

```swift
query.updateHandler = { (query, samplesOrNil, deletedObjectsOrNil, newAnchor, errorOrNil) in
    guard let samples = samplesOrNil, let deletedObjects = deletedObjectsOrNil else {
        // Properly handle the error.
        return
    }
    
    myAnchor = newAnchor
    
    for stepCountSample in samples {
        // Process the step counts from the update.
    }
    
    for deletedStepCountSamples in deletedObjects {
        // Process the deleted step count samples from the update.
    }
}
```

Now, when you run the query, it continues to monitor the HealthKit store after returning the initial results. The system calls the update handler whenever it detects a change to the affected objects. Often, it’s more efficient to set up and run a single anchored object query than to run separate sample and observer queries. As a result, you may want to use anchored object queries, even when you aren’t using anchors to limit the results. In this case, set the anchor parameter to `nil`.

## See Also

### Creating Anchored Object Queries

- [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [init(queryDescriptors:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [init(type:predicate:anchor:limit:completionHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

# Executing Anchored Object Queries (Objective-C)

**Framework:** HealthKit  
**Kind:** Article

Create and run an anchored object query.

<a id="overview"></a>

## Overview

Anchored object queries return changes that occurred since the previous query. These queries can also continue running in a background queue, notifying your app about any updates to the specified samples.

<a id="Create-an-Anchored-Object-Query"></a>

### Create an Anchored Object Query

You create an anchored object query by calling the [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md) initializer. Start by creating the type object for the desired samples. The following example creates a type object for step counts.

```swift
guard let stepCountType = HKObjectType.quantityType(forIdentifier: .stepCount) else {
    // This should never fail when using a defined constant.
    fatalError("*** Unable to get the step count type ***")
}
```

Next, use the type object to build an anchored object query. The following example queries for all step count samples; it doesn’t use a predicate or limit to filter the results.

```swift
let query = HKAnchoredObjectQuery(type: stepCountType,
                                  predicate: nil,
                                  anchor: myAnchor,
                                  limit: HKObjectQueryNoLimit)
{ (query, samplesOrNil, deletedObjectsOrNil, newAnchor, errorOrNil) in
    
    guard let samples = samplesOrNil, let deletedObjects = deletedObjectsOrNil else {
        // Properly handle the error.
        return
    }
    
    myAnchor = newAnchor
    
    for stepCountSample in samples {
        // Process the new step count samples.
    }
    
    for deletedStepCountSamples in deletedObjects {
        // Process the deleted step count samples.
    }

    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

After the query is instantiated, call the HealthKit store’s [executeQuery:](hkhealthstore/execute%28__%29.md) method. This runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily the same thread).

```swift
store.execute(query)
```

When you run the query, the system passes the current results to the results handler. If the `myAnchor` property is `nil`, the query returns all the step count data currently available in the HealthKit store. On subsequent runs, the code uses the anchor returned by the previous query. These queries return only the changes since the previous run.

<a id="Create-a-Long-Running-Query"></a>

### Create a Long-Running Query

Optionally, add an update handler to create a long-running query.

```swift
query.updateHandler = { (query, samplesOrNil, deletedObjectsOrNil, newAnchor, errorOrNil) in
    guard let samples = samplesOrNil, let deletedObjects = deletedObjectsOrNil else {
        // Properly handle the error.
        return
    }
    
    myAnchor = newAnchor
    
    for stepCountSample in samples {
        // Process the step counts from the update.
    }
    
    for deletedStepCountSamples in deletedObjects {
        // Process the deleted step count samples from the update.
    }
}
```

Now, when you run the query, it continues to monitor the HealthKit store after returning the initial results. The system calls the update handler whenever it detects a change to the affected objects. Often, it’s more efficient to set up and run a single anchored object query than to run separate sample and observer queries. As a result, you may want to use anchored object queries, even when you aren’t using anchors to limit the results. In this case, set the anchor parameter to `nil`.

## See Also

### Creating Anchored Object Queries

- [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [initWithQueryDescriptors:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.
- [initWithType:predicate:anchor:limit:completionHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.
