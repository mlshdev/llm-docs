> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerynoanchor](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerynoanchor)

# HKAnchoredObjectQueryNoAnchor (Swift)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An anchor that returns all of the matching samples currently in the HealthKit store.

## Declaration

```swift
var HKAnchoredObjectQueryNoAnchor: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Only use this constant to support iOS 8 (using the deprecated [init(type:predicate:anchor:limit:completionHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md) method). In iOS 9 and later, use [init(type:predicate:anchor:limit:resultsHandler:)](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md) and pass `nil` instead.

Use this constant the first time you perform an anchored object query. The resulting query returns all the matching samples currently in the HealthKit store. For subsequent anchored object queries, use the anchor returned by the previous query. The resulting query returns only samples that have been added to the HealthKit store since the previous query.

# HKAnchoredObjectQueryNoAnchor (Objective-C)

**Framework:** HealthKit  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An anchor that returns all of the matching samples currently in the HealthKit store.

## Declaration

```objectivec
#define HKAnchoredObjectQueryNoAnchor
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Only use this constant to support iOS 8 (using the deprecated [initWithType:predicate:anchor:limit:completionHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_completionhandler_%29.md) method). In iOS 9 and later, use [initWithType:predicate:anchor:limit:resultsHandler:](hkanchoredobjectquery/init%28type_predicate_anchor_limit_resultshandler_%29.md) and pass `nil` instead.

Use this constant the first time you perform an anchored object query. The resulting query returns all the matching samples currently in the HealthKit store. For subsequent anchored object queries, use the anchor returned by the previous query. The resulting query returns only samples that have been added to the HealthKit store since the previous query.

## See Also

### Macros

- [HK_EXTERN](hk_extern.md)
