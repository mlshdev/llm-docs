> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/chartlinestylescale(range:)](https://developer.apple.com/documentation/swiftui/view/chartlinestylescale(range:))

# chartLineStyleScale(range:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Configures the line style scale for charts.

## Declaration

```swift
nonisolated func chartLineStyleScale<Range>(range: Range) -> some View where Range : ScaleRange, Range.VisualValue == StrokeStyle

```

## Parameters

- `range`: The range of line styles that correspond to the scale domain.

## See Also

### Line style scales

- [chartLineStyleScale(\_:)](chartlinestylescale%28__%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(domain:)](chartlinestylescale%28domain_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(domain:range:)](chartlinestylescale%28domain_range_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(domain:mapping:)](chartlinestylescale%28domain_mapping_%29.md): Configures the line style scale for charts.
- [chartLineStyleScale(mapping:)](chartlinestylescale%28mapping_%29.md): Configures the line style scale for charts.
