> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/font/resolve(in:)](https://developer.apple.com/documentation/swiftui/font/resolve(in:))

# resolve(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Evaluates this font to a resolved font given the current context.

## Declaration

```swift
func resolve(in context: Font.Context) -> Font.Resolved
```

<a id="discussion"></a>

## Discussion

The system resolves a font’s value at the time it uses the font in a given environment’s context because [Font](../font.md) is a late-binding token.

> **See Also**

> [fontResolutionContext](../environmentvalues/fontresolutioncontext.md)
