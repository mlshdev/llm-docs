> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchsuggestionitem](https://developer.apple.com/documentation/uikit/uisearchsuggestionitem)

# UISearchSuggestionItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A selectable search parameter.

## Declaration

```swift
@MainActor class UISearchSuggestionItem
```

<a id="overview"></a>

## Overview

This class provides a basic implementation of the [UISearchSuggestion](uisearchsuggestion.md) protocol.

## Topics

### Creating a search suggestion

- [init(localizedSuggestion:localizedDescription:iconImage:)](uisearchsuggestionitem/init%28localizedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified text and image attributes.
- [init(localizedAttributedSuggestion:localizedDescription:iconImage:)](uisearchsuggestionitem/init%28localizedattributedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [init(localizedSuggestion:localizedDescription:)](uisearchsuggestionitem/init%28localizedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified label and accessibility description.
- [init(localizedAttributedSuggestion:localizedDescription:)](uisearchsuggestionitem/init%28localizedattributedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [init(localizedSuggestion:)](uisearchsuggestionitem/init%28localizedsuggestion_%29.md): Creates a search suggestion with the specified label.
- [init(localizedAttributedSuggestion:)](uisearchsuggestionitem/init%28localizedattributedsuggestion_%29.md): Creates a search suggestion with the specified attributed label.

### Describing a search suggestion

- [localizedSuggestion](uisearchsuggestionitem/localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedAttributedSuggestion](uisearchsuggestionitem/localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](uisearchsuggestionitem/localizeddescription.md): A description of the suggestion.
- [iconImage](uisearchsuggestionitem/iconimage.md): An image for display on the suggestion.
- [representedObject](uisearchsuggestionitem/representedobject.md): An object for tracking supplementary information about the search suggestion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UISearchSuggestion](uisearchsuggestion.md)

## See Also

### Providing search suggestions

- [searchSuggestions](uisearchcontroller/searchsuggestions.md): A list of suggestions to offer as shortcuts below the search field.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [UISearchSuggestion](uisearchsuggestion.md): A set of attributes that a selectable search suggestion must provide.

# UISearchSuggestionItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

A selectable search parameter.

## Declaration

```objectivec
@interface UISearchSuggestionItem : NSObject
```

<a id="overview"></a>

## Overview

This class provides a basic implementation of the [UISearchSuggestion](uisearchsuggestion.md) protocol.

## Topics

### Creating a search suggestion

- [initWithLocalizedSuggestion:localizedDescription:iconImage:](uisearchsuggestionitem/init%28localizedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified text and image attributes.
- [initWithLocalizedAttributedSuggestion:localizedDescription:iconImage:](uisearchsuggestionitem/init%28localizedattributedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [suggestionWithLocalizedSuggestion:descriptionString:iconImage:](uisearchsuggestionitem/suggestionwithlocalizedsuggestion_descriptionstring_iconimage_.md): Creates a search suggestion with the specified text and image attributes.
- [suggestionWithLocalizedAttributedSuggestion:descriptionString:iconImage:](uisearchsuggestionitem/suggestionwithlocalizedattributedsuggestion_descriptionstring_iconimage_.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [initWithLocalizedSuggestion:localizedDescription:](uisearchsuggestionitem/init%28localizedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified label and accessibility description.
- [initWithLocalizedAttributedSuggestion:localizedDescription:](uisearchsuggestionitem/init%28localizedattributedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [suggestionWithLocalizedSuggestion:descriptionString:](uisearchsuggestionitem/suggestionwithlocalizedsuggestion_descriptionstring_.md): Creates a search suggestion with the specified label and accessibility description.
- [suggestionWithLocalizedAttributedSuggestion:descriptionString:](uisearchsuggestionitem/suggestionwithlocalizedattributedsuggestion_descriptionstring_.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [initWithLocalizedSuggestion:](uisearchsuggestionitem/init%28localizedsuggestion_%29.md): Creates a search suggestion with the specified label.
- [initWithLocalizedAttributedSuggestion:](uisearchsuggestionitem/init%28localizedattributedsuggestion_%29.md): Creates a search suggestion with the specified attributed label.
- [suggestionWithLocalizedSuggestion:](uisearchsuggestionitem/suggestionwithlocalizedsuggestion_.md): Creates a search suggestion with the specified label.
- [suggestionWithLocalizedAttributedSuggestion:](uisearchsuggestionitem/suggestionwithlocalizedattributedsuggestion_.md): Creates a search suggestion with the specified attributed label.

### Describing a search suggestion

- [localizedSuggestion](uisearchsuggestionitem/localizedsuggestion.md): A label for the suggestion, usually the search term the suggestion represents.
- [localizedAttributedSuggestion](uisearchsuggestionitem/localizedattributedsuggestion.md): An attributed label for the suggestion, usually the search term the suggestion represents.
- [localizedDescription](uisearchsuggestionitem/localizeddescription.md): A description of the suggestion.
- [iconImage](uisearchsuggestionitem/iconimage.md): An image for display on the suggestion.
- [representedObject](uisearchsuggestionitem/representedobject.md): An object for tracking supplementary information about the search suggestion.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UISearchSuggestion](uisearchsuggestion.md)

## See Also

### Providing search suggestions

- [searchSuggestions](uisearchcontroller/searchsuggestions.md): A list of suggestions to offer as shortcuts below the search field.
- [ignoresSearchSuggestionsForSearchBarPlacementStacked](uisearchcontroller/ignoressearchsuggestionsforsearchbarplacementstacked.md): A Boolean value you use to specify whether the search controller prevents search suggestions from displaying for a stacked search bar.
- [UISearchSuggestion](uisearchsuggestion.md): A set of attributes that a selectable search suggestion must provide.
