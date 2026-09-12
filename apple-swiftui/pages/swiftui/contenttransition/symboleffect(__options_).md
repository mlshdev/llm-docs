> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contenttransition/symboleffect(_:options:)](https://developer.apple.com/documentation/swiftui/contenttransition/symboleffect(_:options:))

# symbolEffect(\_:options:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a content transition that applies the symbol Replace animation to symbol images that it is applied to.

## Declaration

```swift
static func symbolEffect<T>(_ effect: T, options: SymbolEffectOptions = .default) -> ContentTransition where T : ContentTransitionSymbolEffect, T : SymbolEffect
```

<a id="return-value"></a>

## Return Value

A new content transition.

## See Also

### Getting content transitions

- [identity](identity.md): The identity content transition, which indicates that content changes shouldn’t animate.
- [interpolate](interpolate.md): A content transition that indicates the views attempt to interpolate their contents during transitions, where appropriate.
- [numericText(countsDown:)](numerictext%28countsdown_%29.md): Creates a content transition intended to be used with `Text` views displaying numeric text. In certain environments changes to the text will enable a nonstandard transition tailored to numeric characters that count up or down.
- [numericText(value:)](numerictext%28value_%29.md): Creates a content transition intended to be used with `Text` views displaying numbers.
- [opacity](opacity.md): A content transition that indicates content fades from transparent to opaque on insertion, and from opaque to transparent on removal.
- [symbolEffect](symboleffect.md): A content transition that applies the default symbol effect transition to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
