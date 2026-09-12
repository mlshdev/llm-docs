> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicate](https://developer.apple.com/documentation/healthkit/hkquery/predicate)

# predicate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate used to filter the objects returned from the HealthKit store.

## Declaration

```swift
var predicate: NSPredicate? { get }
```

<a id="Discussion"></a>

## Discussion

If the predicate is `nil`, the query does not filter its results. Instead, it returns all the objects matching the query’s other parameters.

## See Also

### Accessing properties

- [objectType](objecttype.md): The type of objects being queried.
- [sampleType](sampletype.md): Deprecated. The type of objects being queried.

# predicate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A predicate used to filter the objects returned from the HealthKit store.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

If the predicate is `nil`, the query does not filter its results. Instead, it returns all the objects matching the query’s other parameters.

## See Also

### Accessing properties

- [objectType](objecttype.md): The type of objects being queried.
- [sampleType](sampletype.md): Deprecated. The type of objects being queried.
