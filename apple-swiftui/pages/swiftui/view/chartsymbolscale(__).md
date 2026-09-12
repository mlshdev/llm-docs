> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartsymbolscale(_:)](https://developer.apple.com/documentation/swiftui/view/chartsymbolscale(_:))

# chartSymbolScale(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the symbol scale for charts.

## Declaration

```swift
nonisolated func chartSymbolScale<DataValue, S>(_ mapping: KeyValuePairs<DataValue, S>) -> some View where DataValue : Plottable, S : ChartSymbolShape

```

## Parameters

- `mapping`: Maps data categories to symbol shapes.

## See Also

### Symbol scales

- [chartSymbolScale(domain:)](chartsymbolscale%28domain_%29.md): Configures the symbol style scale for charts.
- [chartSymbolScale(domain:range:)](chartsymbolscale%28domain_range_%29.md): Configures the symbol style scale for charts.
- [chartSymbolScale(domain:mapping:)](chartsymbolscale%28domain_mapping_%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(mapping:)](chartsymbolscale%28mapping_%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(range:)](chartsymbolscale%28range_%29.md): Configures the symbol style scale for charts.
