> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contenttransition/identity](https://developer.apple.com/documentation/swiftui/contenttransition/identity)

# identity

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The identity content transition, which indicates that content changes shouldn’t animate.

## Declaration

```swift
static let identity: ContentTransition
```

<a id="discussion"></a>

## Discussion

You can pass this value to a [contentTransition(\_:)](../view/contenttransition%28__%29.md) modifier to selectively disable animations that would otherwise be applied by a [withAnimation(\_:\_:)](../withanimation%28____%29.md) block.

## See Also

### Getting content transitions

- [interpolate](interpolate.md): A content transition that indicates the views attempt to interpolate their contents during transitions, where appropriate.
- [numericText(countsDown:)](numerictext%28countsdown_%29.md): Creates a content transition intended to be used with `Text` views displaying numeric text. In certain environments changes to the text will enable a nonstandard transition tailored to numeric characters that count up or down.
- [numericText(value:)](numerictext%28value_%29.md): Creates a content transition intended to be used with `Text` views displaying numbers.
- [opacity](opacity.md): A content transition that indicates content fades from transparent to opaque on insertion, and from opaque to transparent on removal.
- [symbolEffect](symboleffect.md): A content transition that applies the default symbol effect transition to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
- [symbolEffect(\_:options:)](symboleffect%28__options_%29.md): Creates a content transition that applies the symbol Replace animation to symbol images that it is applied to.
