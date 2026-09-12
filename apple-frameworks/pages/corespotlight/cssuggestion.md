> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssuggestion](https://developer.apple.com/documentation/corespotlight/cssuggestion)

# CSSuggestion (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The kind of suggestion to use in a query.

## Declaration

```swift
class CSSuggestion
```

## Mentioned In

- [Building a search interface for your app](building-a-search-interface-for-your-app.md)

<a id="overview"></a>

## Overview

Your app uses `CSSuggestion` objects to populate a contextual menu of suggestions.

## Topics

### Setting suggestion attributes

- [localizedAttributedSuggestion](cssuggestion/localizedattributedsuggestion-3ssly.md): An attributed string for the localized suggestion.
- [suggestionKind](cssuggestion/suggestionkind-swift.property.md): The type of suggestion.
- [CSSuggestion.SuggestionKind](cssuggestion/suggestionkind-swift.enum.md): The suggestion type that determines how the system handles a suggestion.

### Comparing suggestions

- [compare(\_:)](cssuggestion/compare%28__%29.md): Compares the suggestion with a second specified suggestion.
- [compare(byRank:)](cssuggestion/compare%28byrank_%29.md)

### Initializers

- [init(coder:)](cssuggestion/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.

# CSSuggestion (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The kind of suggestion to use in a query.

## Declaration

```objectivec
@interface CSSuggestion : NSObject
```

## Mentioned In

- [Building a search interface for your app](building-a-search-interface-for-your-app.md)

<a id="overview"></a>

## Overview

Your app uses `CSSuggestion` objects to populate a contextual menu of suggestions.

## Topics

### Setting suggestion attributes

- [suggestionKind](cssuggestion/suggestionkind-swift.property.md): The type of suggestion.
- [CSSuggestionKind](cssuggestion/suggestionkind-swift.enum.md): The suggestion type that determines how the system handles a suggestion.

### Comparing suggestions

- [compare:](cssuggestion/compare%28__%29.md): Compares the suggestion with a second specified suggestion.
- [compareByRank:](cssuggestion/compare%28byrank_%29.md)

### Instance Properties

- [localizedAttributedSuggestion](cssuggestion/localizedattributedsuggestion-oq3b.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [CSSearchQueryContext](cssearchquerycontext.md): The behavior configuration to use for a search query.
