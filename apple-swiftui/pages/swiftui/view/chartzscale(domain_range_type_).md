> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartzscale(domain:range:type:)](https://developer.apple.com/documentation/swiftui/view/chartzscale(domain:range:type:))

# chartZScale(domain:range:type:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Configures the z scale for 3D charts.

## Declaration

```swift
nonisolated func chartZScale<Domain, Range>(domain: Domain, range: Range, type: ScaleType? = nil) -> some View where Domain : ScaleDomain, Range : PositionScaleRange

```

## Parameters

- `domain`: The possible data values along the z axis in the chart. You can define the domain with a `ClosedRange` for numeric values.
- `range`: The range of x positions that correspond to the scale domain. By default the range is determined by the dimension of the plot area.
- `type`: The scale type.

## See Also

### Axis scales

- [chartXScale(domain:range:type:)](chartxscale%28domain_range_type_%29.md): Configures the x scale for charts.
- [chartXScale(domain:type:)](chartxscale%28domain_type_%29.md): Configures the x scale for charts.
- [chartXScale(range:type:)](chartxscale%28range_type_%29.md): Configures the x scale for charts.
- [chartXScale(type:)](chartxscale%28type_%29.md): Configures the x scale for charts.
- [chartYScale(domain:range:type:)](chartyscale%28domain_range_type_%29.md): Configures the y scale for charts.
- [chartYScale(domain:type:)](chartyscale%28domain_type_%29.md): Configures the y scale for charts.
- [chartYScale(range:type:)](chartyscale%28range_type_%29.md): Configures the y scale for charts.
- [chartYScale(type:)](chartyscale%28type_%29.md): Configures the y scale for charts.
- [chartZScale(domain:type:)](chartzscale%28domain_type_%29.md): Configures the z scale for 3D charts.
- [chartZScale(range:type:)](chartzscale%28range_type_%29.md): Configures the z scale for 3D charts.
