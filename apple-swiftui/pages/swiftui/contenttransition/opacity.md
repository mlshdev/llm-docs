> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contenttransition/opacity](https://developer.apple.com/documentation/swiftui/contenttransition/opacity)

# opacity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A content transition that indicates content fades from transparent to opaque on insertion, and from opaque to transparent on removal.

## Declaration

```swift
static let opacity: ContentTransition
```

## See Also

### Getting content transitions

- [identity](identity.md): The identity content transition, which indicates that content changes shouldn’t animate.
- [interpolate](interpolate.md): A content transition that indicates the views attempt to interpolate their contents during transitions, where appropriate.
- [numericText(countsDown:)](numerictext%28countsdown_%29.md): Creates a content transition intended to be used with `Text` views displaying numeric text. In certain environments changes to the text will enable a nonstandard transition tailored to numeric characters that count up or down.
- [numericText(value:)](numerictext%28value_%29.md): Creates a content transition intended to be used with `Text` views displaying numbers.
- [symbolEffect](symboleffect.md): A content transition that applies the default symbol effect transition to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
- [symbolEffect(\_:options:)](symboleffect%28__options_%29.md): Creates a content transition that applies the symbol Replace animation to symbol images that it is applied to.
