> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plot](https://developer.apple.com/documentation/charts/plot)

# Plot

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A mechanism for grouping chart contents into a single entity.

## Declaration

```swift
@MainActor @preconcurrency struct Plot<Content> where Content : ChartContent
```

## Topics

### Initializers

- [init(content:)](plot/init%28content_%29.md)

## Relationships

### Conforms To

- [ChartContent](chartcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Charts

- [Creating a chart using Swift Charts](creating-a-chart-using-swift-charts.md): Make a chart by combining chart building blocks in SwiftUI.
- [Visualizing your app’s data](visualizing-your-app-s-data.md): Build complex and interactive charts using Swift Charts.
- [Chart](chart.md): A SwiftUI view that displays a chart.
- [ChartContent](chartcontent.md): Conforms when `Content` conforms to `ChartContent`. A type that represents the content that you draw on a chart.
- [ChartContentBuilder](chartcontentbuilder.md): A result builder that you use to compose the contents of a chart.
