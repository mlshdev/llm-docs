> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/liststyle/bordered(alternatesrowbackgrounds:)

# bordered(alternatesRowBackgrounds:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 27.2)

The list style that describes the behavior and appearance of a list with standard border.

> Use the [bordered](bordered.md) style and add the [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md) view modifier instead.

## Declaration

```swift
@export(implementation) static func bordered(alternatesRowBackgrounds: Bool) -> BorderedListStyle
```

## Parameters

- `alternatesRowBackgrounds`: Whether the rows should alternate their backgrounds to help visually distinguish them from each other.

<a id="discussion"></a>

## Discussion

Bordered lists are expected to be inset from their outer containers, but do not have inset style rows or selection.

## See Also

### Deprecated styles

- [inset(alternatesRowBackgrounds:)](inset%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `InsetListStyle`. The list style that describes the behavior and appearance of an inset list with optional alternating row backgrounds.
