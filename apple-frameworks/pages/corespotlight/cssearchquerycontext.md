> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquerycontext](https://developer.apple.com/documentation/corespotlight/cssearchquerycontext)

# CSSearchQueryContext (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The behavior configuration to use for a search query.

## Declaration

```swift
class CSSearchQueryContext
```

## Mentioned In

- [Searching for information in your app](searching-for-information-in-your-app.md)

## Topics

### Configuring search behavior

- [fetchAttributes](cssearchquerycontext/fetchattributes.md): The attributes the system fetches for the searchable items.
- [keyboardLanguage](cssearchquerycontext/keyboardlanguage.md): The language used for the query.
- [sourceOptions](cssearchquerycontext/sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.
- [CSSearchQueryContext.SourceOptions](cssearchquerycontext/sourceoptions-swift.struct.md): The query source options to allow or deny Mail messages in the search.

### Filtering the results

- [filterQueries](cssearchquerycontext/filterqueries.md): The query string used to filter the results.

### Initializers

- [init(coder:)](cssearchquerycontext/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CSUserQueryContext](csuserquerycontext.md)

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
- [CSUserQueryContext](csuserquerycontext.md): The configuration details to apply to a user query.
- [CSSearchQuery](cssearchquery.md): A type you use to programmatically search the indexed app content.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.

# CSSearchQueryContext (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The behavior configuration to use for a search query.

## Declaration

```objectivec
@interface CSSearchQueryContext : NSObject
```

## Mentioned In

- [Searching for information in your app](searching-for-information-in-your-app.md)

## Topics

### Configuring search behavior

- [fetchAttributes](cssearchquerycontext/fetchattributes.md): The attributes the system fetches for the searchable items.
- [keyboardLanguage](cssearchquerycontext/keyboardlanguage.md): The language used for the query.
- [sourceOptions](cssearchquerycontext/sourceoptions-swift.property.md): The query source options to allow or deny Mail messages in the search.
- [CSSearchQuerySourceOptions](cssearchquerycontext/sourceoptions-swift.struct.md): The query source options to allow or deny Mail messages in the search.

### Filtering the results

- [filterQueries](cssearchquerycontext/filterqueries.md): The query string used to filter the results.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CSUserQueryContext](csuserquerycontext.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Queries

- [Building a search interface for your app](building-a-search-interface-for-your-app.md): Add a search interface to your app to execute Spotlight queries and offer suggested text completions.
- [Searching for information in your app](searching-for-information-in-your-app.md): Search for app-specific content and refine search results using predicates and filters.
- [CSUserQuery](csuserquery.md): A type you use to initiate searches from your interface and offer suggested text completions.
- [CSUserQueryContext](csuserquerycontext.md): The configuration details to apply to a user query.
- [CSSearchQuery](cssearchquery.md): A type you use to programmatically search the indexed app content.
- [CSSuggestion](cssuggestion.md): The kind of suggestion to use in a query.
