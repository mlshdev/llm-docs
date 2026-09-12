> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/bold(_:)](https://developer.apple.com/documentation/swiftui/font/bold(_:))

# bold(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds or removes bold or emphasized styling on the font.

## Declaration

```swift
func bold(_ isActive: Bool) -> Font
```

<a id="discussion"></a>

## Discussion

For fonts created from text styles, passing `true` could mean applying emphasized styling, which does not necessarily mean the bold weight specifically, so this modifier is not to be confused with [weight(\_:)](weight%28__%29.md).

For example:

```swift
Font.body.bold(true)
```

will most likely get you the emphasized version of body text style, which is often in [semibold](weight/semibold.md) weight. While

```swift
Font.body.weight(.bold)
```

will specifically get you the body text style font in the [bold](weight/bold.md) weight.

Using:

```swift
Font.body.bold(false)
```

will remove any emphasized styling from the font returning to its default weight which is most likely but not guaranteed to be 0.0 or [regular](weight/regular.md).
