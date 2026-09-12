> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquerycontext](https://developer.apple.com/documentation/corespotlight/csuserquerycontext)

# CSUserQueryContext (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The configuration details to apply to a user query.

## Declaration

```swift
class CSUserQueryContext
```

## Mentioned In

- [Building a search interface for your app](building-a-search-interface-for-your-app.md)

<a id="overview"></a>

## Overview

Use an instance of `CSUserQueryContext` to configure the search parameters for a [CSUserQuery](csuserquery.md) object. This object stores configuration details that the query uses to modify the search results it delivers. For example, use this object to specify the maximum number of results or suggestions you want the query to return. You can also use it to enable or disable the ranking of results by Spotlight.

For information about search filters and other configurable query parameters, see the parent class [CSSearchQueryContext](cssearchquerycontext.md).

## Topics

### Creating a query context

- [init(currentSuggestion:)](csuserquerycontext/init%28currentsuggestion_%29.md): Creates a new query context object with an optional suggested search string.

### Configuring search options

- [maxResultCount](csuserquerycontext/maxresultcount.md): The maximum number of search results for the query to return.
- [maxSuggestionCount](csuserquerycontext/maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.
- [disableSemanticSearch](csuserquerycontext/disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.

### Configuring the ranked results behavior

- [enableRankedResults](csuserquerycontext/enablerankedresults.md): A Boolean value that indicates whether the query sorts results by their relevance.
- [maxRankedResultCount](csuserquerycontext/maxrankedresultcount.md): The maximum number of ranked results to return during the query.

## Relationships

### Inherits From

- [CSSearchQueryContext](cssearchquerycontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Queries

- [Building a search interface for your app](building-a-search-interface-for-your-app.md): Add a search interface to your app to execute Spotlight queries and offer suggested text completions.
- [Searching for information in your app](searching-for-information-in-your-app.md): Search for app-specific content and refine search results using predicates and filters.
- [CSUserQuery](csuserquery.md): A type you use to initiate searches from your interface and offer suggested text completions.
- [CSSearchQuery](cssearchquery.md): A type you use to programmatically search the indexed app content.
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.

# CSUserQueryContext (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The configuration details to apply to a user query.

## Declaration

```objectivec
@interface CSUserQueryContext : CSSearchQueryContext
```

## Mentioned In

- [Building a search interface for your app](building-a-search-interface-for-your-app.md)

<a id="overview"></a>

## Overview

Use an instance of `CSUserQueryContext` to configure the search parameters for a [CSUserQuery](csuserquery.md) object. This object stores configuration details that the query uses to modify the search results it delivers. For example, use this object to specify the maximum number of results or suggestions you want the query to return. You can also use it to enable or disable the ranking of results by Spotlight.

For information about search filters and other configurable query parameters, see the parent class [CSSearchQueryContext](cssearchquerycontext.md).

## Topics

### Creating a query context

- [userQueryContextWithCurrentSuggestion:](csuserquerycontext/init%28currentsuggestion_%29.md): Creates a new query context object with an optional suggested search string.

### Configuring search options

- [maxResultCount](csuserquerycontext/maxresultcount.md): The maximum number of search results for the query to return.
- [maxSuggestionCount](csuserquerycontext/maxsuggestioncount.md): The maximum number of suggested text completions for the query to return.
- [disableSemanticSearch](csuserquerycontext/disablesemanticsearch.md): A Boolean value that indicates whether to exclude semantic-based search results from the output.

### Configuring the ranked results behavior

- [enableRankedResults](csuserquerycontext/enablerankedresults.md): A Boolean value that indicates whether the query sorts results by their relevance.
- [maxRankedResultCount](csuserquerycontext/maxrankedresultcount.md): The maximum number of ranked results to return during the query.

### Type Methods

- [userQueryContext](csuserquerycontext/userquerycontext.md): Returns the current behavior configuration for the user query.

## Relationships

### Inherits From

- [CSSearchQueryContext](cssearchquerycontext.md)

## See Also

### Queries

- [Building a search interface for your app](building-a-search-interface-for-your-app.md): Add a search interface to your app to execute Spotlight queries and offer suggested text completions.
- [Searching for information in your app](searching-for-information-in-your-app.md): Search for app-specific content and refine search results using predicates and filters.
- [CSUserQuery](csuserquery.md): A type you use to initiate searches from your interface and offer suggested text completions.
- [CSSearchQuery](cssearchquery.md): A type you use to programmatically search the indexed app content.
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.
