> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/textselectability](https://developer.apple.com/documentation/swiftui/textselectability)

# TextSelectability

**Framework:** SwiftUI  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A type that describes the ability to select text.

## Declaration

```swift
protocol TextSelectability
```

<a id="overview"></a>

## Overview

To configure whether people can select text in your app, use the [textSelection(\_:)](view/textselection%28__%29.md) modifier, passing in a text selectability value like [enabled](textselectability/enabled.md) or [disabled](textselectability/disabled.md).

## Topics

### Getting selectability options

- [enabled](textselectability/enabled.md): Conforms when `Self` is `EnabledTextSelectability`. A selectability value that enables text selection by a person using your app.
- [disabled](textselectability/disabled.md): Conforms when `Self` is `DisabledTextSelectability`. A selectability value that disables text selection by the person using your app.

### Specifying selectability

- [allowsSelection](textselectability/allowsselection.md): A Boolean value that indicates whether the selectability type allows selection.

### Supporting types

- [EnabledTextSelectability](enabledtextselectability.md): A selectability type that enables text selection by the person using your app.
- [DisabledTextSelectability](disabledtextselectability.md): A selectability type that disables text selection by the person using your app.

## Relationships

### Conforming Types

- [DisabledTextSelectability](disabledtextselectability.md)
- [EnabledTextSelectability](enabledtextselectability.md)

## See Also

### Selecting text

- [textSelection(\_:)](view/textselection%28__%29.md): Controls whether people can select text within this view.
- [TextSelection](textselection.md): Represents a selection of text.
- [textSelectionAffinity(\_:)](view/textselectionaffinity%28__%29.md): Sets the direction of a selection or cursor relative to a text character.
- [textSelectionAffinity](environmentvalues/textselectionaffinity.md): A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).
- [TextSelectionAffinity](textselectionaffinity.md): A representation of the direction or association of a selection or cursor relative to a text character. This concept becomes much more prominent when dealing with bidirectional text (text that contains both LTR and RTL scripts, like English and Arabic combined).
- [AttributedTextSelection](attributedtextselection.md): Represents a selection of attributed text.
