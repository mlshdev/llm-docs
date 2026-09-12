> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjectquerynolimit](https://developer.apple.com/documentation/healthkit/hkobjectquerynolimit)

# HKObjectQueryNoLimit (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value indicating that the query returns all the matching samples in the HealthKit store.

## Declaration

```swift
var HKObjectQueryNoLimit: Int { get }
```

## See Also

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](executing-anchored-object-queries.md): Create and run an anchored object query.
- [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [init(queryDescriptors:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [init(type:predicate:anchor:limit:completionHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.

# HKObjectQueryNoLimit (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value indicating that the query returns all the matching samples in the HealthKit store.

## Declaration

```objectivec
static const NSUInteger HKObjectQueryNoLimit;
```

## See Also

### Creating Anchored Object Queries

- [Executing Anchored Object Queries](executing-anchored-object-queries.md): Create and run an anchored object query.
- [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md): Initializes a new anchored object query.
- [initWithQueryDescriptors:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28querydescriptors_anchor_limit_resultshandler_%29.md): Creates an anchored object query that matches any of the query descriptors you provided.
- [initWithType:predicate:anchor:limit:completionHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md): Deprecated. Initializes a new anchored object query.
