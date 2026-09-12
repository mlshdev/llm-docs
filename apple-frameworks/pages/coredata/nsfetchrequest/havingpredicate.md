> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/havingpredicate](https://developer.apple.com/documentation/coredata/nsfetchrequest/havingpredicate)

# havingPredicate (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The predicate used to filter rows being returned by a query containing a GROUP BY directive.

## Declaration

```swift
var havingPredicate: NSPredicate? { get set }
```

<a id="Discussion"></a>

## Discussion

If a `havingPredicate` value is supplied, the predicate will be run after. Specifying a `havingPredicate` requires that [propertiesToGroupBy](propertiestogroupby.md) also be specified.

## See Also

### Related Documentation

- [NSFetchRequest](../nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.

### Grouping and Filtering Dictionary Results

- [propertiesToGroupBy](propertiestogroupby.md): An array of objects that indicates how data should be grouped before a select statement is run in a SQL database.

# havingPredicate (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The predicate used to filter rows being returned by a query containing a GROUP BY directive.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSPredicate * havingPredicate;
```

<a id="Discussion"></a>

## Discussion

If a `havingPredicate` value is supplied, the predicate will be run after. Specifying a `havingPredicate` requires that [propertiesToGroupBy](propertiestogroupby.md) also be specified.

## See Also

### Related Documentation

- [NSFetchRequest](../nsfetchrequest.md): A description of search criteria used to retrieve data from a persistent store.

### Grouping and Filtering Dictionary Results

- [propertiesToGroupBy](propertiestogroupby.md): An array of objects that indicates how data should be grouped before a select statement is run in a SQL database.
