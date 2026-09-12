> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/foregroundstyle(_:)](https://developer.apple.com/documentation/charts/vectorizedchartcontent/foregroundstyle(_:))

# foregroundStyle(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Represents data using a foreground style.

## Declaration

```swift
nonisolated func foregroundStyle(_ keyPath: KeyPath<Self.DataElement, some ShapeStyle>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `keyPath`: The accessor for shape style.

## See Also

### Styling marks

- [opacity(\_:)](opacity%28__%29.md)
- [lineStyle(\_:)](linestyle%28__%29.md): Represents data using line styles.
- [position(by:axis:span:)](position%28by_axis_span_%29.md)
