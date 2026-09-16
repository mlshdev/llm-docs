> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textinputdictationbehavior

# TextInputDictationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A behavior that determines whether a search field offers dictation, and what starts it.

## Declaration

```swift
struct TextInputDictationBehavior
```

<a id="overview"></a>

## Overview

Pass a value of this type to the [searchDictationBehavior(\_:)](view/searchdictationbehavior%28__%29.md) modifier. Search fields use [automatic](textinputdictationbehavior/automatic.md) unless you choose otherwise.

The following example keeps the dictation microphone in the search field, but waits for someone to select it before listening:

```swift
NavigationStack {
    RecipeList(matching: query)
}
.searchable(text: $query)
.searchDictationBehavior(.inline(activation: .onSelect))
```

On visionOS you can remove the microphone from the field entirely with [preventDictation](textinputdictationbehavior/preventdictation.md).

## Topics

### Getting behavior values

- [automatic](textinputdictationbehavior/automatic.md): A platform-appropriate default text input dictation behavior.
- [inline(activation:)](textinputdictationbehavior/inline%28activation_%29.md): Adds a dictation microphone in the search bar.
- [preventDictation](textinputdictationbehavior/preventdictation.md): Prevents the search bar from having a dictation microphone.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dictating text

- [searchDictationBehavior(\_:)](view/searchdictationbehavior%28__%29.md): Configures the dictation behavior for any search fields configured by the searchable modifier.
- [TextInputDictationActivation](textinputdictationactivation.md): A configuration that determines what starts dictation in a search field.
