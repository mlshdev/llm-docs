> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/propertiestogroupby](https://developer.apple.com/documentation/coredata/nsfetchrequest/propertiestogroupby)

# propertiesToGroupBy (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array of objects that indicates how data should be grouped before a select statement is run in a SQL database.

## Declaration

```swift
var propertiesToGroupBy: [Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

An array of [NSPropertyDescription](../nspropertydescription.md) or  [NSExpressionDescription](../nsexpressiondescription.md) objects or key-path strings that indicate how data should be grouped before a select statement is run in an SQL database.

If you use this setting, you must set the [resultType](resulttype.md) to [dictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md), and the SELECT values must be literals, aggregates, or columns specified in `propertiesToGroupBy`.

Aggregates will operate on the groups specified in `propertiesToGroupBy`

rather than the whole table. If you set `propertiesToGroupBy`, you can also set a predicate to filter rows that are returned by `propertiesToGroupBy`.

See [havingPredicate](havingpredicate.md).

## See Also

### Grouping and Filtering Dictionary Results

- [havingPredicate](havingpredicate.md): The predicate used to filter rows being returned by a query containing a GROUP BY directive.

# propertiesToGroupBy (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array of objects that indicates how data should be grouped before a select statement is run in a SQL database.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray * propertiesToGroupBy;
```

<a id="Discussion"></a>

## Discussion

An array of [NSPropertyDescription](../nspropertydescription.md) or  [NSExpressionDescription](../nsexpressiondescription.md) objects or key-path strings that indicate how data should be grouped before a select statement is run in an SQL database.

If you use this setting, you must set the [resultType](resulttype.md) to [NSDictionaryResultType](../nsfetchrequestresulttype/dictionaryresulttype.md), and the SELECT values must be literals, aggregates, or columns specified in `propertiesToGroupBy`.

Aggregates will operate on the groups specified in `propertiesToGroupBy`

rather than the whole table. If you set `propertiesToGroupBy`, you can also set a predicate to filter rows that are returned by `propertiesToGroupBy`.

See [havingPredicate](havingpredicate.md).

## See Also

### Grouping and Filtering Dictionary Results

- [havingPredicate](havingpredicate.md): The predicate used to filter rows being returned by a query containing a GROUP BY directive.
