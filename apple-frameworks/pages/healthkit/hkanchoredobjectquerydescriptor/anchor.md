> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor/anchor](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/anchor)

# anchor

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An anchor that a previous anchored object query returned.

## Declaration

```swift
var anchor: HKQueryAnchor?
```

<a id="Discussion"></a>

## Discussion

The anchor object corresponds to the last object that the previous query returned. The current query returns only samples and deleted objects newer than the anchor. Pass `nil` to receive all the matching samples and recently deleted objects currently in the HealthKit store.

## See Also

### Accessing Query Properties

- [predicates](predicates.md): A predicate that limits the results that the query returns.
- [limit](limit.md): The maximum number of samples that the query returns.
