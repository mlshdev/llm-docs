> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequerydescriptor/limit](https://developer.apple.com/documentation/healthkit/hksamplequerydescriptor/limit)

# limit

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

The maximum number of samples that the query returns.

## Declaration

```swift
var limit: Int?
```

<a id="Discussion"></a>

## Discussion

If the `limit` is `nil`, the system returns all matching samples in the HealthKit store.

## See Also

### Accessing Query Properties

- [predicates](predicates.md): An array of sample predicates that define the type of data that the query returns.
- [sortDescriptors](sortdescriptors.md): An array that specifies the order of the results that the query returns.
