> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchsuggestionitem/init(localizedsuggestion:)](https://developer.apple.com/documentation/uikit/uisearchsuggestionitem/init(localizedsuggestion:))

# init(localizedSuggestion:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a search suggestion with the specified label.

## Declaration

```swift
init(localizedSuggestion suggestion: String)
```

## Parameters

- `suggestion`: The item’s label, usually the search term.

## See Also

### Creating a search suggestion

- [init(localizedSuggestion:localizedDescription:iconImage:)](init%28localizedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified text and image attributes.
- [init(localizedAttributedSuggestion:localizedDescription:iconImage:)](init%28localizedattributedsuggestion_localizeddescription_iconimage_%29.md): Creates a search suggestion with the specified attributed label, accessibility description, and image.
- [init(localizedSuggestion:localizedDescription:)](init%28localizedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified label and accessibility description.
- [init(localizedAttributedSuggestion:localizedDescription:)](init%28localizedattributedsuggestion_localizeddescription_%29.md): Creates a search suggestion with the specified attributed label and accessibility description.
- [init(localizedAttributedSuggestion:)](init%28localizedattributedsuggestion_%29.md): Creates a search suggestion with the specified attributed label.

# initWithLocalizedSuggestion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a search suggestion with the specified label.

## Declaration

```objectivec
- (instancetype) initWithLocalizedSuggestion:(NSString *) suggestion;
```

## Parameters

- `suggestion`: The item’s label, usually the search term.

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
- [initWithLocalizedAttributedSuggestion:](init%28localizedattributedsuggestion_%29.md): Creates a search suggestion with the specified attributed label.
- [suggestionWithLocalizedSuggestion:](suggestionwithlocalizedsuggestion_.md): Creates a search suggestion with the specified label.
- [suggestionWithLocalizedAttributedSuggestion:](suggestionwithlocalizedattributedsuggestion_.md): Creates a search suggestion with the specified attributed label.
