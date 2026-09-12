> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartsymbolscale(domain:)](https://developer.apple.com/documentation/swiftui/view/chartsymbolscale(domain:))

# chartSymbolScale(domain:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the symbol style scale for charts.

## Declaration

```swift
nonisolated func chartSymbolScale<Domain>(domain: Domain) -> some View where Domain : ScaleDomain

```

## Parameters

- `domain`: The possible data values plotted as symbols in the chart. You can define the domain with an array for categorical values (e.g., `["A", "B", "C"]`)

## See Also

### Symbol scales

- [chartSymbolScale(\_:)](chartsymbolscale%28__%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(domain:range:)](chartsymbolscale%28domain_range_%29.md): Configures the symbol style scale for charts.
- [chartSymbolScale(domain:mapping:)](chartsymbolscale%28domain_mapping_%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(mapping:)](chartsymbolscale%28mapping_%29.md): Configures the symbol scale for charts.
- [chartSymbolScale(range:)](chartsymbolscale%28range_%29.md): Configures the symbol style scale for charts.
