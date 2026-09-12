> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery](https://developer.apple.com/documentation/corespotlight/cssearchquery)

# CSSearchQuery (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

A type you use to programmatically search the indexed app content.

## Declaration

```swift
class CSSearchQuery
```

## Mentioned In

- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

Use a `CSSearchQuery` object to search your app’s indexed content using a formatted search string. To perform a search, build a predicate string to specify the indexed attributes you want to search and the value you want them to match. After you start the query, you receive batches of results in the handlers you provide.

Each `CSSearchQuery` object you create performs a single search operation and delivers the results back to your code. Build each predicate with an attribute name, one or more values, and either a comparison operator or the `InRange` operator. Your predicate string takes one of the following forms:

- `attributeName operator value[modifiers]`
- `InRange(attributeName, minValue, maxValue)`

Queries search all of your app’s indexes by default. If your app encrypts some of its indexed data, you can limit your search to one or more of the encrypted indexes by updating the query’s [protectionClasses](cssearchquery/protectionclasses.md) property.  The query must have access to the protected index to search it.

For more information about how to construct predicate strings for your query, see [Searching for information in your app](searching-for-information-in-your-app.md).

## Topics

### Creating a query object

- [init(queryString:attributes:)](cssearchquery/init%28querystring_attributes_%29.md): Deprecated. Initializes and returns a query object with the specified query string and item attributes.
- [init(queryString:queryContext:)](cssearchquery/init%28querystring_querycontext_%29.md): Initializes and returns a query object with the specified query string and query context.

### Continuing an activity

- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.

### Specifying the indexes to search

- [protectionClasses](cssearchquery/protectionclasses.md): The protection types of the indexes you want to search.

### Executing the query automatically

- [results](cssearchquery/results-swift.property.md): The results that match the current query string.
- [CSSearchQuery.Results](cssearchquery/results-swift.struct.md): An asynchronous sequence that contains the results that match the query string.

### Executing the query with handler blocks

- [start()](cssearchquery/start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cssearchquery/cancel%28%29.md): Cancels the current query operation.
- [isCancelled](cssearchquery/iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](cssearchquery/founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](cssearchquery/founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](cssearchquery/completionhandler.md): The block to execute when the query finishes delivering all results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CSUserQuery](csuserquery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Queries

- [Building a search interface for your app](building-a-search-interface-for-your-app.md): Add a search interface to your app to execute Spotlight queries and offer suggested text completions.
- [Searching for information in your app](searching-for-information-in-your-app.md): Search for app-specific content and refine search results using predicates and filters.
- [CSUserQuery](csuserquery.md): A type you use to initiate searches from your interface and offer suggested text completions.
- [CSUserQueryContext](csuserquerycontext.md): The configuration details to apply to a user query.
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.

# CSSearchQuery (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

A type you use to programmatically search the indexed app content.

## Declaration

```objectivec
@interface CSSearchQuery : NSObject
```

## Mentioned In

- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

Use a `CSSearchQuery` object to search your app’s indexed content using a formatted search string. To perform a search, build a predicate string to specify the indexed attributes you want to search and the value you want them to match. After you start the query, you receive batches of results in the handlers you provide.

Each `CSSearchQuery` object you create performs a single search operation and delivers the results back to your code. Build each predicate with an attribute name, one or more values, and either a comparison operator or the `InRange` operator. Your predicate string takes one of the following forms:

- `attributeName operator value[modifiers]`
- `InRange(attributeName, minValue, maxValue)`

Queries search all of your app’s indexes by default. If your app encrypts some of its indexed data, you can limit your search to one or more of the encrypted indexes by updating the query’s [protectionClasses](cssearchquery/protectionclasses.md) property.  The query must have access to the protected index to search it.

For more information about how to construct predicate strings for your query, see [Searching for information in your app](searching-for-information-in-your-app.md).

## Topics

### Creating a query object

- [initWithQueryString:attributes:](cssearchquery/init%28querystring_attributes_%29.md): Deprecated. Initializes and returns a query object with the specified query string and item attributes.
- [initWithQueryString:queryContext:](cssearchquery/init%28querystring_querycontext_%29.md): Initializes and returns a query object with the specified query string and query context.

### Continuing an activity

- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.

### Specifying the indexes to search

- [protectionClasses](cssearchquery/protectionclasses.md): The protection types of the indexes you want to search.

### Executing the query with handler blocks

- [start](cssearchquery/start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cssearchquery/cancel%28%29.md): Cancels the current query operation.
- [cancelled](cssearchquery/iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](cssearchquery/founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](cssearchquery/founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](cssearchquery/completionhandler.md): The block to execute when the query finishes delivering all results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CSUserQuery](csuserquery.md)

## See Also

### Queries

- [Building a search interface for your app](building-a-search-interface-for-your-app.md): Add a search interface to your app to execute Spotlight queries and offer suggested text completions.
- [Searching for information in your app](searching-for-information-in-your-app.md): Search for app-specific content and refine search results using predicates and filters.
- [CSUserQuery](csuserquery.md): A type you use to initiate searches from your interface and offer suggested text completions.
- [CSUserQueryContext](csuserquerycontext.md): The configuration details to apply to a user query.
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.
