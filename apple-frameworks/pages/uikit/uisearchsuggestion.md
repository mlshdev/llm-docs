> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchsuggestion](https://developer.apple.com/documentation/uikit/uisearchsuggestion)

# UISearchSuggestion (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A set of attributes that a selectable search suggestion must provide.

## Declaration

```swift
@MainActor protocol UISearchSuggestion : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Provide common or predicted search queries to save the user the time of typing their entire query in a [UISearchController](uisearchcontroller.md) field. [UISearchSuggestionItem](uisearchsuggestionitem.md) provides a simple implementation of this protocol. You may also define and use your own type that conforms to [UISearchSuggestion](uisearchsuggestion.md).

## Topics

### Describing a search suggestion

- [localizedSuggestion](uisearchsuggestion/localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](uisearchsuggestion/localizeddescription.md): A description of the suggestion.
- [localizedAttributedSuggestion](uisearchsuggestion/localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [iconImage](uisearchsuggestion/iconimage.md): An image for display on the suggestion.
- [representedObject](uisearchsuggestion/representedobject.md): An object for tracking supplementary information about the search suggestion.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UISearchSuggestionItem](uisearchsuggestionitem.md)

## See Also

### Providing search suggestions

- [searchSuggestions](uisearchcontroller/searchsuggestions.md): A list of suggestions to offer as shortcuts below the search field.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [UISearchSuggestionItem](uisearchsuggestionitem.md): A selectable search parameter.

# UISearchSuggestion (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A set of attributes that a selectable search suggestion must provide.

## Declaration

```objectivec
@protocol UISearchSuggestion <NSObject>
```

<a id="overview"></a>

## Overview

Provide common or predicted search queries to save the user the time of typing their entire query in a [UISearchController](uisearchcontroller.md) field. [UISearchSuggestionItem](uisearchsuggestionitem.md) provides a simple implementation of this protocol. You may also define and use your own type that conforms to [UISearchSuggestion](uisearchsuggestion.md).

## Topics

### Describing a search suggestion

- [localizedSuggestion](uisearchsuggestion/localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](uisearchsuggestion/localizeddescription.md): A description of the suggestion.
- [localizedAttributedSuggestion](uisearchsuggestion/localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [iconImage](uisearchsuggestion/iconimage.md): An image for display on the suggestion.
- [representedObject](uisearchsuggestion/representedobject.md): An object for tracking supplementary information about the search suggestion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UISearchSuggestionItem](uisearchsuggestionitem.md)

## See Also

### Providing search suggestions

- [searchSuggestions](uisearchcontroller/searchsuggestions.md): A list of suggestions to offer as shortcuts below the search field.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [UISearchSuggestionItem](uisearchsuggestionitem.md): A selectable search parameter.
