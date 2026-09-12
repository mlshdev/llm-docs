> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axismarkbuilder](https://developer.apple.com/documentation/charts/axismarkbuilder)

# AxisMarkBuilder

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A result builder that constructs axis marks and overrides default marks.

## Declaration

```swift
@resultBuilder struct AxisMarkBuilder
```

## Topics

### Type Methods

- [buildBlock()](axismarkbuilder/buildblock%28%29.md)
- [buildBlock(\_:)](axismarkbuilder/buildblock%28__%29-5kk19.md): Builds a result from a single component.
- [buildBlock(\_:)](axismarkbuilder/buildblock%28__%29-97cxo.md): Builds a result from multiple components.
- [buildEither(first:)](axismarkbuilder/buildeither%28first_%29.md): Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “then” branch.
- [buildEither(second:)](axismarkbuilder/buildeither%28second_%29.md): Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “else” branch.
- [buildExpression(\_:)](axismarkbuilder/buildexpression%28__%29.md)
- [buildIf(\_:)](axismarkbuilder/buildif%28__%29.md): Provides support for “if” statements in multi-statement closures, producing an optional axis content that is visible only when the condition evaluates to `true`.
- [buildLimitedAvailability(\_:)](axismarkbuilder/buildlimitedavailability%28__%29.md): Provides support for “if” statements with `#available()` clauses in multi-statement closures, producing conditional content for the “then” branch, i.e. the conditionally-available branch.

## See Also

### Axis marks

- [AxisMark](axismark.md): A type that serves as the basic building block for the elements of an axis.
- [AxisTick](axistick.md): A mark that a chart draws on an axis to indicate a reference point along that axis.
- [AxisGridLine](axisgridline.md): A line that a chart draws across its plot area to indicate a reference point along a particular axis.
- [AxisValueLabel](axisvaluelabel.md): A label that describes the value for an axis mark.
- [AxisValue](axisvalue.md): A value for an axis mark.
- [AnyAxisMark](anyaxismark.md): A type-erased axis mark.
