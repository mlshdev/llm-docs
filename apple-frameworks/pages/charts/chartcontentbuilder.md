> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontentbuilder](https://developer.apple.com/documentation/charts/chartcontentbuilder)

# ChartContentBuilder

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A result builder that you use to compose the contents of a chart.

## Declaration

```swift
@resultBuilder struct ChartContentBuilder
```

<a id="overview"></a>

## Overview

This [Result Builder](https://docs.swift.org/swift-book/LanguageGuide/AdvancedOperators.html#ID630) combines any number of [ChartContent](chartcontent.md) instances into a single composite instance, including support for conditionals.

You don’t call the methods of the result builder directly. Instead, Swift uses them to combine the elements that you declare in any closure that has the `@ChartContentBuilder` attribute. In particular, you rely on this behavior when you declare the `content` inside a [Chart](chart.md) initializer like [init(content:)](chart/init%28content_%29.md).

## Topics

### Building chart content

- [buildBlock()](chartcontentbuilder/buildblock%28%29.md): Produces empty chart content.

### Building conditionally

- [buildIf(\_:)](chartcontentbuilder/buildif%28__%29.md): Builds a partial result that’s conditionally present.
- [buildEither(first:)](chartcontentbuilder/buildeither%28first_%29.md): Builds a partial result from a condition that’s true.
- [buildEither(second:)](chartcontentbuilder/buildeither%28second_%29.md): Builds a partial result from a condition that’s false.

### Building with conditional availability

- [buildLimitedAvailability(\_:)](chartcontentbuilder/buildlimitedavailability%28__%29.md): Builds a partial result that propagates or erases type information outside a compiler-controlled availability check.

### Supporting types

- [BuilderConditional](builderconditional.md): A conditional result from a result builder.

### Type Methods

- [buildBlock(\_:)](chartcontentbuilder/buildblock%28__%29-51ukk.md): Builds a result from multiple components.
- [buildBlock(\_:)](chartcontentbuilder/buildblock%28__%29-797vj.md): Builds a result from a single component.
- [buildExpression(\_:)](chartcontentbuilder/buildexpression%28__%29.md)

## See Also

### Charts

- [Creating a chart using Swift Charts](creating-a-chart-using-swift-charts.md): Make a chart by combining chart building blocks in SwiftUI.
- [Visualizing your app’s data](visualizing-your-app-s-data.md): Build complex and interactive charts using Swift Charts.
- [Chart](chart.md): A SwiftUI view that displays a chart.
- [ChartContent](chartcontent.md): A type that represents the content that you draw on a chart.
- [Plot](plot.md): A mechanism for grouping chart contents into a single entity.
