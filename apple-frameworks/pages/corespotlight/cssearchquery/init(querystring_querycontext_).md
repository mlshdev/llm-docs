> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/init(querystring:querycontext:)](https://developer.apple.com/documentation/corespotlight/cssearchquery/init(querystring:querycontext:))

# init(queryString:queryContext:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Initializes and returns a query object with the specified query string and query context.

## Declaration

```swift
init(queryString: String, queryContext: CSSearchQueryContext?)
```

<a id="return-value"></a>

## Return Value

An initialized query object.

<a id="discussion"></a>

## Discussion

- queryString: A formatted string that defines the matching criteria to apply to indexed items. To learn how to construct a query string, see [Create a query string for your search](../searching-for-information-in-your-app.md#Create-a-query-string-for-your-search).

  This parameter must not be `nil`.

  - queryContext: A [CSSearchQueryContext](../cssearchquerycontext.md) object that focuses the query results.

<a id="Discussion"></a>

## Discussion

After you create and initialize a query object, and call [start()](start%28%29.md) to begin the query, you can’t update or reuse the query object for a new query.

## See Also

### Creating a query object

- [init(queryString:attributes:)](init%28querystring_attributes_%29.md): Deprecated. Initializes and returns a query object with the specified query string and item attributes.

# initWithQueryString:queryContext: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Initializes and returns a query object with the specified query string and query context.

## Declaration

```objectivec
- (instancetype) initWithQueryString:(NSString *) queryString queryContext:(CSSearchQueryContext *) queryContext;
```

<a id="return-value"></a>

## Return Value

An initialized query object.

<a id="discussion"></a>

## Discussion

- queryString: A formatted string that defines the matching criteria to apply to indexed items. To learn how to construct a query string, see [Create a query string for your search](../searching-for-information-in-your-app.md#Create-a-query-string-for-your-search).

  This parameter must not be `nil`.

  - queryContext: A [CSSearchQueryContext](../cssearchquerycontext.md) object that focuses the query results.

<a id="Discussion"></a>

## Discussion

After you create and initialize a query object, and call [start](start%28%29.md) to begin the query, you can’t update or reuse the query object for a new query.

## See Also

### Creating a query object

- [initWithQueryString:attributes:](init%28querystring_attributes_%29.md): Deprecated. Initializes and returns a query object with the specified query string and item attributes.
