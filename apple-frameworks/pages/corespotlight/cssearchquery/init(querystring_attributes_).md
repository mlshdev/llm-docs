> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/init(querystring:attributes:)](https://developer.apple.com/documentation/corespotlight/cssearchquery/init(querystring:attributes:))

# init(queryString:attributes:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 16.0) · iPadOS 10.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.12+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a query object with the specified query string and item attributes.

> Use initWithQueryString:queryContext instead

## Declaration

```swift
convenience init(queryString: String, attributes: [String]?)
```

<a id="return-value"></a>

## Return Value

An initialized query object.

<a id="discussion"></a>

## Discussion

- queryString: A formatted string that defines the matching criteria to apply to indexed items. To learn how to construct a query string, see [Create a query string for your search](../searching-for-information-in-your-app.md#Create-a-query-string-for-your-search).

  This parameter must not be `nil`.

  - attributes: An array of strings that represent the attributes of indexed items. Each string corresponds to a property name that your app can set for an item; for a list of possible properties, see [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). Passing `nil` for this parameter means that the query doesn’t use attributes to find matching items.

<a id="Discussion"></a>

## Discussion

After you create and initialize a query object, and call [start()](start%28%29.md) to begin the query, you can’t update or reuse the query object for a new query.

## See Also

### Creating a query object

- [init(queryString:queryContext:)](init%28querystring_querycontext_%29.md): Initializes and returns a query object with the specified query string and query context.

# initWithQueryString:attributes: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 16.0) · iPadOS 10.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.12+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a query object with the specified query string and item attributes.

> Use initWithQueryString:queryContext instead

## Declaration

```objectivec
- (instancetype) initWithQueryString:(NSString *) queryString attributes:(NSArray<NSString *> *) attributes;
```

<a id="return-value"></a>

## Return Value

An initialized query object.

<a id="discussion"></a>

## Discussion

- queryString: A formatted string that defines the matching criteria to apply to indexed items. To learn how to construct a query string, see [Create a query string for your search](../searching-for-information-in-your-app.md#Create-a-query-string-for-your-search).

  This parameter must not be `nil`.

  - attributes: An array of strings that represent the attributes of indexed items. Each string corresponds to a property name that your app can set for an item; for a list of possible properties, see [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md). Passing `nil` for this parameter means that the query doesn’t use attributes to find matching items.

<a id="Discussion"></a>

## Discussion

After you create and initialize a query object, and call [start](start%28%29.md) to begin the query, you can’t update or reuse the query object for a new query.

## See Also

### Creating a query object

- [initWithQueryString:queryContext:](init%28querystring_querycontext_%29.md): Initializes and returns a query object with the specified query string and query context.
