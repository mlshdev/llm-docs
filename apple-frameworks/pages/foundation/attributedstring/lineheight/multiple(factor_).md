> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/lineheight/multiple(factor:)](https://developer.apple.com/documentation/foundation/attributedstring/lineheight/multiple(factor:))

# multiple(factor:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Constant line height based on a multiple of the point size.

## Declaration

```swift
static func multiple(factor: CGFloat) -> AttributedString.LineHeight
```

<a id="discussion"></a>

## Discussion

Definines the line height based on the largest point size multiplied by `factor`, regardless of the effective ascent and descent of the fonts in use.
