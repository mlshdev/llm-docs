> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle/inset(alternatesrowbackgrounds:)](https://developer.apple.com/documentation/swiftui/tablestyle/inset(alternatesrowbackgrounds:))

# inset(alternatesRowBackgrounds:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 27.0)

The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.

> Use the [inset](inset.md) style and add the [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md) view modifier instead.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static func inset(alternatesRowBackgrounds: Bool) -> InsetTableStyle
```

## Parameters

- `alternatesRowBackgrounds`: Whether the rows should alternate their backgrounds to help visually distinguish them from each other.

## See Also

### Deprecated styles

- [bordered(alternatesRowBackgrounds:)](bordered%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `BorderedTableStyle`. The table style that describes the behavior and appearance of a table with standard border.
