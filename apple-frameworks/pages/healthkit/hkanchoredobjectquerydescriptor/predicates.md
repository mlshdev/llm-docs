> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquerydescriptor/predicates](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquerydescriptor/predicates)

# predicates

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

A predicate that limits the results that the query returns.

## Declaration

```swift
var predicates: [HKSamplePredicate<Sample>] { get set }
```

## See Also

### Accessing Query Properties

- [anchor](anchor.md): An anchor that a previous anchored object query returned.
- [limit](limit.md): The maximum number of samples that the query returns.
