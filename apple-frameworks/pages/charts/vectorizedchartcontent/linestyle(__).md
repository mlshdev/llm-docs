> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/linestyle(_:)](https://developer.apple.com/documentation/charts/vectorizedchartcontent/linestyle(_:))

# lineStyle(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Represents data using line styles.

## Declaration

```swift
nonisolated func lineStyle(_ style: KeyPath<Self.DataElement, StrokeStyle>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `style`: The keyPath accessor for shape style.

## See Also

### Styling marks

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Represents data using a foreground style.
- [opacity(\_:)](opacity%28__%29.md)
- [position(by:axis:span:)](position%28by_axis_span_%29.md)
