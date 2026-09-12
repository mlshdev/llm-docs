> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedchartcontent/opacity(_:)](https://developer.apple.com/documentation/charts/vectorizedchartcontent/opacity(_:))

# opacity(\_:)

**Framework:** Swift Charts  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
nonisolated func opacity(_ keyPath: KeyPath<Self.DataElement, CGFloat>) -> some VectorizedChartContent<Self.DataElement>

```

## Parameters

- `keyPath`: Points to a value between 0 (fully transparent) and 1 (fully opaque).

## See Also

### Styling marks

- [foregroundStyle(\_:)](foregroundstyle%28__%29.md): Represents data using a foreground style.
- [lineStyle(\_:)](linestyle%28__%29.md): Represents data using line styles.
- [position(by:axis:span:)](position%28by_axis_span_%29.md)
