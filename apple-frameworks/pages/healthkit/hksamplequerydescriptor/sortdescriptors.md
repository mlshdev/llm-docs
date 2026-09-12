> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequerydescriptor/sortdescriptors](https://developer.apple.com/documentation/healthkit/hksamplequerydescriptor/sortdescriptors)

# sortDescriptors

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

An array that specifies the order of the results that the query returns.

## Declaration

```swift
var sortDescriptors: [SortDescriptor<Sample>]
```

<a id="Discussion"></a>

## Discussion

The system applies the sort descriptors in order. The later descriptors sort any items that the earlier sort descriptors considered equal. If you don’t need the results in a specific order, pass an empty array.

## See Also

### Accessing Query Properties

- [limit](limit.md): The maximum number of samples that the query returns.
- [predicates](predicates.md): An array of sample predicates that define the type of data that the query returns.
