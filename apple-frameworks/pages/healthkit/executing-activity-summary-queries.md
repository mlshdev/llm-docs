> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/executing-activity-summary-queries](https://developer.apple.com/documentation/healthkit/executing-activity-summary-queries)

# Executing Activity Summary Queries (Swift)

**Framework:** HealthKit  
**Kind:** Article

Create and run activity summary queries.

<a id="overview"></a>

## Overview

Use activity summary queries to read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store. Apps can display summary information using an activity ring view ([HKActivityRingView](../healthkitui/hkactivityringview.md) on iOS or [WKInterfaceActivityRing](https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring) on watchOS).

<a id="Create-the-Predicate"></a>

### Create the Predicate

Start by creating a predicate for summaries over the previous week.

```swift
let calendar = NSCalendar.current
let endDate = Date()
 
guard let startDate = calendar.date(byAdding: .day, value: -7, to: endDate) else {
    fatalError("*** Unable to create the start date ***")
}

let units: Set<Calendar.Component> = [.day, .month, .year, .era]

var startDateComponents = calendar.dateComponents(units, from: startDate)
startDateComponents.calendar = calendar

var endDateComponents = calendar.dateComponents(units, from: endDate)
endDateComponents.calendar = calendar

// Create the predicate for the query
let summariesWithinRange = HKQuery.predicate(forActivitySummariesBetweenStart: startDateComponents,
                                             end: endDateComponents)
```

<a id="Create-the-Query"></a>

### Create the Query

Then create an activity summary query by calling the [init(predicate:resultsHandler:)](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md) initializer.

```swift
let query = HKActivitySummaryQuery(predicate: summariesWithinRange) { (query, summariesOrNil, errorOrNil) -> Void in
    
    guard let summaries = summariesOrNil else {
        // Handle any errors here.
        return
    }
    
    for summary in summaries {
        // Process each summary here.
    }
    
    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

The query returns an array of activity summary objects. The results handler should check for errors before processing the summaries. It should also dispatch updates to the user interface back to the main thread.

<a id="Run-the-Query"></a>

### Run the Query

After instantiating the query, call the HealthKit store’s [execute(\_:)](hkhealthstore/execute%28__%29.md) method.

```swift
store.execute(query)
```

This method runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily on the same thread).

## See Also

### Creating activity summary queries

- [init(predicate:resultsHandler:)](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md): Initializes a new active summary query.

# Executing Activity Summary Queries (Objective-C)

**Framework:** HealthKit  
**Kind:** Article

Create and run activity summary queries.

<a id="overview"></a>

## Overview

Use activity summary queries to read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store. Apps can display summary information using an activity ring view ([HKActivityRingView](../healthkitui/hkactivityringview.md) on iOS or [WKInterfaceActivityRing](https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring) on watchOS).

<a id="Create-the-Predicate"></a>

### Create the Predicate

Start by creating a predicate for summaries over the previous week.

```swift
let calendar = NSCalendar.current
let endDate = Date()
 
guard let startDate = calendar.date(byAdding: .day, value: -7, to: endDate) else {
    fatalError("*** Unable to create the start date ***")
}

let units: Set<Calendar.Component> = [.day, .month, .year, .era]

var startDateComponents = calendar.dateComponents(units, from: startDate)
startDateComponents.calendar = calendar

var endDateComponents = calendar.dateComponents(units, from: endDate)
endDateComponents.calendar = calendar

// Create the predicate for the query
let summariesWithinRange = HKQuery.predicate(forActivitySummariesBetweenStart: startDateComponents,
                                             end: endDateComponents)
```

<a id="Create-the-Query"></a>

### Create the Query

Then create an activity summary query by calling the [initWithPredicate:resultsHandler:](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md) initializer.

```swift
let query = HKActivitySummaryQuery(predicate: summariesWithinRange) { (query, summariesOrNil, errorOrNil) -> Void in
    
    guard let summaries = summariesOrNil else {
        // Handle any errors here.
        return
    }
    
    for summary in summaries {
        // Process each summary here.
    }
    
    // The results come back on an anonymous background queue.
    // Dispatch to the main queue before modifying the UI.
    
    DispatchQueue.main.async {
        // Update the UI here.
    }
}
```

The query returns an array of activity summary objects. The results handler should check for errors before processing the summaries. It should also dispatch updates to the user interface back to the main thread.

<a id="Run-the-Query"></a>

### Run the Query

After instantiating the query, call the HealthKit store’s [executeQuery:](hkhealthstore/execute%28__%29.md) method.

```swift
store.execute(query)
```

This method runs the query on an anonymous background queue. When the query is complete, it executes the results handler on the same background queue (but not necessarily on the same thread).

## See Also

### Creating activity summary queries

- [initWithPredicate:resultsHandler:](hkactivitysummaryquery/init%28predicate_resultshandler_%29.md): Initializes a new active summary query.
