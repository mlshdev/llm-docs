> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/scrollinputkind/look(axes:)

# look(axes:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

On visionOS, by looking at the edge of a scroll view the content can automatically scroll. This contructor method takes a set of the scrollable axes.

## Declaration

```swift
static func look(axes: Axis.Set) -> ScrollInputKind
```

<a id="discussion"></a>

## Discussion

This is an opt-in behavior.
