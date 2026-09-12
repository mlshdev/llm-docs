> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksamplequery/limit](https://developer.apple.com/documentation/healthkit/hksamplequery/limit)

# limit (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The maximum number of samples that this query returns.

## Declaration

```swift
var limit: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value sets the maximum number of samples that the query returns upon completion.

If you are specifically interested in retrieving only new samples (samples added since the last query), consider using an [HKAnchoredObjectQuery](../hkanchoredobjectquery.md) query instead.

## See Also

### Getting Property Data

- [sortDescriptors](sortdescriptors.md): The sort descriptors that specify the order of the results returned by this query.

# limit (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum number of samples that this query returns.

## Declaration

```objectivec
@property (readonly) NSUInteger limit;
```

<a id="Discussion"></a>

## Discussion

This property’s value sets the maximum number of samples that the query returns upon completion.

If you are specifically interested in retrieving only new samples (samples added since the last query), consider using an [HKAnchoredObjectQuery](../hkanchoredobjectquery.md) query instead.

## See Also

### Getting Property Data

- [sortDescriptors](sortdescriptors.md): The sort descriptors that specify the order of the results returned by this query.
