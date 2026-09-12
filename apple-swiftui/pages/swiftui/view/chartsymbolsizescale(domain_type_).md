> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartsymbolsizescale(domain:type:)](https://developer.apple.com/documentation/swiftui/view/chartsymbolsizescale(domain:type:))

# chartSymbolSizeScale(domain:type:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the symbol size scale for charts.

## Declaration

```swift
nonisolated func chartSymbolSizeScale<Domain>(domain: Domain, type: ScaleType? = nil) -> some View where Domain : ScaleDomain

```

## Parameters

- `domain`: The possible data values plotted as symbol sizes in the chart. You can define the domain with an array for categorical values (e.g., `["A", "B", "C"]`)
- `type`: The scale type.

## See Also

### Symbol size scales

- [chartSymbolSizeScale(\_:)](chartsymbolsizescale%28__%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(domain:range:type:)](chartsymbolsizescale%28domain_range_type_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(domain:mapping:)](chartsymbolsizescale%28domain_mapping_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(mapping:)](chartsymbolsizescale%28mapping_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(range:type:)](chartsymbolsizescale%28range_type_%29.md): Configures the symbol size scale for charts.
- [chartSymbolSizeScale(type:)](chartsymbolsizescale%28type_%29.md): Configures the symbol size scale for charts.
