> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssuggestion/suggestionkind-swift.enum](https://developer.apple.com/documentation/corespotlight/cssuggestion/suggestionkind-swift.enum)

# CSSuggestion.SuggestionKind (Swift)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The suggestion type that determines how the system handles a suggestion.

## Declaration

```swift
enum SuggestionKind
```

<a id="overview"></a>

## Overview

Suggestions that the system returns from the query handler have [CSSuggestion.SuggestionKind.default](suggestionkind-swift.enum/default.md).

## Topics

### Suggestion types

- [CSSuggestion.SuggestionKind.none](suggestionkind-swift.enum/none.md): Blocks the system from displaying the suggestion.
- [CSSuggestion.SuggestionKind.custom](suggestionkind-swift.enum/custom.md): Sorts the custom suggestions together.
- [CSSuggestion.SuggestionKind.default](suggestionkind-swift.enum/default.md): Displays the suggestion normally.

### Initializers

- [init(rawValue:)](suggestionkind-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting suggestion attributes

- [localizedAttributedSuggestion](localizedattributedsuggestion-3ssly.md): An attributed string for the localized suggestion.
- [suggestionKind](suggestionkind-swift.property.md): The type of suggestion.

# CSSuggestionKind (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS · visionOS 1.0+

The suggestion type that determines how the system handles a suggestion.

## Declaration

```objectivec
enum CSSuggestionKind : NSInteger;
```

<a id="overview"></a>

## Overview

Suggestions that the system returns from the query handler have [CSSuggestionKindDefault](suggestionkind-swift.enum/default.md).

## Topics

### Suggestion types

- [CSSuggestionKindNone](suggestionkind-swift.enum/none.md): Blocks the system from displaying the suggestion.
- [CSSuggestionKindCustom](suggestionkind-swift.enum/custom.md): Sorts the custom suggestions together.
- [CSSuggestionKindDefault](suggestionkind-swift.enum/default.md): Displays the suggestion normally.

## See Also

### Setting suggestion attributes

- [suggestionKind](suggestionkind-swift.property.md): The type of suggestion.
