> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/lineheight/exact(points:)](https://developer.apple.com/documentation/foundation/attributedstring/lineheight/exact(points:))

# exact(points:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Constant line height based on a fixed total.

## Declaration

```swift
static func exact(points: CGFloat) -> AttributedString.LineHeight
```

<a id="discussion"></a>

## Discussion

Defines the line height as the exact given total (in points), regardless of the effective ascent and descent of the fonts in use.
