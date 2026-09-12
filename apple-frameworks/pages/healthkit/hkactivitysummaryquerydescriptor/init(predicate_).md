> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummaryquerydescriptor/init(predicate:)](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquerydescriptor/init(predicate:))

# init(predicate:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Instantiates an activity summary query descriptor.

## Declaration

```swift
init(predicate: NSPredicate?)
```

## Parameters

- `predicate`: A predicate that limits the results that the query returns. For a list of convenience methods for building predicates, see [HKQuery](../hkquery.md).
