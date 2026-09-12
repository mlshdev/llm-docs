> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tablestyle/bordered(alternatesrowbackgrounds:)](https://developer.apple.com/documentation/swiftui/tablestyle/bordered(alternatesrowbackgrounds:))

# bordered(alternatesRowBackgrounds:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 27.0)

The table style that describes the behavior and appearance of a table with standard border.

> Use the [bordered](bordered.md) style and add the [alternatingRowBackgrounds(\_:)](../view/alternatingrowbackgrounds%28__%29.md) view modifier instead.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static func bordered(alternatesRowBackgrounds: Bool) -> BorderedTableStyle
```

## Parameters

- `alternatesRowBackgrounds`: Whether the rows should alternate their backgrounds to help visually distinguish them from each other.

<a id="discussion"></a>

## Discussion

Bordered tables are expected to be inset from their outer containers, but do not have inset style rows or selection.

## See Also

### Deprecated styles

- [inset(alternatesRowBackgrounds:)](inset%28alternatesrowbackgrounds_%29.md): Deprecated. Conforms when `Self` is `InsetTableStyle`. The table style that describes the behavior and appearance of a table with its content and selection inset from the table edges.
