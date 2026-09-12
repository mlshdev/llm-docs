> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottablevalue](https://developer.apple.com/documentation/charts/plottablevalue)

# PlottableValue

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Labeled data that you plot in a chart using marks.

## Declaration

```swift
struct PlottableValue<Value> where Value : Plottable
```

<a id="overview"></a>

## Overview

Provide a `PlottableValue` to a `Mark` property (e.g., x, y, foregroundStyle) to plot data values with the mark property.

> **Important**

> The data type must conform to [Plottable](plottable.md). This is a numeric value like a [Double](https://developer.apple.com/documentation/swift/double) or [Int16](https://developer.apple.com/documentation/swift/int16) for quantitative data, [Date](../foundation/date.md) for temporal data, or [String](https://developer.apple.com/documentation/swift/string) for categorical data.

You can use the `.value("Category", \.category)` shorthand to create a `PlottableValue`. The example below plots category, value, and group with the bar mark’s x, y, and foregroundStyle.

```swift
struct Bar {
    let category: String
    let value: Double
    let group: String
}

let data: [Bar] = [
    Bar(category: "A", value: 20, group: "Group 1"),
    Bar(category: "A", value: 30, group: "Group 2"),
    Bar(category: "A", value: 10, group: "Group 3"),
    Bar(category: "B", value: 40, group: "Group 1"),
    Bar(category: "B", value: 20, group: "Group 2"),
    Bar(category: "B", value: 10, group: "Group 3"),
    //...
]

var body: some View {
    Chart(data) {
        BarMark(
            x: .value("Category", $0.category),
            y: .value("Quantity", $0.value)
        )
        .foregroundStyle(.value("Group", $0.group))
    }
}
```

## Topics

### Type Methods

- [value(\_:\_:)](plottablevalue/value%28____%29-13lvv.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-3sze5.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label key and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-4qa4d.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-6jxfn.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-6p2ls.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-70xhu.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label key and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-7ciwx.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-7ed58.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-7k0m0.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label key and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-8bsvd.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-9bdsw.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:)](plottablevalue/value%28____%29-f1kk.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:unit:calendar:)](plottablevalue/value%28____unit_calendar_%29-1rtpi.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:unit:calendar:)](plottablevalue/value%28____unit_calendar_%29-2r0fo.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.
- [value(\_:\_:unit:calendar:)](plottablevalue/value%28____unit_calendar_%29-8f7fe.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label key and value.
- [value(\_:\_:unit:calendar:)](plottablevalue/value%28____unit_calendar_%29-liyc.md): Conforms when `Value` conforms to `Plottable`. Creates a parameter value with label and value.

## See Also

### Labeled data

- [Plottable](plottable.md): A type that can serve as data to plot in a chart.
