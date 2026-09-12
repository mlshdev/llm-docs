> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquery/predicate](https://developer.apple.com/documentation/cloudkit/ckquery/predicate)

# predicate (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The predicate to use for matching records.

## Declaration

```swift
@NSCopying var predicate: NSPredicate { get }
```

<a id="discussion"></a>

## Discussion

A predicate contains one or more expressions that evaluate to [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). Expressions are often value-based comparisons, but predicates support other types of operators, including string comparisons and aggregate operations. For guidelines on how to construct predicates for your queries, see [Predicate Rules for Query Objects](../ckquery.md#Predicate-Rules-for-Query-Objects).

## See Also

### Accessing the Query Parameters

- [recordType](recordtype-6ajii.md): The record type to search.
- [sortDescriptors](sortdescriptors.md): The sort descriptors for organizing the query’s results.

# predicate (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The predicate to use for matching records.

## Declaration

```objectivec
@property (copy, readonly) NSPredicate * predicate;
```

<a id="discussion"></a>

## Discussion

A predicate contains one or more expressions that evaluate to [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false). Expressions are often value-based comparisons, but predicates support other types of operators, including string comparisons and aggregate operations. For guidelines on how to construct predicates for your queries, see [Predicate Rules for Query Objects](../ckquery.md#Predicate-Rules-for-Query-Objects).

## See Also

### Accessing the Query Parameters

- [recordType](recordtype-3clp.md): The record type to search.
- [sortDescriptors](sortdescriptors.md): The sort descriptors for organizing the query’s results.
