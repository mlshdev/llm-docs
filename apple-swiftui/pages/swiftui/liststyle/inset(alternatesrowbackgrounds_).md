> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/liststyle/inset(alternatesrowbackgrounds:)](https://developer.apple.com/documentation/swiftui/liststyle/inset(alternatesrowbackgrounds:))

# inset(alternatesRowBackgrounds:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 27.0)

The list style that describes the behavior and appearance of an inset list with optional alternating row backgrounds.

> Use the [inset](inset.md) style and add the [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md) view modifier instead.

## Declaration

```swift
@export(implementation) static func inset(alternatesRowBackgrounds: Bool) -> InsetListStyle
```

## Parameters

- `alternatesRowBackgrounds`: Whether the rows should alternate their backgrounds to help visually distinguish them from each other.

## See Also

### Deprecated styles

- [bordered(alternatesRowBackgrounds:)](bordered%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `BorderedListStyle`. The list style that describes the behavior and appearance of a list with standard border.
