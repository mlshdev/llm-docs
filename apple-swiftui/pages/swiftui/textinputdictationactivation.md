> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/textinputdictationactivation

# TextInputDictationActivation

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A configuration that determines what starts dictation in a search field.

## Declaration

```swift
struct TextInputDictationActivation
```

<a id="overview"></a>

## Overview

Pass a value of this type to [inline(activation:)](textinputdictationbehavior/inline%28activation_%29.md) when you want to keep the dictation microphone in a search field but choose how someone begins speaking:

```swift
NavigationStack {
    RecipeList(matching: query)
}
.searchable(text: $query)
.searchDictationBehavior(.inline(activation: .onLook))
```

On visionOS, [onLook](textinputdictationactivation/onlook.md) starts dictation as soon as someone looks at the field. Choose [onSelect](textinputdictationactivation/onselect.md) instead when speaking early would be disruptive.

## Topics

### Getting activation values

- [onLook](textinputdictationactivation/onlook.md): A configuration that activates dictation when someone selects the microphone or looks at the entry field.
- [onSelect](textinputdictationactivation/onselect.md): A configuration that activates dictation when someone selects the microphone.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dictating text

- [searchDictationBehavior(\_:)](view/searchdictationbehavior%28__%29.md): Configures the dictation behavior for any search fields configured by the searchable modifier.
- [TextInputDictationBehavior](textinputdictationbehavior.md): A behavior that determines whether a search field offers dictation, and what starts it.
