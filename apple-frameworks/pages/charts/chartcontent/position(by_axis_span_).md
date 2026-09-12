> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontent/position(by:axis:span:)](https://developer.apple.com/documentation/charts/chartcontent/position(by:axis:span:))

# position(by:axis:span:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Represents data using position.

## Declaration

```swift
nonisolated func position<P>(by value: PlottableValue<P>, axis: Axis? = nil, span: MarkDimension = .automatic) -> some ChartContent where P : Plottable

```

## Parameters

- `value`: The data used for positioning marks.
- `axis`: The axis to position marks along. Set this to `nil` to use a default configuration.
- `span`: The span of the positioned marks. Use this to control the total amount space available to the marks.

<a id="discussion"></a>

## Discussion

The code below creates a grouped bar chart that positions marks with the same “product” along the horizontal axis by their “type”.

```swift
Chart(cars) {
    BarMark(
        x: .value("product", $0.product),
        y: .value("price", $0.price)
    )
    .position(by: .value("type", $0.type), axis: .horizontal)
}
```

## See Also

### Encoding data into mark characteristics

- [foregroundStyle(by:)](foregroundstyle%28by_%29.md): Represents data using a foreground style.
- [lineStyle(by:)](linestyle%28by_%29.md): Represents data using line styles.
- [symbol(by:)](symbol%28by_%29.md): Represents data using different kinds of symbols.
- [symbolSize(by:)](symbolsize%28by_%29.md): Represents data using symbol sizes.
