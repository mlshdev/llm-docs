> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axiscontentbuilder](https://developer.apple.com/documentation/charts/axiscontentbuilder)

# AxisContentBuilder

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A result builder that constructs axis content.

## Declaration

```swift
@resultBuilder struct AxisContentBuilder
```

## Topics

### Type Methods

- [buildBlock()](axiscontentbuilder/buildblock%28%29.md)
- [buildBlock(\_:)](axiscontentbuilder/buildblock%28__%29-27fku.md): Builds a result from a single component.
- [buildBlock(\_:)](axiscontentbuilder/buildblock%28__%29-6p3cy.md): Builds a result from multiple components.
- [buildEither(first:)](axiscontentbuilder/buildeither%28first_%29.md): Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “then” branch.
- [buildEither(second:)](axiscontentbuilder/buildeither%28second_%29.md): Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “else” branch.
- [buildExpression(\_:)](axiscontentbuilder/buildexpression%28__%29.md)
- [buildIf(\_:)](axiscontentbuilder/buildif%28__%29.md): Provides support for “if” statements in multi-statement closures, producing an optional axis content that is visible only when the condition evaluates to `true`.
- [buildLimitedAvailability(\_:)](axiscontentbuilder/buildlimitedavailability%28__%29.md): Provides support for “if” statements with `#available()` clauses in multi-statement closures, producing conditional content for the “then” branch, i.e. the conditionally-available branch.

## See Also

### Axes

- [Customizing axes in Swift Charts](customizing-axes-in-swift-charts.md): Improve the clarity of your chart by configuring the appearance of its axes.
- [ChartAxisContent](chartaxiscontent.md): A view that represents a chart’s axis.
- [AxisContent](axiscontent.md): A type that represents the elements you use to build a chart’s axes.
- [AxisMarks](axismarks.md): A group of visual marks that a chart draws to indicate the composition of a chart’s axes.
- [AnyAxisContent](anyaxiscontent.md): A type-erased element of a chart’s axis.
