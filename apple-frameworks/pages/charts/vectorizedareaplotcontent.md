> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/vectorizedareaplotcontent](https://developer.apple.com/documentation/charts/vectorizedareaplotcontent)

# VectorizedAreaPlotContent

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An opaque vectorized chart content type.

## Declaration

```swift
@MainActor @preconcurrency struct VectorizedAreaPlotContent<Data> where Data : RandomAccessCollection
```

<a id="overview"></a>

## Overview

Don’t use this type directly. Swift Charts automatically instantiates and consumes values of this type.

## Relationships

### Conforms To

- [ChartContent](chartcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VectorizedChartContent](vectorizedchartcontent.md)

## See Also

### Supporting types

- [body](chartcontent/body-swift.property.md): The content and behavior of the chart content.
- [FunctionAreaPlotContent](functionareaplotcontent.md)
