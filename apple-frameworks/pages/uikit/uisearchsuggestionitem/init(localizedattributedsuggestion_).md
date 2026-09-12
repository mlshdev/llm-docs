> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchsuggestionitem/init(localizedattributedsuggestion:)](https://developer.apple.com/documentation/uikit/uisearchsuggestionitem/init(localizedattributedsuggestion:))

# init(localizedAttributedSuggestion:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a search suggestion with the specified attributed label.

## Declaration

```swift
init(localizedAttributedSuggestion suggestion: NSAttributedString)
```

## Parameters

- `suggestion`: An attributed label for the suggestion, usually the search term the suggestion represents.

## See Also

### Creating a search suggestion

- [init(localizedSuggestion:localizedDescription:iconImage:)](init%28localizedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified text and image attributes.
- [init(localizedAttributedSuggestion:localizedDescription:iconImage:)](init%28localizedattributedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [init(localizedSuggestion:localizedDescription:)](init%28localizedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified label and accessibility description.
- [init(localizedAttributedSuggestion:localizedDescription:)](init%28localizedattributedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [init(localizedSuggestion:)](init%28localizedsuggestion_%29.md): Creates a search suggestion with the specified label.

# initWithLocalizedAttributedSuggestion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Creates a search suggestion with the specified attributed label.

## Declaration

```objectivec
- (instancetype) initWithLocalizedAttributedSuggestion:(NSAttributedString *) suggestion;
```

## Parameters

- `suggestion`: An attributed label for the suggestion, usually the search term the suggestion represents.

## See Also

### Creating a search suggestion

- [initWithLocalizedSuggestion:localizedDescription:iconImage:](init%28localizedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified text and image attributes.
- [initWithLocalizedAttributedSuggestion:localizedDescription:iconImage:](init%28localizedattributedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [suggestionWithLocalizedSuggestion:descriptionString:iconImage:](suggestionwithlocalizedsuggestion_descriptionstring_iconimage_.md): Creates a search suggestion with the specified text and image attributes.
- [suggestionWithLocalizedAttributedSuggestion:descriptionString:iconImage:](suggestionwithlocalizedattributedsuggestion_descriptionstring_iconimage_.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [initWithLocalizedSuggestion:localizedDescription:](init%28localizedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified label and accessibility description.
- [initWithLocalizedAttributedSuggestion:localizedDescription:](init%28localizedattributedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [suggestionWithLocalizedSuggestion:descriptionString:](suggestionwithlocalizedsuggestion_descriptionstring_.md): Creates a search suggestion with the specified label and accessibility description.
- [suggestionWithLocalizedAttributedSuggestion:descriptionString:](suggestionwithlocalizedattributedsuggestion_descriptionstring_.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [initWithLocalizedSuggestion:](init%28localizedsuggestion_%29.md): Creates a search suggestion with the specified label.
- [suggestionWithLocalizedSuggestion:](suggestionwithlocalizedsuggestion_.md): Creates a search suggestion with the specified label.
- [suggestionWithLocalizedAttributedSuggestion:](suggestionwithlocalizedattributedsuggestion_.md): Creates a search suggestion with the specified attributed label.
