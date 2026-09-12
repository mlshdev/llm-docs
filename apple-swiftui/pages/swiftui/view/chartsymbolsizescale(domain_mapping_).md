> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartsymbolsizescale(domain:mapping:)](https://developer.apple.com/documentation/swiftui/view/chartsymbolsizescale(domain:mapping:))

# chartSymbolSizeScale(domain:mapping:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the symbol size scale for charts.

## Declaration

```swift
nonisolated func chartSymbolSizeScale<Domain>(domain: Domain, mapping: @escaping (Domain.Element) -> CGFloat) -> some View where Domain : Collection, Domain.Element : Plottable

```

## Parameters

- `domain`: The possible data values plotted as symbol size in the chart.
- `mapping`: Maps data categories to symbol sizes.

## See Also

### Symbol size scales

- [chartSymbolSizeScale(\_:)](chartsymbolsizescale%28__%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(domain:range:type:)](chartsymbolsizescale%28domain_range_type_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(domain:type:)](chartsymbolsizescale%28domain_type_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(mapping:)](chartsymbolsizescale%28mapping_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(range:type:)](chartsymbolsizescale%28range_type_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(type:)](chartsymbolsizescale%28type_%29.md): Configures the symbol size scale for charts.
