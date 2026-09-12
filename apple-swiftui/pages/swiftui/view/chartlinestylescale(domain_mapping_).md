> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartlinestylescale(domain:mapping:)](https://developer.apple.com/documentation/swiftui/view/chartlinestylescale(domain:mapping:))

# chartLineStyleScale(domain:mapping:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the line style scale for charts.

## Declaration

```swift
nonisolated func chartLineStyleScale<Domain>(domain: Domain, mapping: @escaping (Domain.Element) -> StrokeStyle) -> some View where Domain : Collection, Domain.Element : Plottable

```

## Parameters

- `domain`: The possible data values plotted as line style in the chart.
- `mapping`: Maps data categories to line styles.

## See Also

### Line style scales

- [chartLineStyleScale(\_:)](chartlinestylescale%28__%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(domain:)](chartlinestylescale%28domain_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(domain:range:)](chartlinestylescale%28domain_range_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(range:)](chartlinestylescale%28range_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(mapping:)](chartlinestylescale%28mapping_%29.md): Configures the line style scale for charts.
