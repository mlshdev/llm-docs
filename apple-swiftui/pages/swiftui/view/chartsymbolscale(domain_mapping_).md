> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartsymbolscale(domain:mapping:)](https://developer.apple.com/documentation/swiftui/view/chartsymbolscale(domain:mapping:))

# chartSymbolScale(domain:mapping:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the symbol scale for charts.

## Declaration

```swift
nonisolated func chartSymbolScale<Domain, S>(domain: Domain, mapping: @escaping (Domain.Element) -> S) -> some View where Domain : Collection, S : ChartSymbolShape, Domain.Element : Plottable

```

## Parameters

- `domain`: The possible data values plotted as symbol in the chart.
- `mapping`: Maps data categories to symbol shapes.

## See Also

### Symbol scales

- [chartSymbolScale(\_:)](chartsymbolscale%28__%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(domain:)](chartsymbolscale%28domain_%29.md): Configures the symbol style scale for charts.
- [chartSymbolScale(domain:range:)](chartsymbolscale%28domain_range_%29.md): Configures the symbol style scale for charts.
- [chartSymbolScale(mapping:)](chartsymbolscale%28mapping_%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(range:)](chartsymbolscale%28range_%29.md): Configures the symbol style scale for charts.
